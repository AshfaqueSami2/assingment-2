
# Project Setup with Express,TypeeScript,MongoDB,Mongoose



## How to Setup
* You need to initialize Node.js first
``` 
npm init -y

```
### Install necessary dependency etc:

```
npm install typescript --save-dev 

npm install mongoose --save

```

## Typescript configuration:

```
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}

```

## Definie a model ex:

``` 
import { Schema, model, Document } from 'mongoose';

interface Variant {
  type: string;
  value: string;
}

interface Inventory {
  quantity: number;
  inStock: boolean;
}
const ProductModel = model<Product>('Product', productSchema);
export { ProductModel, Product };
```

## install express and setup your server

```
npm i expess
```

## server setup ex:

```
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { productRouter } from './routes/product.routes';

dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI!, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/products', productRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

## Defining Routes & controller Routes Ex:

```
// src/routes/product.routes.ts
import { Router } from 'express';
import { createProduct, getAllProducts, getSingleProduct, updateProduct, deleteProduct, searchProducts } from '../controllers/product.controller';

export const productRouter = Router();

productRouter.post('/', createProduct);
productRouter.get('/', getAllProducts);
productRouter.get('/search', searchProducts);
productRouter.get('/:productId', getSingleProduct);
productRouter.put('/:productId', updateProduct);
productRouter.delete('/:productId', deleteProduct);
```

## .env file for your Port and MonggoDB string

```
PORT=5000
MONGO_URI=your_mongo_connection_string
```

## Finally Run the application

```
npx ts-node-dev src/server.ts

```