import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './users.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from 'src/roles/roles.model';
import { UserRole } from 'src/roles/users-roles.model';
import { RolesModule } from 'src/roles/roles.module';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports:[
    SequelizeModule.forFeature([User,Role,UserRole]),
    RolesModule
  ],
  exports:[
    UsersService
  ]
})
export class UsersModule {}
