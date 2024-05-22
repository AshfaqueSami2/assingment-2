// order.controller.ts
import { Request, Response } from 'express'
import orderValidationSchema from './order.validation'
import { AllOrder } from './order.service'

const createAnewOrder = async (req: Request, res: Response) => {
  try {
    const orderData = orderValidationSchema.parse(req.body)
    const result = await AllOrder.createOrderinDB(orderData)
    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
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

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await AllOrder.getAllOrdersFromDB()
    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully!',
      data: result,
    })
  } catch (err: any) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    res.status(500).json({
      success: false,
      message: err.message,
      eror: err,
    })
  }
}

export const OrderController = {
  createAnewOrder,
  getAllOrders,
}
