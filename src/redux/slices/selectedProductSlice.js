import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProductService from "../../services/ProductService";

const productService = new ProductService();

//#region Slice
const { actions, reducer } = createSlice({
  name: "selectedProduct",
  initialState: {
    value: {
      id: 0,
      name: "Product 0",
      price: {
        period: "AY",
        periodValue: 0,
        amount: 0,
        amountUnit: "SRC",
        kdvPercentage: 0,
      },
      stock: 10,
      image: "../assets/package-1.svg",
      isPopular: false,
      isOnSale: true,
      discountPercentage: 0,
      type: 0,
    },
  },
  reducers: {
    setProduct: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProduct.fulfilled, (state, action) => {});
    builder.addCase(updateProduct.fulfilled, (state, action) => {});
  },
});
//#endregion Slice

//#region Thunks
const getProduct = createAsyncThunk("getProduct", async (params, ThunkAPI) => {
  var response;
  if (params)
    response = await productService.getProductById(params).then((result) => {
      if (result.data) ThunkAPI.dispatch(actions.setProduct(result.data));
      else return result;
    });
  return response;
});
const updateProduct = createAsyncThunk("updateProduct", async (params, ThunkAPI) => {
  const response = await productService.updateProductById(params.id, params.data).then(async (result) => {
    if (result.data) {
      const getProduct = await productService.getProductById(params.id).then((res) => {
        ThunkAPI.dispatch(actions.setProduct(res.data));
      });
    } else return result;
  });
  return response;
});
//#endregion Thunks

export { getProduct, updateProduct, actions };
export default reducer;
