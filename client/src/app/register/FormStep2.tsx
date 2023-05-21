import { useDispatch, useSelector } from 'react-redux'
import CustomInput from '@/components/common/CustomInput'
import { selectCurrentStep, setStep } from '@/features/register/registerSlice'

export const FormStep2 = ({ values }) => {
  const dispatch = useDispatch()
  const currentStep = useSelector(selectCurrentStep)

  console.log('FormStep2', currentStep)

  const handlePrev = (e) => {
    e.preventDefault()
    // guardar datos en valores
    dispatch(setStep(currentStep - 1))
  }

  const handleNext = (e) => {
    e.preventDefault()
    // validar datos
    // guardar datos en valores
    dispatch(setStep(currentStep + 1))
  }

  return (
    <form className='mb-12 text-center'>
      <CustomInput error={values.errors.dni} label='DNI' name='dni' placeholder='ingrese su documento de identificacion' />
      <CustomInput error={values.errors.phone} label='Teléfono' name='phone' placeholder='ingrese su numero telefónico' />
      <CustomInput error={values.errors.address} label='Dirección' name='address' placeholder='ingrese su dirección' />

      <div className='flex items-center justify-between space-x-4'>
        <button onClick={(e) => handlePrev(e)} className='my-4 w-1/3 rounded-full bg-blue-300 py-2 font-bold uppercase text-white hover:bg-blue-600 md:mt-6'>
          Anterior
        </button>
        <button onClick={(e) => handleNext(e)} className='my-4 w-1/3 rounded-full bg-blue-600 py-2 font-bold uppercase text-white hover:bg-blue-600 md:mt-6'>
          siguiente
        </button>
      </div>
    </form>
  )
}
