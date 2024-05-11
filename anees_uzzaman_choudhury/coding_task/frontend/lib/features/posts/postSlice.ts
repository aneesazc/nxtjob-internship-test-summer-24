// features/posts/postSlice.js
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface Post {
  postId: string;
  content: string;
  userId: string;
  channelId: string;
  tagId: string[];
  username: string;
  likes: number;
  createdAt: string;
  updatedAt: string;
  Comments: Comment[]; // Assuming Comment is another interface you have defined
}

interface PostState {
  posts: Post[];
  filteredPosts: Post[];
  selectedTag: string;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: any
}

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (channelId, thunkAPI) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8787/api/v1/posts/${channelId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to fetch posts');
    }
  }
);

const initialState: PostState = {
  posts: [],
  filteredPosts: [],
  selectedTag: '',
  status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
  error: null
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
    setPosts(state, action) {
      state.posts = action.payload;
      state.filteredPosts = action.payload;  // Initially no filter applied
    },
    selectTag(state, action) {
      state.selectedTag = action.payload;
      state.filteredPosts = state.posts.filter(post => 
        action.payload === '' || post.tagId.includes(action.payload));
    },
    commentAdded(state, action) {
      const { postId, comment } = action.payload;
      const existingPost = state.posts.find(post => post.postId === postId);
      if (existingPost) {
          if (!existingPost.Comments) {
              existingPost.Comments = [];
          }
          existingPost.Comments.push(comment);
      }
  }

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  }
});

// Export actions
export const { addPost, setPosts, postAdded, selectTag, commentAdded } = postsSlice.actions;

export default postsSlice.reducer;
