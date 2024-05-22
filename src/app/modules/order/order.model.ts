import {  Schema, model } from 'mongoose';
import { Order } from './order.interface';

const orderSchema = new Schema<Order>({
  email: {
    type: String,
    required: true,
    unique:true,
  },
  productId: {
    type:String,
    ref: 'Product',
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

export const Orders = model<Order>('Order', orderSchema);