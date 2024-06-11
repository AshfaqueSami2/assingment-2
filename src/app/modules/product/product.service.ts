import { Product } from './product.interface'
import { Products } from './product.model'

//create a product in DB
const createProductIntoDB = async (productData: Product) => {
  // const result = await Products.insertMany(productData)
  // return result
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
// Update product information
const updateProductInformationInDB = async (_id: string, updateData: Partial<Product>) => {
  const result = await Products.findByIdAndUpdate(_id, updateData, { new: true });
  if (!result) {
    throw new Error('Product not found');
  }
  return result;
};

//delete a product from DB
const deleteProductFromDB = async (_id: string) => {
  const result = await Products.findByIdAndDelete(_id)
  if (!result) {
    throw new Error('Product not found')
  }
  return result
}

//Search a product
const searchProductsInDB = async (searchTerm: string) => {
  const regex = new RegExp(searchTerm)
  const result = await Products.find({
    $or: [
      { name: { $regex: regex } },
      { category: { $regex: regex } },
      { description: { $regex: regex } },
    ],
  })
  return result
}

export const AllProducts = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  updateProductInformationInDB,
  deleteProductFromDB,
  searchProductsInDB,
}
