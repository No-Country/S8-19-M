// 'use client';
import { configureStore } from '@reduxjs/toolkit'
import userReducer from '@/features/users/userSlice'
import registerSlice from '@/features/register/registerSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    register: registerSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
