import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import { Model, Table,BelongsToMany } from "sequelize-typescript";
import { Column } from "sequelize-typescript/dist/model/column/column";
import { DataType } from "sequelize-typescript/dist/sequelize/data-type/data-type";
import { User } from "src/users/users.model";
import { UserRole } from "./users-roles.model";

interface RoleCreationAttrs{
    value :string;
    description:string;
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role,RoleCreationAttrs>{
    @ApiProperty({example:'1',description:"Unique id"})
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;


    @ApiProperty({example:'ADMIN',description:"value of user's role"})
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    value: string;

    @ApiProperty({example:'admin',description:"description of user's role"})
    @Column({ type: DataType.STRING, allowNull: false })
    description: string;

    @BelongsToMany(()=> User, ()=>UserRole)
    users:User[]
}   