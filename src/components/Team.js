import React from 'react'
import { teamData } from '../data'
import{motion } from 'framer-motion'
import { fadeIn, } from '../variants'

const Team = () => {
  const{pretitle,
  title,
  sub1, sub2,
  name,
  occupation,
  signatureImg,
  chefImg}=teamData
  return (
    <div className='relative top-[700px] z-10  lg:top-[400px] min-h-[720px] h-full my-20' id='team'>
      <div className='container mx-auto flex flex-col lg:flex-row  items-center gap-20'>
        <motion.div className='max-w-[550px] text-center lg:text-left flex flex-col items-center lg:items-start' variants={fadeIn('down', 'tween', 0.6, 1.1)} initial='hidden' whileInView={'show'}>
          <h5 className='pretitle mb-6'>{pretitle}</h5>
          <h1 className='font-primary font-bold capitalize italic text-black text-[49px] mb-6'>{title}</h1>
          <p className='text-[18px] mb-14'>{sub1}</p>
          <p className='text-[18px] mb-6'>{sub2}</p>
          <div className='text-3xl capitalize text-orange-400 font-medium mb-2' >{name}</div>
          <p className='capitalize mb-6'>{occupation}</p>
          <div><img src={signatureImg} alt="" /></div>
        </motion.div>
        <motion.div className='-mb-32 z-0'  variants={fadeIn('up', 'tween', 0.7, 1.1)} initial='hidden' whileInView={'show'}>
      <img src={chefImg} alt="" />
      </motion.div>
      </div>
      
    </div>
  )
}

export default Team
