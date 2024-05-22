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
  const result = await Products.findById(_id)
  return result
}

//update product

const updateProductInformationInDB = async (_id: string) => {
  const value = { price: 10 }
  const result = await Products.findByIdAndUpdate(_id, value, { new: true })
  if (!result) {
    throw new Error('Product not found')
  }
  return result
}

const deleteProductFromDB = async (_id: string) => {
  const result = await Products.findByIdAndDelete(_id)
  if (!result) {
    throw new Error('Product not found')
  }
  return result
}


const searchProductsInDB = async (searchTerm: string) => {
    const regex = new RegExp(searchTerm, 'i'); // 'i' makes it case insensitive
    const result = await Products.find({ name: { $regex: regex } });
    return result;
  }

export const AllProducts = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  updateProductInformationInDB,
  deleteProductFromDB,
  searchProductsInDB,
}
