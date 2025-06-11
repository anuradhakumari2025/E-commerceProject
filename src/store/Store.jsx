import { configureStore } from '@reduxjs/toolkit'
import userSlice from './reducers/userSlice'
import cartSlice from './reducers/cartSlice'
import productSlice from './reducers/productSlice'

export default configureStore({
  reducer: {
    userReducer:userSlice,
    cartReducer:cartSlice,
    productReducer:productSlice
  },
})