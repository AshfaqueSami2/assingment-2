import express from 'express'
import { ProductController } from './product.controller'

const router = express.Router()

//route will call controller
router.post('/api/products', ProductController.createProduct)
router.get('/api/products', ProductController.getAllProducts)
router.get('/api/products/:productId', ProductController.getSingleProduct)
router.put('/api/products/:productId', ProductController.updateProduct)
router.delete('/api/products/:productId', ProductController.deleteProduct)
router.get('/api/products?searchTerm=iphone', ProductController.searchProducts)

export const ProductRoutes = router
