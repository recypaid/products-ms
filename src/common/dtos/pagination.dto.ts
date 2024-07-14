import { Type } from "class-transformer";
import { IsNumber, IsOptional } from "class-validator";
import { IPaginationResponse } from "../interfaces/IPaginationResponse";

export class PaginationDto {
    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    page: number;

    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    limit: number;

    constructor(page: number, limit: number) {
        this.page = page;
        this.limit = limit;
    }

    get offset() {
        return (this.page - 1) * this.limit;
    }

    static calcPagination<T>({
        data,
        totalItems,
        limit,
        page
    }: {
        data: T[];
        totalItems: number;
        limit: number;
        page: number;
    }): IPaginationResponse<T> {
        return {
            data,
            meta: {
                totalItems,
                currentPage: page,
                lastPage: Math.ceil(totalItems / limit),
            },
        }
    }





}