'use client'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentStep } from '@/features/register/registerSlice'
import { useMultistepForm } from '@/hooks/useMultistepForm'
import { FormStep1 } from './FormStep1'
import { FormStep2 } from './FormStep2'
import { FormStep3 } from './FormStep3'

export default function Register() {
  const initialValues = {
    userData: {
      username: '',
      password: '',
      pwdConfirm: '',
      dni: ''
    },
    errors: {
      userName: '',
      password: '',
      pwdConfirm: '',
      dni: ''
    }
  }
  const currentStep = useSelector(selectCurrentStep)
  const [userRegister, setUserRegister] = useState(initialValues)
  const formData = [<FormStep1 values={userRegister} />, <FormStep2 values={userRegister} />, <FormStep3 values={userRegister} />]
  const { steps, step, back, next } = useMultistepForm(formData)

  return (
    <section className='relative flex flex-col items-center'>
      <div className='absolute right-4 top-4'>
        {currentStep + 1} / {steps.length}
      </div>
      <div className='w-full  max-w-sm'>{step}</div>
    </section>
  )
}
