import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    @ApiProperty({
        required: false
    })
    name?: string;
    @ApiProperty({
        required: false
    })
    price?: number;

    @IsString()
    @IsUUID()
    id: string;
}
