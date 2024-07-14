import { Injectable, Logger, NotFoundException, OnModuleInit } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Prisma, PrismaClient, Product } from '@prisma/client';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { IPaginationResponse } from 'src/common/interfaces/IPaginationResponse';

@Injectable()
export class ProductsService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger(ProductsService.name);

  async onModuleInit() {
    await this.$connect();
    this.logger.log('Connected to the database');
  }

  create(createProductDto: CreateProductDto) {
    return this.product.create({
      data: createProductDto,
    });
  }

  async findAll(paginationDto: PaginationDto): Promise<IPaginationResponse<Product>> {
    const where: Prisma.ProductWhereInput = {
      avaliable: true,
    }
    const totalProducts = await this.product.count({ where });
    const products = await this.product.findMany({
      take: paginationDto.limit,
      skip: paginationDto.offset,
      where
    });
    return PaginationDto.calcPagination({
      data: products,
      totalItems: totalProducts,
      limit: paginationDto.limit,
      page: paginationDto.page,
    });
  }

  async findOne(id: string) {
    const product = await this.product.findUnique({
      where: { id, avaliable: true },
    });

    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return product;
  }

  async update(updateProductDto: UpdateProductDto) {
    const { id, ...data } = updateProductDto;
    await this.findOne(id);

    return this.product.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.product.update({
      where: { id },
      data: {
        avaliable: false,
      },
    })
  }
}
