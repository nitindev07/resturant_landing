import { motion } from 'framer-motion'
import React from 'react'
import { fadeIn, } from '../variants'
import { testimonialData } from '../data'
import TestimonialCarousel from './TestimonialCarousel'

const Testimonial = () => {
  const{title, subtitle, modelImg, slider }=testimonialData
  return (
    <section className='z-10 relative mt-[760px] lg:mt-[320px] h-[790px]' id='testimonials'>
      <div className='bg-testimonial h-[920px] bg-no-repeat bg-cover '>
        <div className='container mx-auto flex flex-col items-center justify-center h-full'>
          {/* text */}
          <div className=' flex flex-col items-center text-center' > 
          <motion.h1 variants={fadeIn('down', 'tween', 0.2, 0.9)} initial='hidden' whileInView={'show'} className='h2 text-white capitalize mb-5'>{title}</motion.h1>
          <motion.p variants={fadeIn('down', 'tween', 0.3, 0.9)} initial='hidden' whileInView={'show'} className='text-[20px] text-grey-100 mb-10 capitalize'>{subtitle}</motion.p>
          <motion.img variants={fadeIn('down', 'tween', 0.4, 0.9 )} initial='hidden' whileInView={'show'} className='w-[180px] lg:mb-16 mb-10' src={modelImg} alt="" />
          </div>
          {/* slider */}
         
         <motion.div variants={fadeIn('up', 'tween', 0.4, 0.9 )} initial='hidden' whileInView={'show'} className='w-full'> <TestimonialCarousel slider={slider}/></motion.div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
