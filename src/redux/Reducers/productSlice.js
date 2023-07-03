import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: {},
  productsLoading: false,
  productsError: null,
  productsCount: 0,
  currentPlan: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,

  reducers: {
    addProductsRequest: (state, action) => {
      state.productsLoading = true;
      state.products = {};
      state.productsError = null;
      state.productsCount = 0;
      state.currentPlan = null;
    },

    addProductsSuccess: (state, action) => {
      state.productsLoading = false;
      state.products = action.payload;
      state.productsError = null;
      state.currentPlan = Object.keys(action.payload)[0];
    },

    addProductsFailure: (state, action) => {
      state.productsLoading = false;
      state.products = {};
      state.productsError = action.payload.message;
      state.productsCount = 0;
      state.currentPlan = null;
    },

    changeCurrentPlan: (state, action) => {
      state.currentPlan = action.payload;
    },

    addProductsClearError: (state, action) => {
      state.productsError = null;
      state.resultPerPage = 0;
      state.currentPlan = null;
    },
  },
});

export const {
  addProductsRequest,
  addProductsSuccess,
  addProductsFailure,
  addProductsClearError,
} = productSlice.actions;

export default productSlice.reducer;
