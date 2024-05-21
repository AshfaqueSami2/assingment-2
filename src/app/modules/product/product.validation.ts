import { z } from 'zod';

// Define Zod validation schemas
const variantValidationSchema = z.object({
  type: z.string(),
  value: z.string()
});

const inventoryValidationSchema = z.object({
  quantity: z.number(),
  inStock: z.boolean()
});

const productValidationSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number(),
  category: z.string(),
  tags: z.array(z.string()),
  variants: z.array(variantValidationSchema),
  inventory: inventoryValidationSchema
});

const a = 10;

export default productValidationSchema;