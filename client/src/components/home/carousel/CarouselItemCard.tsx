export default function CarouselItemCard({ title, description, img, handlePage }: { title: string, description: string, img: string, handlePage: () => void }) {
  return (
    <article onClick={handlePage} className='flex px-4 flex-col gap-4 items-center cursor-pointer md:flex-row'>
      <section className='flex flex-col gap-4'>
        <h3 className='self-start bg-gray-200 py-1 px-3 text-lg rounded-full text-blue-600'>
          {title}
        </h3>
        <p className='self-start text-3xl max-w-[240px] mb-4'>
          {description}
        </p>
      </section>
      <img src={img} alt={`${title} image`} />
    </article>
  )
}
