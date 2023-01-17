import { ForeignKey, Model, Table, } from "sequelize-typescript";
import { Column } from "sequelize-typescript/dist/model/column/column";
import { DataType } from "sequelize-typescript/dist/sequelize/data-type/data-type";
import { User } from "src/users/users.model";
import { Role } from "./roles.model";


@Table({ tableName: 'user_roles',createdAt:false,updatedAt:false })
export class UserRole extends Model<UserRole>{
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ForeignKey(()=>Role)
    @Column({ type: DataType.INTEGER })
    roleId : string;

    @ForeignKey(()=>User)
    @Column({ type: DataType.INTEGER})
    userId: string;

}