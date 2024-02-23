import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export interface Product {
  name: string;
  price: number;
}

@Schema()
export class Products extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;
}

export const ProductSchema = SchemaFactory.createForClass(Products);
