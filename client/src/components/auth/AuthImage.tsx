import Image from 'next/image'

interface AuthImage {
  image: string
  alt: string
}

export const AuthImage = ({ image, alt }: AuthImage) => {
  return (
    <div className='relative flex h-full w-full items-center justify-center'>
      <Image src={image} alt={alt} fill />
    </div>
  )
}
