import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import BlogPostService from "../../services/BlogPostService";

const blogPostService = new BlogPostService();

//#region Slice
const { actions, reducer } = createSlice({
    name: "selectedBlogPost",
    initialState: {
        value: {},
    },
    reducers: {
        setBlogPost: (state, action) => {
            state.value = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getBlogPost.fulfilled, (state, action) => {});
        builder.addCase(updateBlogPost.fulfilled, (state, action) => {});
    },
});
//#endregion Slice

//#region Thunks
const getBlogPost = createAsyncThunk("getBlogPost", async (params, ThunkAPI) => {
    var response;
    if (params)
        response = await blogPostService.getBlogPostById(params).then((result) => {
            if (result.data) ThunkAPI.dispatch(actions.setBlogPost(result.data));
            else return result;
        });
    return response;
});
const updateBlogPost = createAsyncThunk("updateBlogPost", async (params, ThunkAPI) => {
    const response = await blogPostService.updateBlogPostById(params.id, params.data).then(async (result) => {
        if (result.data) {
            const getBlogPost = await blogPostService.getBlogPostById(params.id).then((res) => {
                ThunkAPI.dispatch(actions.setBlogPost(res.data));
            });
        } else return result;
    });
    return response;
});
//#endregion Thunks

export { getBlogPost, updateBlogPost, actions };
export default reducer;
