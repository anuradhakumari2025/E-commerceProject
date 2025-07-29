import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    loadProduct: (state, action) => {
      state.products = action.payload;
    },
    loadlazyproduct: (state, action) => {
      const incoming = action.payload;
      const existingIds = new Set(state.products.map((p) => p._id));
      const newProducts = incoming.filter((p) => !existingIds.has(p._id));
      state.products = [...state.products, ...newProducts];
    },
  },
});
export const { loadProduct, loadlazyproduct } = productSlice.actions;

export default productSlice.reducer;
