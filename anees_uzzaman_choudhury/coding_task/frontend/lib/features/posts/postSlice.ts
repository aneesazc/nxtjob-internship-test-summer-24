// features/posts/postSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: [
      {
        postId: "1",
        userId: "1",
        username: "Name",
        content: "This is the content of post 5",
        likes: 10,
        Comments: []
      },
      {
        postId: "2",
        userId: "2",
        username: "Name",
        content: "This is the content of post 2",
        likes: 20,
        Comments: []
      },
      {
        postId: "3",
        userId: "3",
        username: "Name",
        content: "This is the content of post 3",
        likes: 30,
        Comments: []
      }
    ],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  };
  
  const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
      addPost: (state, action) => {
        // Assume action.payload contains the entire new post object
        state.posts.push(action.payload);
      },
      deletePost: (state, action) => {
        // Payload should contain { id: postId }
        state.posts = state.posts.filter(post => post.userId !== action.payload.id);
      },
      setPosts: (state, action) => {
        state.posts = action.payload;
      },
    },
    // Add extraReducers if dealing with asynchronous logic
  });
  
  // Export actions
  export const { addPost, deletePost, setPosts } = postsSlice.actions;
  
  export default postsSlice.reducer;