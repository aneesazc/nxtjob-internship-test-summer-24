import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Assuming your initial state and other imports are set up here

interface BookmarkState {
  bookmarks: string[];
  loading: boolean;
  error: null;
}

const initialState: BookmarkState = {
  bookmarks: [],
  loading: false,
  error: null
};

const bookmarkSlice = createSlice({
  name: 'bookmarks',
  initialState,
  reducers: {
    fetchBookmarksStart(state) {
        state.loading = true;
        state.error = null;
    },
    fetchBookmarksSuccess(state, action) {
        state.bookmarks = action.payload;
        state.loading = false;
    },
    fetchBookmarksFailure(state, action) {
        state.error = action.payload;
        state.loading = false;
    },
  },
});

export const { fetchBookmarksFailure, fetchBookmarksStart, fetchBookmarksSuccess } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
