import React from 'react'
import{motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../variants'
import { heroData } from '../data'
import Header from '../components/Header'

const Hero = () => {
  return (
    <section>
      <div className='bg-hero bg-no-repeat bg-cover bg-right h-[980px]'  >
      <Header/>
        <div className='flex justify-center h-[980px] items-center'>
          <motion.div variants={staggerContainer(0.3, 1)} initial='hidden' whileInView={'show'} className='flex flex-col items-center gap-3'>
            <motion.h4 className='text-white font-primary italic lg:text-[28px] text-[24px] lg:font-medium' variants={fadeIn('down','tween',0.2, 1.1)} >{heroData.pretitle}</motion.h4>
            <motion.h1 className='h1 mb-5' variants={fadeIn('down','tween',0.3, 1.1)}>{heroData.title}</motion.h1>
            <motion.p className='max-w-[540px] mb-6 text-white text-center px-4' variants={fadeIn('down','tween',0.4, 1.1)}>{heroData.subtitle}</motion.p>
            <motion.div variants={fadeIn('down','tween',0.5, 1.1)}><button className='btn'>{heroData.btnText}</button></motion.div>
          </motion.div>
        </div>
      </div>
   </section>
  )
}

export default Hero
