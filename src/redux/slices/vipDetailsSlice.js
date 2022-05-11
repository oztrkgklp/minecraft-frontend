import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import VipDetailsService from "../../services/VipDetailsService";

const vipDetailsService = new VipDetailsService();

//#region Slice
const { actions, reducer } = createSlice({
    name: "vipDetails",
    initialState: {
        value: [],
    },
    reducers: {
        setProducts: (state, action) => {
            state.value = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getVipDetails.fulfilled, (state, action) => {});
    },
});
//#endregion Slice

//#region Thunks
const getVipDetails = createAsyncThunk("getVipDetails", async (params, ThunkAPI) => {
    const response = await vipDetailsService.getVipDetails().then((result) => {
        if(result.data)
            ThunkAPI.dispatch(actions.setProducts(result.data));
        else 
            return result;
    });
    return response;
});
//#endregion Thunks

export { getVipDetails, actions };
export default reducer;
