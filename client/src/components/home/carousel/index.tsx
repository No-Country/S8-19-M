'use client'
import useCarousel from '@/hooks/useCarousel'
import CarouselItemCard from './CarouselItemCard'

export default function Carousel() {
  const { activeCard, actualCard, handlePage } = useCarousel()

  return (
    <>
      <section className='flex justify-center flex-col items-center px-4 max-w-5xl'>
        <header className='flex w-full gap-3 my-4 justify-center'>
          <div className={`h-[2px] flex-1 max-w-[85px] rounded ${actualCard >= 0 ? 'bg-blue-600' : 'bg-gray-200'}`} />
          <div className={`h-[2px] flex-1 max-w-[85px] rounded ${actualCard > 0 ? 'bg-blue-600' : 'bg-gray-200'}`} />
          <div className={`h-[2px] flex-1 max-w-[85px] rounded ${actualCard > 1 ? 'bg-blue-600' : 'bg-gray-200'}`} />
          <div className={`h-[2px] flex-1 max-w-[85px] rounded ${actualCard > 2 ? 'bg-blue-600' : 'bg-gray-200'}`} />
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
