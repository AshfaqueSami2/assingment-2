import express from 'express'
import cors from 'cors'
import { ProductRoutes } from './app/modules/product/product.route'
import { OrderRoutes } from './app/modules/order/order.route'

const app = express()
// const port = 3000

//parsers
app.use(express.json())
app.use(cors())

//application routes
app.use('/', ProductRoutes)
app.use('/api/orders', OrderRoutes)

// app.get('/', (req: Request, res: Response) => {
//   const a = 10
//   res.send(a)
// })

export default app
