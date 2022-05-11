import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//#region Slice
const { actions, reducer } = createSlice({
    name: "isSignedIn",
    initialState: {
        value: true,
    },
    reducers: {
        setSignIn: (state, action) => {
            state.value = action.payload;
        },
    }
});
//#endregion Slice

//#region Thunks

//#endregion Thunks

export const { setSignIn } = actions;
export default reducer;
