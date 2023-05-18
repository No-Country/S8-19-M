import { LoginImage } from './LoginImage'
import LoginForm from './LoginForm'

export default function Login() {
  return (
    <section className=''>
      <div className='grid h-full grid-cols-1 grid-rows-1 md:grid-cols-[1fr,1fr] lg:grid-cols-[1fr,2fr]'>
        <div className='hidden md:block'>
          <LoginImage />
        </div>
        <div className=''>
          <LoginForm />
        </div>
      </div>
    </section>
  )
}
