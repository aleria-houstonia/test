import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import { Model, Table, BelongsToMany} from "sequelize-typescript";
import { Column } from "sequelize-typescript/dist/model/column/column";
import { DataType } from "sequelize-typescript/dist/sequelize/data-type/data-type";
import { Role } from "src/roles/roles.model";
import { UserRole } from "src/roles/users-roles.model";

interface UserCreationAttrs{
    email :string;
    password:string;
}

@Table({ tableName: 'users' })
export class User extends Model<User,UserCreationAttrs>{
    @ApiProperty({example:'1',description:"Unique id"})
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({example:'user@gmail.com',description:"email"})
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    email: string;

    @ApiProperty({example:'12345678',description:"password"})
    @Column({ type: DataType.STRING, allowNull: false })
    password: string;

    @ApiProperty({example:'true',description:"banned or not"})
    @Column({ type: DataType.BOOLEAN, defaultValue: false })
    banned: boolean;

    @ApiProperty({example:"fraud",description:"reason for ban"})
    @Column({ type: DataType.STRING, allowNull: true })
    banReason: string;

    
    @BelongsToMany(()=>Role,()=>UserRole)
    roles:Role[]
}