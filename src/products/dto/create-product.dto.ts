import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber, IsString, Min } from "class-validator";

export class CreateProductDto {
    @ApiProperty()
    @IsString()
    name: string;
    @ApiProperty(
        { type: Number }
    )
    @IsNumber()
    @Min(0)
    @Type(() => Number)
    price: number;
}
