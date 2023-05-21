import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { formStep2 as schema } from './registerValidation'

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
  firstName: string
  lastName: string
  dni: string
}

export const FormStep2 = ({ values, setValues }: UserField) => {
  const dispatch = useDispatch()
  const currentStep = useSelector(selectCurrentStep)

  const intialValues: FormData = {
    firstName: values.firstName,
    lastName: values.lastName,
    dni: values.dni
  }

  const onSubmit = (data: FormData) => {
    // validar datos
    const newData = { ...values, firstName: data.firstName, lastName: data.lastName, dni: data.dni }
    setValues(newData)
    console.log('FormStep2', newData)
    dispatch(setStep(currentStep + 1))
  }

  const handlePrev = () => {
    dispatch(setStep(currentStep - 1))
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
      <CustomInput register={register} error={errors?.firstName} label='Nombre' name='firstName' placeholder='ingrese su Nombre' />
      <CustomInput register={register} error={errors?.lastName} label='Apellido' name='lastName' placeholder='ingrese su apellido' />
      <CustomInput register={register} error={errors?.dni} label='DNI' name='dni' placeholder='ingrsa su documento de identidad' />

      <div className='flex items-center justify-between space-x-4'>
        <button onClick={handlePrev} className='my-4 w-1/3 rounded-full bg-blue-300 py-2 font-bold uppercase text-white hover:bg-blue-600 md:mt-6'>
          Anterior
        </button>
        <button type='submit' className='my-4 w-1/3 rounded-full bg-blue-600 py-2 font-bold uppercase text-white hover:bg-blue-600 md:mt-6'>
          siguiente
        </button>
      </div>
    </form>
  )
}
