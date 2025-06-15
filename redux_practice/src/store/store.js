import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/Counter'

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})