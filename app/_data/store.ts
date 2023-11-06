import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '@/app/_data/counter'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
