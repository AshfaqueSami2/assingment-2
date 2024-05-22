// order.service.ts
import { Order } from './order.interface'
import { Orders } from './order.model'

const createOrderinDB = async (orderData: Order) => {
  const newOrder = new Orders(orderData)
  const result = await newOrder.save()
  return result
}

const getAllOrdersFromDB = async () => {
  const result = await Orders.find()
  return result
}

const getOrdersByEmailFromDB = async (email: string) => {
  const result = await Orders.find({ email })
  return result
}

export const AllOrder = {
  createOrderinDB,
  getAllOrdersFromDB,
  getOrdersByEmailFromDB,
}
