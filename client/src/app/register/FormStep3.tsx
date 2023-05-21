import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { formStep3 as schema } from './registerValidation'

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
  phone: string
  address: string
  other: string
}

export const FormStep3 = ({ values, setValues }: UserField) => {
  const dispatch = useDispatch()
  const currentStep = useSelector(selectCurrentStep)

  const intialValues: FormData = {
    phone: values.phone,
    address: values.address,
    other: values.other
  }

  const onSubmit = (data: FormData) => {
    // validar datos
    const newData = { ...values, phone: data.phone, address: data.address, other: data.other }
    setValues(newData)
    console.log('FormStep3', newData)
    alert('Consumir Api Res Register ')
    // dispatch(setStep(currentStep + 1))
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
      <CustomInput register={register} error={errors?.phone} label='Teléfono' name='phone' placeholder='ingrese teléfono' />
      <CustomInput register={register} error={errors?.address} label='Dirección' name='address' placeholder='ingrese su dirección' />
      <CustomInput register={register} error={errors?.other} label='Others' name='other' placeholder='por definir que va aqui' />

      <div className='flex items-center justify-between space-x-4'>
        <button onClick={handlePrev} className='my-4 w-1/3 rounded-full bg-blue-300 py-2 font-bold uppercase text-white hover:bg-blue-600 md:mt-6'>
          Anterior
        </button>
        <button type='submit' className='my-4 w-1/3 rounded-full bg-blue-600 py-2 font-bold uppercase text-white hover:bg-blue-600 md:mt-6'>
          Finalizar
        </button>
      </div>
    </form>
  )
}
