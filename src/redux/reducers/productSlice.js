import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState = {
  productList: [],
  selectedItem: null,
  isLoading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "product/fetchAll",
  async (searchQuery, thunkApi) => {
    try {
      let url = `https://my-json-server.typicode.com/mgsonnny/react-hnm-app/products?q=${searchQuery}`;
      let response = await fetch(url);
      return await response.json();
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchProductsDetail = createAsyncThunk(
  "productDetail/fetchAll",
  async (id, thunkApi) => {
    try {
      let url = `https://my-json-server.typicode.com/mgsonnny/react-hnm-app/products/${id}`;
      let response = await fetch(url);
      return await response.json();
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

// function productReducer(state = initialState, action) {
//   let { type, payload } = action;
//   switch (type) {
//     case "GET_PRODUCT_SUCCESS":
//       return { ...state, productList: payload.data };
//     case "GET_SINGLE_PRODUCT_SUCCESS":
//       return { ...state, selectedItem: payload.data };
//     default:
//       return { ...state };
//   }
// }

// export default productReducer;

const productSlice = createSlice({
  name: "product",
  initialState,
  // reducers: {
  //   getAllProducts(state, action) {
  //     state.productList = action.payload.data;
  //   },
  //   getSingleProduct(state, action) {
  //     state.selectedItem = action.payload.data;
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productList = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    builder
      .addCase(fetchProductsDetail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProductsDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedItem = action.payload;
      })
      .addCase(fetchProductsDetail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

console.log("PPP", productSlice);

export const productActions = productSlice.actions;
export default productSlice.reducer;
