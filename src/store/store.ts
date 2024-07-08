import { configureStore } from '@reduxjs/toolkit'
import { ThemeSlice } from './features/themeSlice'
import { productListSlice } from './features/productListSlice'
import { cartSlice } from './features/cartSlice'

export const store = configureStore({
  reducer: {
    themeState: ThemeSlice.reducer,
    productListState: productListSlice.reducer,
    cartState: cartSlice.reducer
  }
})
