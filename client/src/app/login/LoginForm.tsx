'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useForm, RegisterOptions } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import CustomInput from '@/components/common/CustomInput'
import { Schema as schema } from './loginValidations'

interface FormData {
  userName: string
  password: string
}

export default function LoginForm() {
  const intialValues: FormData = {
    userName: '',
    password: ''
  }

  const onSubmit = (data: FormData) => {
    alert('datos validos, consumir login api res')
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
    <article className='relative mx-auto flex h-full max-w-md flex-col justify-center'>
      <div className='mb-12 mt-4 flex items-center justify-center '>
        <span className='relative h-20 w-20 overflow-hidden rounded-full'>
          <Image src='/assets/images/logo.jpeg' alt='logo BlueBank' fill />
        </span>
        {/* <h1 className='text-center text-3xl font-bold text-blue-500 md:text-4xl lg:text-6xl'>BlueBank</h1> */}
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='text-center'>
        <CustomInput register={register} error={errors?.userName} label='Email' name='userName' placeholder='ingrese su Email' />
        <CustomInput register={register} error={errors?.password} label='Contraseña' name='password' placeholder='ingrese su contraseña' type='password' />

        <div>
          <Link href='/resetpassword' className='mb-12 text-sm text-blue-500 hover:underline '>
            ¿Olvidaste tu contraseña?
          </Link>
        </div>

        {/* most be change when de CustomButton is ready */}
        <button type='submit' className='disabled:bg-neutral-300 my-4 w-full rounded-full bg-blue-500 py-2 font-bold uppercase text-white hover:bg-blue-600 md:my-12'>
          Iniciar sesión
        </button>
      </form>

      <p className='mb-8 text-center text-sm'>
        ¿aún no tienes una cuenta?{' '}
        <Link href='/register' className='font-semibold text-blue-700 hover:underline'>
          Crear cuenta
        </Link>
      </p>
      <p className=' bottom-4 self-end px-4 text-center text-sm md:text-left'>
        Sentite seguro con <span className='font-bold text-blue-500'>BlueBank</span>. Nunca compartas tus datos personales, claves y números de tarjetas con nadie.{' '}
        <Link href='/register' className='underline'>
          Te compartimos algunos consejos aquí{' '}
        </Link>
      </p>
    </article>
  )
}
