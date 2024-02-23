import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './schemas/product.schema';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getAllProducts(): Promise<Product[]> {
    return this.productService.getAllProducts();
  }

  @Get(':id')
  async getProductById(@Param('id') id: string): Promise<Product> {
    return this.productService.getProductById(id);
  }

  @Post()
  async createProduct(@Body() productDto: Product): Promise<Product> {
    return this.productService.createProduct(productDto);
  }

  @Put(':id')
  async updateProduct(@Param('id') id: string, @Body() productDto: Product): Promise<Product> {
    return this.productService.updateProduct(id, productDto);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string): Promise<void> {
    return this.productService.deleteProduct(id);
  }
}
