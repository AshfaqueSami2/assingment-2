import express from 'express'
import { ProductController } from './product.controller'

const router = express.Router()

// Route to create a product
router.post('/api/products', ProductController.createProduct)

// same functionality as  as order.route.ts
router.get('/api/products', (req, res) => {
  if (req.query.searchTerm) {
    return ProductController.searchProducts(req, res)
  } else {
    return ProductController.getAllProducts(req, res)
  }
})

// Route to get all products
// router.get('/api/products', ProductController.getAllProducts);

// Route to get a single product by ID
router.get('/api/products/:productId', ProductController.getSingleProductWithId)

// Route to update a product by ID
router.put('/api/products/:productId', ProductController.updateProduct)

// Route to delete a product by ID
router.delete('/api/products/:productId', ProductController.deleteProduct)

// Route to search products
// router.get('/api/products/search', ProductController.searchProducts);

export const ProductRoutes = router
