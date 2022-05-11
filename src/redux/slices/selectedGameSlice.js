import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import GameService from "../../services/GameService";

const gameService = new GameService();

//#region Slice
const { actions, reducer } = createSlice({
    name: "selectedGame",
    initialState: {
        value: {},
    },
    reducers: {
        setGame: (state, action) => {
            state.value = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getGame.fulfilled, (state, action) => {});
        builder.addCase(updateGame.fulfilled, (state, action) => {});
    },
});
//#endregion Slice

//#region Thunks
const getGame = createAsyncThunk("getGame", async (params, ThunkAPI) => {
    var response;
    if (params)
        response = await gameService.getGameById(params).then((result) => {
            if (result.data) ThunkAPI.dispatch(actions.setGame(result.data));
            else return result;
        });
    return response;
});
const updateGame = createAsyncThunk("updateGame", async (params, ThunkAPI) => {
    const response = await gameService.updateGameById(params.id, params.data).then(async (result) => {
        if (result.data) {
            const getGame = await gameService.getGameById(params.id).then((res) => {
                ThunkAPI.dispatch(actions.setGame(res.data));
            });
        } else return result;
    });
    return response;
});
//#endregion Thunks

export { getGame, updateGame, actions };
export default reducer;
