import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProductService from "../../services/ProductService";

const productService = new ProductService();

//#region Slice
const { actions, reducer } = createSlice({
    name: "products",
    initialState: {
        value: [],
    },
    reducers: {
        setProducts: (state, action) => {
            state.value = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, action) => {});
    },
});
//#endregion Slice

//#region Thunks
const getProducts = createAsyncThunk("getProducts", async (params, ThunkAPI) => {
    const response = await productService.getProducts().then((result) => {
        if(result.data)
            ThunkAPI.dispatch(actions.setProducts(result.data));
        else 
            return result;
    });
    return response;
});
//#endregion Thunks

export { getProducts, actions };
export default reducer;
