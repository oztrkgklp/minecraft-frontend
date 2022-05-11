import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import BlogPostService from "../../services/BlogPostService";

const blogPostService = new BlogPostService();

//#region Slice
const { actions, reducer } = createSlice({
  name: "blogPost",
  initialState: {
    value: [{
      id: 0,
      title: "",
      image: "",
      description:"",
      periodValue: 0,
      perioUnit: "",
      category: "",
    }],
  },
  reducers: {
    setBlogPost: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBlogPosts.fulfilled, (state, action) => {});
  },
});
//#endregion Slice

//#region Thunks
const getBlogPosts = createAsyncThunk("getBlogPosts", async (params, ThunkAPI) => {
  var response;
    response = await blogPostService.getBlogPosts().then((result) => {
      if (result.data) ThunkAPI.dispatch(actions.setBlogPost(result.data));
      else return result;
    });
  return response;
});

//#endregion Thunks

export { getBlogPosts, actions };
export default reducer;
