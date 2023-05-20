import { AuthImage } from '@/components/auth/AuthImage'
import RegisterForm from './RegisterForm'

export default function Register() {
  return (
    <section className=''>
      <div className='grid h-full grid-cols-1 grid-rows-1 md:grid-cols-[1fr,1fr] lg:grid-cols-[2fr,1fr]'>
        <div className=''>
          <RegisterForm />
        </div>
        <div className='hidden pr-12 md:block'>
          <AuthImage image='https://uploads-ssl.webflow.com/64663144fed35c222286c3ae/646631748e7b3894aba6b6d0_undraw_online_payments_re_y8f2.svg' alt='Register image' />
        </div>
      </div>
    </section>
  )
}
