'use client'
import useCarousel from '@/hooks/useCarousel'
import CarouselItemCard from './CarouselItemCard'

export default function Carousel() {
  const { activeCard, actualCard, handlePage } = useCarousel()
  const activeNav = 'bg-blue-600'
  return (
    <>
      <section className='flex justify-center flex-col items-center px-4'>
        <header className='flex w-full gap-3 my-4 justify-center'>
          <div className={`bg-gray-200 h-1 flex-1 max-w-[85px] rounded ${activeNav}`} />
          <div className={`bg-gray-200 h-1 flex-1 max-w-[85px] rounded ${actualCard > 0 ? activeNav : ''}`} />
          <div className={`bg-gray-200 h-1 flex-1 max-w-[85px] rounded ${actualCard > 1 ? activeNav : ''}`} />
          <div className={`bg-gray-200 h-1 flex-1 max-w-[85px] rounded ${actualCard > 2 ? activeNav : ''}`} />
        </header>
        <CarouselItemCard
          handlePage={handlePage}
          title={activeCard?.title}
          description={activeCard?.description}
          img={activeCard?.img}
        />
      </section>
    </>
  )
}
