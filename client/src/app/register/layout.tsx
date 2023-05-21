import Image from 'next/image'
import Link from 'next/link'
import { AuthImage } from '@/components/auth/AuthImage'

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className=''>
      <div className='grid h-full grid-cols-1 grid-rows-1 md:grid-cols-[1fr,1fr] lg:grid-cols-[2fr,1fr]'>
        <div className='grid grid-rows-[auto_1fr_auto] p-4'>
          <div className='mb-12 mt-20 flex items-center justify-center'>
            <span className='relative h-20 w-20 overflow-hidden rounded-full'>
              <Image src='/assets/images/logo.jpeg' alt='logo BlueBank' fill />
            </span>
            <h1 className='text-center text-3xl font-bold text-blue-500 md:text-4xl lg:text-6xl'>BlueBank</h1>
          </div>

          <div className=''>{children}</div>

          <p className='mx-auto w-full max-w-sm text-center text-sm md:text-left'>
            Sentite seguro con <span className='font-bold text-blue-500'>BlueBank</span>. Nunca compartas tus datos personales, claves y números de tarjetas con nadie.{' '}
            <Link href='/register' className='underline'>
              Te compartimos algunos consejos aquí{' '}
            </Link>
          </p>
        </div>
        <div className='hidden bg-yellow-200 pr-12 md:block'>
          <AuthImage image='https://uploads-ssl.webflow.com/64663144fed35c222286c3ae/646631748e7b3894aba6b6d0_undraw_online_payments_re_y8f2.svg' alt='Register image' />
        </div>
      </div>
    </section>
  )
}
