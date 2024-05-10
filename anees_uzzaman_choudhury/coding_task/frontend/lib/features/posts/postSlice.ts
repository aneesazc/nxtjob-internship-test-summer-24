// features/posts/postSlice.js
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface PostState {
  posts: any[];
}

const initialState: PostState = {
  posts: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<any>) => {
      // Assume action.payload contains the entire new post object
      state.posts.push(action.payload);
    },
    postAdded(state, action: PayloadAction<any>) {
      // Correct immutable update
      state.posts = [action.payload, ...state.posts];
    },
    deletePost: (state, action) => {
      // Payload should contain { id: postId }
      state.posts = state.posts.filter(
        (post) => post.userId !== action.payload.id
      );
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
  // Add extraReducers if dealing with asynchronous logic
});

// Export actions
export const { addPost, deletePost, setPosts, postAdded } = postsSlice.actions;

export default postsSlice.reducer;
