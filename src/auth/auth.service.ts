import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs'
import { User } from 'src/users/users.model';
// import {UnauthorizedException}

@Injectable()
export class AuthService {
    // bcrypt: any;
    constructor(private userService: UsersService, private jwtService: JwtService) { }

    async login(userDto: CreateUserDto) {
        const user =await this.validateUser(userDto)
        return this.generateToken( user)
    }
    private async validateUser(userDto: CreateUserDto) {
        const user = await this.userService.getUserByEmail(userDto.email);
        const pswEq=await bcrypt.compare(userDto.password,user.password)

        if(user&&pswEq){
            return user
        }else{
            throw new UnauthorizedException({message:"The email or password is incorrect"})
        }

    }

    async signup(userDto: CreateUserDto) {
        const candidate = await this.userService.getUserByEmail(userDto.email)
        if (candidate) {
            throw new HttpException('email already exists', HttpStatus.BAD_REQUEST)
        }
        const hashPsw = await bcrypt.hash(userDto.password, 5)
        const user = await this.userService.createUser({ ...userDto, password: hashPsw })
        return this.generateToken(user)
    }
    private async generateToken(user: User) {
        const payload = {
            email: user.email, id: user.id, roles: user.roles
        }
        return {
            token: this.jwtService.sign(payload)
        }
    }
}
