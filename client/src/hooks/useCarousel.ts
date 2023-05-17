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
const useCarousel = () => {
  const [activeCard, setActiveCard] = useState<Card>(cards[0])
  const [actualCard, setActualCard] = useState(0)
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
  return { activeCard, actualCard, handlePage }
}
export default useCarousel
