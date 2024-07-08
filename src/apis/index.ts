import axios from 'axios'
import { URL_ALL_PRODUCT, URL_CATEGORY } from '../utils/constants'

export const fetchAllProductsApi = async () => {
  const request = await axios.get(URL_ALL_PRODUCT)
  return request.data
}
export const fetchProductByCategoryApi = async (category: string) => {
  const request = await axios.get(URL_CATEGORY(category))
  return request.data
}
