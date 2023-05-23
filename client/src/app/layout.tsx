'use client'
import { Footer, Header } from '@/components'
import { store } from '@/store/store'
import { Provider } from 'react-redux'
import './globals.css'

const metadata = {
  title: 'BlueBank',
  description: 'Tu banco amigo'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='grid min-h-screen grid-rows-[auto_1fr_auto]'>
        <Provider store={store}>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
