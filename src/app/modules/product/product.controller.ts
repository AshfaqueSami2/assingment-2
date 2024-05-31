import { Request, Response } from 'express'
import productsArrayValidationSchema from './product.validation'
import { AllProducts } from './product.service'

//creating a product
const createProduct = async (req: Request, res: Response) => {
  try {
    const ProductData = req.body

    //data validation using zod
    const zodParseData = productsArrayValidationSchema.parse(ProductData)
    const result = await AllProducts.createProductIntoDB(zodParseData)
    res.status(200).json({
      success: true,
      message: 'Product Created Successfully',
      data: result,
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
      eror: err,
    })
  }
}

//geting all product
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await AllProducts.getAllProductFromDB()
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
      eror: err,
    })
  }
}

//getting single product
const getSingleProductWithId = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await AllProducts.getSingleProductFromDB(productId)
    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
      eror: err,
    })
  }
}

//update product
const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params
    const result = await AllProducts.updateProductInformationInDB(productId)
    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: result,
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err.message,
      eror: err,
    })
  }
}

//delete Product
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params
    const result = await AllProducts.deleteProductFromDB(productId)
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
      data: result,
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err.message,
      eror: err,
    })
  }
}

//search product

const searchProducts = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm
    console.log(searchTerm)
    if (!searchTerm) {
      return res.status(400).json({
        success: false,
        message: 'Search term is required and should be a string.',
      })
    }
    const result = await AllProducts.searchProductsInDB(searchTerm as string)
    console.log('Search Result:', result)
    if (result.length === 0) {
      return res.status(404).json({
        success: false,
        message: `No products found matching the search term '${searchTerm}'.`,
      })
    }
    res.status(200).json({
      success: true,
      message: `Products matching search term '${searchTerm}' fetched successfully!`,
      data: result,
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
      error: err,
    })
  }
}

export const ProductController = {
  createProduct,
  getAllProducts,
  getSingleProductWithId,
  updateProduct,
  deleteProduct,
  searchProducts,
}
