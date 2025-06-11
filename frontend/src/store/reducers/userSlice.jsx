import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user : []
}
const userSlice  = createSlice({
  name:"user",
  initialState,
  reducers:{
    loadUser:(state,action)=>{
      state.user = action.payload
    }
  }
})
export const {loadUser} = userSlice.actions

export default userSlice.reducer