import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './features/posts/postSlice';

// Function to create a new store instance
export const makeStore = () => {
    return configureStore({
        reducer: {
            posts: postsReducer,
        },
    });
};

// For use with your Redux hooks in components
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

// Create a specific instance for static usage if necessary
export const store = makeStore();

