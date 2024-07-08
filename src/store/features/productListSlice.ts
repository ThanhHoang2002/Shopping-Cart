import { SerializedError, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Product } from '../../types'
import { fetchAllProductsApi, fetchProductByCategoryApi } from '../../apis'
export interface ProductListState {
  products: Product[]
  state: 'idle' | 'loading' | 'succeeded' | 'failed'
}

const initialState: ProductListState = {
  products: [],
  state: 'idle' // 'idle' | 'loading' | 'succeeded' | 'failed'
}
export const fetchAllProducts = createAsyncThunk<Product[], void, { rejectValue: SerializedError }>(
  'productList/fetchAllProducts',
  async () => {
    const data = await fetchAllProductsApi()
    return data
  }
)
export const fetchProductByCategory = createAsyncThunk<Product[], string, { rejectValue: SerializedError }>(
  'productList/fetchProductByCategory',
  async (category) => {
    const data = await fetchProductByCategoryApi(category)
    return data
  }
)
export const productListSlice = createSlice({
  name: 'productList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.pending, (state) => {
      state.state = 'loading'
    })
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.state = 'succeeded'
      state.products = action.payload
    })
    builder.addCase(fetchAllProducts.rejected, (state) => {
      state.state = 'failed'
    })
    builder.addCase(fetchProductByCategory.pending, (state) => {
      state.state = 'loading'
    })
    builder.addCase(fetchProductByCategory.fulfilled, (state, action) => {
      state.state = 'succeeded'
      state.products = action.payload
    })
    builder.addCase(fetchProductByCategory.rejected, (state) => {
      state.state = 'failed'
    })
  }
})
