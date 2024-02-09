import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/app/_data/counter";
import modalReducer from "@/app/_data/modal";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    modal: modalReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
