'use client'
import { useEffect, useState } from 'react'
interface Card {
  id: number
  title: string
  description: string
  img: string
}
const cards: Card[] = [{
  id: 1,
  title: 'Tu cuenta bancaria',
  description: 'Abrí una cuenta gratis y mantenela sin costo.',
  img: 'https://uploads-ssl.webflow.com/63091bbd808ef433808b70cd/642b1f06ed9a1e0b5eb26d04_Bottom.png'
},
{
  id: 2,
  title: 'Empresa B',
  description: 'Conocé nuestro compromiso social',
  img: 'https://uploads-ssl.webflow.com/63091bbd808ef433808b70cd/642b245f60659938ed970251_Group%2048095867.png'
},
{
  id: 3,
  title: 'Beneficios',
  description: 'Aprovechá todas las promos y beneficios',
  img: 'https://uploads-ssl.webflow.com/63091bbd808ef433808b70cd/642b2596a86c339fdbabc862_Bottom%20(1).png'
},
{
  id: 4,
  title: 'Pago de servicios',
  description: 'Pagá todos tus servicios desde un mismo lugar',
  img: 'https://uploads-ssl.webflow.com/63091bbd808ef433808b70cd/642b25f414231a615650de7b_Inicio_PDS%201.png'
}]

export default function Carousel() {
  const [activeCard, setActiveCard] = useState<Card>(cards[0])
  const [actualCard, setActualCard] = useState(0)
  const activeNav = 'bg-blue-600'
  useEffect(() => {
    const interval = setInterval(() => {
      handlePage()
    }, 3000)
    return () => clearInterval(interval)
  }, [actualCard])
  const handlePage = () => {
    setActualCard(prevCard => {
      const newPage = prevCard + 1 > 3 ? 0 : prevCard + 1
      setActiveCard(cards[newPage])
      return newPage
    })
  }
  return (
    <>
      <section className='flex justify-center flex-col items-center px-4'>
        <header className='flex w-full gap-3 my-4 justify-center'>
          <div className={`bg-gray-200 h-1 flex-1 max-w-[85px] rounded ${activeNav}`} />
          <div className={`bg-gray-200 h-1 flex-1 max-w-[85px] rounded ${actualCard > 0 ? activeNav : ''}`} />
          <div className={`bg-gray-200 h-1 flex-1 max-w-[85px] rounded ${actualCard > 1 ? activeNav : ''}`} />
          <div className={`bg-gray-200 h-1 flex-1 max-w-[85px] rounded ${actualCard > 2 ? activeNav : ''}`} />
        </header>
        <article onClick={handlePage} className='flex w-full px-4 flex-col gap-4 items-center cursor-pointer'>
          <h3 className='self-start bg-gray-200 py-1 px-3 text-lg rounded-full text-blue-600'>
            {activeCard?.title}
          </h3>
          <p className='self-start text-3xl max-w-[240px] mb-4'>
            {activeCard?.description}
          </p>
          <img src={activeCard?.img} alt={`${activeCard?.title} image`} />
        </article>
      </section>
    </>
  )
}
