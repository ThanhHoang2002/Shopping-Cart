export type Product = {
  id: string
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
}
export type CategoryKey = 'MenClothing' | 'WomenClothing' | 'Jewelery' | 'Electronics'

export interface Category {
  name: string
  path: string
  image: string
}
export type Rating = {
  rate: number
  count: number
}
export type CartItem = {
  product: Product
  quantity: number
}
