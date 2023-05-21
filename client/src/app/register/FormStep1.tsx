import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { formStep1 as schema } from './registerValidation'

import CustomInput from '@/components/common/CustomInput'
import { selectCurrentStep, setStep } from '@/features/register/registerSlice'

interface UserField {
  values: {
    userName: string
    password: string
    firstName: string
    lastName: string
    dni: string
    phone: string
    address: string
    other: string
  }
}

interface FormData {
  userName: string
  password: string
  pwdConfirm: string
}

export const FormStep1 = ({ values, setValues }: UserField) => {
  const dispatch = useDispatch()
  const currentStep = useSelector(selectCurrentStep)

  const intialValues: FormData = {
    userName: values.userName,
    password: values.password,
    pwdConfirm: values.password
  }

  const onSubmit = (data: FormData) => {
    // validar datos
    const newData = { ...values, userName: data.userName, password: data.password }
    setValues(newData)
    console.log('FormStep1', newData)
    dispatch(setStep(currentStep + 1))
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: intialValues
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='mb-12 text-center'>
      <CustomInput register={register} error={errors?.userName} label='Email' name='userName' placeholder='ingrese su Email' />
      <CustomInput register={register} error={errors?.password} label='Contraseña' name='password' placeholder='ingrese su contraseña' type='password' />
      <CustomInput register={register} error={errors?.pwdConfirm} label='Confirmar Contraseña' name='pwdConfirm' placeholder='Confirmar contraseña' type='password' />

      <button type='submit' className='disabled:bg-neutral-300 my-4 w-full rounded-full bg-blue-500 py-2 font-bold uppercase text-white hover:bg-blue-600 md:mt-6'>
        Crear cuenta
      </button>

      <div>
        <Link href='/login' className='mb-12 text-sm text-blue-500 hover:underline '>
          ¿ya tienes una cuenta?
        </Link>
      </div>
    </form>
  )
}
