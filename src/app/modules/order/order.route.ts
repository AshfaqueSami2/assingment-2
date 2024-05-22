import express from 'express';
import { OrderController } from './order.controller';

const router = express.Router();

router.post('/', OrderController.createAnewOrder);

router.get('/', (req, res) => {
    if (req.query.email) {
      // If the email query parameter is present, handle it with getOrdersByEmail
      return OrderController.getOrdersByEmail(req, res, );
    } else {
      // Otherwise, handle it with getAllOrders
      return OrderController.getAllOrders(req, res, );
    }
  });


//  router.get('/all', OrderController.getAllOrders); // Add this line
// router.get('/',OrderController.getOrdersByEmail)

export const OrderRoutes = router;


 