import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '@/store/store'

const initialState = {
  currentStep: 0
}

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.currentStep = action.payload
    }
  }
})

export const { setStep } = registerSlice.actions

export const selectCurrentStep = (state: RootState) => state.register.currentStep

export default registerSlice.reducer
