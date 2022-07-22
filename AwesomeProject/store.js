import { configureStore } from '@reduxjs/toolkit'
import messageReducer from './infoslice';
export const store = configureStore({
  reducer: {
    message: messageReducer
  },
})