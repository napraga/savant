import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, Products } from './schemas/product.schema';

@Injectable()
export class ProductService {
    constructor(@InjectModel(Products.name) private readonly productModel: Model<Products>) {}

  async getAllProducts(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async getProductById(id: string): Promise<Product> {
    return this.productModel.findById(id).exec();
  }

  async createProduct(productDto: Product): Promise<Product> {
    const createdProduct = new this.productModel(productDto);
    return createdProduct.save();
  }

  async updateProduct(id: string, productDto: Product): Promise<Product> {
    return this.productModel.findByIdAndUpdate(id, productDto, { new: true }).exec();
  }

  async deleteProduct(id: string): Promise<void> {
    await this.productModel.findByIdAndDelete(id).exec();
  }
}