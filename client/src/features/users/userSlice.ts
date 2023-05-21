import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '@/store/store'

const initialState = {
  currentUser: false
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.currentUser = action.payload
    },
    removeUser: (state) => {
      state.currentUser = initialState.currentUser
    }
  }
})

export const { setUser, removeUser } = userSlice.actions

export const selectCurrentUser = (state: RootState) => state.user.currentUser

export default userSlice.reducer
