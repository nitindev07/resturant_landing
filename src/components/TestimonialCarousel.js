import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../slider.css'

const TestimonialCarousel = ({slider}) => {
  return (
    <Carousel showIndicators={false} showThumbs={false} infiniteLoop={true} autoPlay={false} showStatus={false}>
      {slider.map((item,idx)=>{
        const{message,image,name,occupation}=item
        return <div key={idx} className='w-full'>
          <div className='flex flex-col items-center justify-center lg:max-w-[600px] max-w-[250px] mx-auto px-4'>
            <p className='text-[20px] text-white font-medium mb-10'>{message}</p>
           <div> <img className='mb-4' src={image} alt="" /></div>
            <h5 className='text-2xl text-accent font-medium'>{name}</h5>
            <p className=' text-white'>{occupation}</p>
          </div>
        </div>
      })}
    </Carousel>
  )
}

export default TestimonialCarousel
