import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/app/_data/counter";
import authReducer from "@/app/_data/firebase-auth";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});
