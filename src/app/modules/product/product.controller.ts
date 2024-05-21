import { Request, Response } from 'express'
import productValidationSchema from './product.validation'
import { AllProducts } from './product.service'

const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: ProductData } = req.body

    //data validation using zod
    const zodParseData = productValidationSchema.parse(ProductData)
    const result = await AllProducts.createProductIntoDB(zodParseData)
    res.status(200).json({
      success: true,
      message: 'Product Created Successfully',
      data: result,
    })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
      message: 'Product retrieved successfully',
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

const getSingleProduct = async(req:Request,res:Response) => {
    try{
        const {productId} = req.params;
        const result = await AllProducts.getSingleProductFromDB(productId);
        res.status(200).json({
            success: true,
            message: 'Single Product retrieved successfully',
            data: result,
          })
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch (err: any) {
        res.status(500).json({
          success: false,
          message: err.message,
          eror: err,
        })
      }
}


export const ProductController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
}
