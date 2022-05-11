import productsReducer from "../slices/productSlice";
import balanceReducer from "../slices/balanceSlice";
import vipDetailReducer from "../slices/vipDetailsSlice";
import signInReducer from "../slices/signInSlice";
import blogPostsReducer from "../slices/blogPostSlice";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunkMiddleware  from "redux-thunk";
import selectedProductReducer from "../slices/selectedProductSlice";
import gamesReducer from "../slices/gameSlice";
import selectedBlogPostReducer from "../slices/selectedBlogPostSlice";
import selectedGameReducer from "../slices/selectedGameSlice";
import topPlayersReducer from "../slices/topPlayerSlice";

// Combine reducers and combine them into a single reducer.
const reducer = combineReducers({
    products: productsReducer,
    balance: balanceReducer,
    vipDetails: vipDetailReducer,
    isSignedIn: signInReducer,
    blogPosts: blogPostsReducer,
    selectedProduct: selectedProductReducer,
    selectedBlogPost: selectedBlogPostReducer,
    games: gamesReducer,
    selectedGame: selectedGameReducer,
    topPlayers: topPlayersReducer,
})

// Configures the store for the reducer.
const Store = configureStore({
    reducer: reducer,
    middleware: [thunkMiddleware],
});

export default Store;


