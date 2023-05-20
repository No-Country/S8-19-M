import { AuthImage } from '@/components/auth/AuthImage'
import LoginForm from './LoginForm'

export default function Login() {
  return (
    <section className=''>
      <div className='grid h-full grid-cols-1 grid-rows-1 md:grid-cols-[1fr,1fr] lg:grid-cols-[1fr,2fr]'>
        <div className='hidden md:block'>
          <AuthImage image='https://uploads-ssl.webflow.com/64663144fed35c222286c3ae/646631748945f927e2d9a2f8_undraw_online_banking_re_kwqh.svg' alt='login image' />
        </div>
        <div className=''>
          <LoginForm />
        </div>
      </div>
    </section>
  )
}
