import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import PlayerService from "../../services/PlayerService";

const playerService = new PlayerService();

//#region Slice
const { actions, reducer } = createSlice({
    name: "topPlayers",
    initialState: {
        value: [],
    },
    reducers: {
        setTopPlayers: (state, action) => {
            state.value = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getTopPlayers.fulfilled, (state, action) => {});
    },
});
//#endregion Slice

//#region Thunks
const getTopPlayers = createAsyncThunk("getTopPlayers", async (params, ThunkAPI) => {
    const response = await playerService.getTopPlayers().then((result) => {
        if(result.data)
            ThunkAPI.dispatch(actions.setTopPlayers(result.data));
        else 
            return result;
    });
    return response;
});
//#endregion Thunks

export { getTopPlayers, actions };
export default reducer;
