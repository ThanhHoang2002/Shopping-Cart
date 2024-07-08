import { Category, CategoryKey } from '../types'

export const Categories: Record<CategoryKey, Category> = {
  MenClothing: {
    name: 'Men Clothing',
    path: "/men's clothing",
    image: 'https://drake.vn/image/catalog/banner/Banner%20danh%20muc%20trang%20chu/07.2023/danh-muc-vans-0723.jpg'
  },
  WomenClothing: {
    name: 'Women Clothing',
    path: "/women's clothing",
    image: 'https://drake.vn/image/catalog/banner/Banner%20danh%20muc%20trang%20chu/07.2023/danh-muc-palladium-0723.jpg'
  },
  Jewelery: {
    name: 'Jewelery',
    path: '/jewelery',
    image: 'https://drake.vn/image/catalog/banner/Banner%20danh%20muc%20trang%20chu/07.2023/danh-muc-palladium-0723.jpg'
  },
  Electronics: {
    name: 'Electronics',
    path: '/electronics',
    image: 'https://drake.vn/image/catalog/banner/Banner%20danh%20muc%20trang%20chu/07.2023/danh-muc-palladium-0723.jpg'
  }
}
export const nameStore = "Men's Style"

export const listBanner = [
  {
    image:
      'https://drake.vn/image/cache/catalog/banner/banner-lớn/web-voucher-giam-100k-dh-1tr-summer-2023-1500x560.jpg',
    alt: 'Giảm giá 100k đơn hàng 1tr'
  },
  {
    image:
      'https://drake.vn/image/cache/catalog/Hình%20content/end%20of%20season%20sale%202024/end%20of%20season%20sale%20web-1500x560.png',
    alt: 'End of season sale 2024'
  }
]
export const URL_ALL_PRODUCT = 'https://fakestoreapi.com/products'

export const URL_CATEGORY = (category: string) => `https://fakestoreapi.com/products/category${category}`

export const numberProductPerPage = 12
