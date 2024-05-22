//variant
export type Variant = {
  type: string
  value: string
}

//inventory
export type Inventory = {
  quantity: number
  inStock: boolean
}

//user
export type Product = {
  name: string
  description: string
  price: number
  category: string
  tags: string[]
  variants: Variant[]
  inventory: Inventory
}
