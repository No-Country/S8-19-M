'use client'
import { useState } from 'react'
import RegisterStep1 from './RegisterStep1'

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

export default function Register() {
  const [userRegister, setUserRegister] = useState(initialValues)
  const [step, setStep] = useState(1)

  return (
    <>
      {step === 1 && <RegisterStep1 values={userRegister} onChange={setUserRegister} step={step} />}
      {step === 2 && <RegisterStep1 values={userRegister} onChange={setUserRegister} />}
    </>
  )
}
