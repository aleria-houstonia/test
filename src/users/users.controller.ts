import { Body, Controller, Post, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger/dist';
import { ApiTags } from '@nestjs/swagger/dist/decorators/api-use-tags.decorator';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';
import { UsersService } from './users.service';
@ApiTags('Users')
@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) { }

    @ApiOperation({ summary: "Create User" })
    @ApiResponse({status:200,type:User})
    @Post()
    createUser(@Body() userDto: CreateUserDto) {
        return this.userService.createUser(userDto);
    }
    @ApiOperation({ summary: "Get all users" })
    @ApiResponse({status:200,type:[User]})
    @Get()
    getAll() {
        return this.userService.getAllUsers();
    }
}
