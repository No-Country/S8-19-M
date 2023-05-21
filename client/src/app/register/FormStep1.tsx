import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import CustomInput from '@/components/common/CustomInput'
import { selectCurrentStep, setStep } from '@/features/register/registerSlice'

export const FormStep1 = ({ values }) => {
  const dispatch = useDispatch()
  const currentStep = useSelector(selectCurrentStep)

  console.log('FormStep1', currentStep)

  const handleNext = (e) => {
    e.preventDefault()
    // validar datos
    // guardar datos en valores
    dispatch(setStep(currentStep + 1))
  }
  return (
    <form className='mb-12 text-center'>
      <CustomInput error={values.errors.username} label='Nombre de Usuario' name='userName' placeholder='ingrese su nombre de usuario' />
      <CustomInput error={values.errors.password} label='Contraseña' name='password' placeholder='ingrese su contraseña' type='password' />
      <CustomInput error={values.errors.pwdConfirm} label='Confirmar Contraseña' name='pwdConfirm' placeholder='Confirma tu contraseña' type='password' />

      <button onClick={(e) => handleNext(e)} className='disabled:bg-neutral-300 my-4 w-full rounded-full bg-blue-500 py-2 font-bold uppercase text-white hover:bg-blue-600 md:mt-6'>
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
