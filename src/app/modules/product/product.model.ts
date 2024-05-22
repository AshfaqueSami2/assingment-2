import { Schema, model } from 'mongoose'
import { Inventory, Product, Variant } from './product.interface'

//variant schema
const variantSchema = new Schema<Variant>({
  type: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
})

//inventory schema
const inventorySchema = new Schema<Inventory>({
  quantity: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
})

//Product Schema

const productSchema = new Schema<Product>({
  name: { type: String, required: true,unique:true },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  variants: {
    // if there is any array of object it should wrap with [];
    type: [variantSchema],
    required: true,
  },
  inventory: {
    type: inventorySchema,
    required: true,
  },
})

export const Products = model('Product', productSchema)
