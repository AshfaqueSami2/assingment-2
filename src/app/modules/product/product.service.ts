import { Product } from './product.interface'
import { Products } from './product.model'

const createProductIntoDB = async (productData: Product) => {
  const newProduct = new Products(productData)
  const result = await newProduct.save()
  return result
}

//getting all product from DB
const getAllProductFromDB = async () => {
  const result = await Products.find()
  return result
}

//getting a single product from DB
const getSingleProductFromDB = async (_id: string) => {
  const result = await Products.findById( _id )
  return result
}

export const AllProducts = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
}
