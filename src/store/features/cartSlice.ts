import { createSlice } from '@reduxjs/toolkit'
import { CartItem } from '../../types'

export interface CartState {
  cart: CartItem[]
  totalItem: number
  totalPrice: number
}
export const initialState: CartState = {
  cart: [],
  totalItem: 0,
  totalPrice: 0
}
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action) => {
      const index = state.cart.findIndex((item) => item.product.id === action.payload.product.id)
      if (index !== -1) {
        state.cart[index].quantity += 1
      } else {
        state.cart.push(action.payload)
      }
      state.totalItem += 1
      state.totalPrice = Number((state.totalPrice + action.payload.product.price).toFixed(2))
    },
    changeQuantity: (state, action) => {
      const index = state.cart.findIndex((item) => item.product.id === action.payload.productId)
      if (index !== -1) {
        state.cart[index].quantity = action.payload.quantity
        state.totalPrice = Number(
          state.cart.reduce((total, item) => total + item.product.price * item.quantity, 0).toFixed(2)
        )
        state.totalItem = state.cart.reduce((total, item) => total + item.quantity, 0)
      }
    },
    deleteItem: (state, action) => {
      const index = state.cart.findIndex((item) => item.product.id === action.payload)
      if (index !== -1) {
        state.totalItem -= state.cart[index].quantity
        state.totalPrice = Number(
          (state.totalPrice - state.cart[index].product.price * state.cart[index].quantity).toFixed(2)
        )
        state.cart.splice(index, 1)
      }
    }
  }
})
export const { addCart, changeQuantity, deleteItem } = cartSlice.actions
export default cartSlice.reducer
