import { ReactElement } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentStep, setStep } from '@/features/register/registerSlice'

export function useMultistepForm(steps: ReactElement[]) {
  const dispatch = useDispatch()
  const currentStep = useSelector(selectCurrentStep)

  console.log('Current Index =', currentStep)

  function next() {
    dispatch(setStep(currentStep + 1))
  }

  function back() {
    dispatch(setStep(currentStep - 1))
  }

  return {
    step: steps[currentStep],
    steps,
    next,
    back
  }
}
