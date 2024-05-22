import express from 'express'
import { OrderController } from './order.controller'

const router = express.Router()

router.post('/', OrderController.createAnewOrder)

//in here with loop inside query is there any gmail in run getOrdersByEmail either getAllOrders
router.get('/', (req, res) => {
  if (req.query.email) {
    // If the email query parameter is present, handle it with getOrdersByEmail
    return OrderController.getOrdersByEmail(req, res)
  } else {
    // Otherwise, handle it with getAllOrders
    return OrderController.getAllOrders(req, res)
  }
})


export const OrderRoutes = router
