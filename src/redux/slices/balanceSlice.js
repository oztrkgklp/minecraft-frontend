import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import BalanceService from "../../services/BalanceService";

const balanceService = new BalanceService();

//#region Slice
const { actions, reducer } = createSlice({
  name: "balance",
  initialState: {
    value: {
      id: 0,
      amountDiamond: 0,
      amountGold: 0,
    },
  },
  reducers: {
    setBalance: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBalance.fulfilled, (state, action) => {});
    builder.addCase(updateBalance.fulfilled, (state, action) => {});
  },
});
//#endregion Slice

//#region Thunks
const getBalance = createAsyncThunk("getBalance", async (params, ThunkAPI) => {
  var response;
  if (params)
    response = await balanceService.getBalanceById(params).then((result) => {
      if (result.data) ThunkAPI.dispatch(actions.setBalance(result.data));
      else return result;
    });
  return response;
});
const updateBalance = createAsyncThunk("updateBalance", async (params, ThunkAPI) => {
  const response = await balanceService.updateBalanceById(params.id, params.data).then(async (result) => {
    if (result.data) {
      const getBalance = await balanceService.getBalanceById(params.id).then((res) => {
        ThunkAPI.dispatch(actions.setBalance(res.data));
      });
    } else return result;
  });
  return response;
});
//#endregion Thunks

export { getBalance, updateBalance, actions };
export default reducer;
