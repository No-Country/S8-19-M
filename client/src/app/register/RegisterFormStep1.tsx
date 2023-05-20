import Link from 'next/link'
import Image from 'next/image'
import CustomInput from '@/components/common/CustomInput'

interface RegisterStep {
  values: {
    userData: {
      username: string
      password: string
      pwdConfirm: string
      dni: string
    }
    errors: {
      username: string
      password: string
      pwdConfirm: string
      dni: string
    }
  }
  onChange: any
}

export default function RegisterFormStep1({ values = 'cero', step }) {
  console.log('en RegisterStep1', values, step)

  function handleSubmit(e) {
    e.preventDefault()

    const error = {
      userName: '',
      password: '',
      pwdConfirm: ''
    }

    if (values.userData.username === '') {
      error.userName = 'Debe ingresar su nombre de usuario'
    }

    if (values.userData.password === '') {
      error.password = 'Debe ingresar su contraseña'
    }
    if (values.userData.password !== values.userData.pwdConfirm) {
      error.pwdConfirm = 'La contrase;a no coincide'
    }
  }

  return (
    <article className='relative mx-auto flex h-full max-w-md flex-col justify-center'>
      <div className='mb-12 mt-4 flex items-center justify-center '>
        <span className='relative h-20 w-20 overflow-hidden rounded-full'>
          <Image src='/assets/images/logo.jpeg' alt='logo BlueBank' fill />
        </span>
        <h1 className='text-center text-3xl font-bold text-blue-500 md:text-4xl lg:text-6xl'>BlueBank</h1>
      </div>
      <form className='mb-12 text-center' onSubmit={handleSubmit}>
        <CustomInput error={values.errors.username} label='Nombre de Usuario' name='userName' placeholder='ingrese su nombre de usuario' />
        <CustomInput error={values.errors.password} label='Contraseña' name='password' placeholder='ingrese su contraseña' type='password' />
        <CustomInput error={values.errors.pwdConfirm} label='Confirmar Contraseña' name='pwdConfirm' placeholder='Confirma tu contraseña' type='password' />

        <button type='submit' className='disabled:bg-neutral-300 my-4 w-full rounded-full bg-blue-500 py-2 font-bold uppercase text-white hover:bg-blue-600 md:mt-6'>
          Crear cuenta
        </button>

        <div>
          <Link href='/login' className='mb-12 text-sm text-blue-500 hover:underline '>
            ¿ya tienes una cuenta?
          </Link>
        </div>
      </form>

      <p className=' bottom-4 self-end px-4 text-center text-sm md:text-left'>
        Sentite seguro con <span className='font-bold text-blue-500'>BlueBank</span>. Nunca compartas tus datos personales, claves y números de tarjetas con nadie.{' '}
        <Link href='/register' className='underline'>
          Te compartimos algunos consejos aquí{' '}
        </Link>
      </p>
    </article>
  )
}
