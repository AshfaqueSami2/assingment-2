// order.controller.ts
import { Request, Response } from 'express'
import orderValidationSchema from './order.validation'
import { AllOrder } from './order.service'

//create a order
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


//getting all orders
const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await AllOrder.getAllOrdersFromDB()
    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully!',
      data: result,
    }) // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
      eror: err,
    })
  }
}


//getting orders via email
const getOrdersByEmail = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;
    if (!email) {
      return res.status(400).json({ message: 'Email query parameter is required and should be a string' });
    }
    const result = await AllOrder.getOrdersByEmailFromDB(email as string);
    if (result.length === 0) {
      return res.status(404).json({ message: 'No orders found for this email' });
    }
    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully with mail!',
      data: result,
    }) 
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json(err);
  }
};
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  

export const OrderController = {
  createAnewOrder,
   getAllOrders,
  getOrdersByEmail,
}
