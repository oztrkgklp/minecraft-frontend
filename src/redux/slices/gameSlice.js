import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import GameService from "../../services/GameService";

const gameService = new GameService();

//#region Slice
const { actions, reducer } = createSlice({
    name: "games",
    initialState: {
        value: [],
    },
    reducers: {
        setGames: (state, action) => {
            state.value = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getGames.fulfilled, (state, action) => {});
    },
});
//#endregion Slice

//#region Thunks
const getGames = createAsyncThunk("getGames", async (params, ThunkAPI) => {
    const response = await gameService.getGames().then((result) => {
        if(result.data)
            ThunkAPI.dispatch(actions.setGames(result.data));
        else 
            return result;
    });
    return response;
});
//#endregion Thunks

export { getGames, actions };
export default reducer;
