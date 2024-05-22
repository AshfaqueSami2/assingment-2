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

export const AllOrder = {
  createOrderinDB,
  getAllOrdersFromDB,
}
