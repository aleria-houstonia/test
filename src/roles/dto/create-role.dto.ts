import { ApiProperty } from "@nestjs/swagger/dist/decorators/api-property.decorator";

export class CreateRoleDto{
    @ApiProperty({example:'ADMIN',description:"user's role"})
    readonly value:string;
    @ApiProperty({example:'admin',description:"descrition of user's role"})
    readonly description:string;
}