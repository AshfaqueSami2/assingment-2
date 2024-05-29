import express from 'express'
import { ProductController } from './product.controller'

const router = express.Router()

//route will call controller
router.post('/api/products', ProductController.createProduct)
// router.get('/api/products', ProductController.getAllProducts)
router.get('/api/products/:productId', ProductController.getSingleProductWithId)
router.put('/api/products/:productId', ProductController.updateProduct)
router.delete('/api/products/:productId', ProductController.deleteProduct)
// router.get('/api/products/search', ProductController.searchProducts);

//same functionality as  as order.route.ts
router.get('/api/products', (req, res) => {
    if (req.query.searchTerm) {
      return ProductController.searchProducts(req, res);
    } else {
      return ProductController.getAllProducts(req, res);
    }
  });


export const ProductRoutes = router
