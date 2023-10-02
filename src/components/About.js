import React from 'react'
import { aboutData } from '../data'
import {staggerContainer, plateVariants, fadeIn} from '../variants'
import {motion} from 'framer-motion'

const About = () => {
  const{pretitle,image,title,subtitle,btnText}= aboutData
  return (
    <section className=' py-28 relative' id='about'>
      <motion.div className='container lg:relative mx-auto h-full' variants={staggerContainer(0.3,1.1)} initial='hidden' whileInView='show'>
       <div className='flex lg:justify-between flex-col items-center  lg:flex-row gap-y-10'>
        <motion.div  className='max-w-[580px] flex flex-col lg:items-start items-center text-center lg:text-start'>
          <motion.div variants={fadeIn('right', 'tween', 0.2, 1.2)} className='pretitle mb-6'>{pretitle}</motion.div>
          <motion.h1 variants={fadeIn('right', 'tween', 0.3, 1.2)} className='font-primary font-bold capitalize italic text-black text-[49px] mb-6'>{title}</motion.h1>
          <motion.p variants={fadeIn('right', 'tween', 0.4, 1.2)} className='text-[18px]'>{subtitle}</motion.p>
          <motion.div variants={fadeIn('right', 'tween', 0.5, 1.2)}><button className='btn mt-8'>{btnText}</button></motion.div>
        </motion.div>
        <motion.div className='-mr-36 lg:-mb-72 -mb-[340px] z-10'  variants={plateVariants}>
          <img className='' src={image} alt="" />
        </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
