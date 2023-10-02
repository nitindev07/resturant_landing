import React from 'react'
import Newsletter from './Newsletter'
import Copyright from './Copyright'
import Socials from './Socials'
import { footerData } from '../data'
import{fadeIn, staggerContainer} from '../variants'
import { motion } from 'framer-motion';

const Footer = () => {
  const{contact, hours, social}=footerData
  return (
    <footer id='contact' className='relative top-96 lg:top-12 z-20 lg:bg-footer pt-20 lg:pt-36 lg:min-h-[750px] lg:h-full  lg:bg-transparent bg-dark lg:bg-center bg-no-repeat b'>
      <motion.div className='container mx-auto' variants={staggerContainer(0.3,0.9)} initial='hidden' whileInView={'show'}>
        <motion.div variants={fadeIn('up', 'tween', 0.2, 1.1)}>
          <Newsletter/>
        </motion.div>
        <motion.div className='flex justify-start flex-col lg:flex-row lg:gap-x-[130px] lg:mb-7 gap-y-12 lg:gap-y-0 h-full' variants={fadeIn('up', 'tween', 0.3, 1.1)}>
          <div className='capitalize flex-1 lg:max-w-[170px]'> 
            <div className='text-[20px] lg:text-[22px] font-normal font-primary text-white mb-[22px]'>{contact.title}</div> 
            <div>{contact.address}</div> 
            <div>{contact.phone}</div> 
          </div>
          <div className='capitalize flex-1'> 
            <div className='text-[20px] lg:text-[22px] font-normal font-primary text-white mb-[22px]'>{hours.title}</div> 
            <div className='flex items-center gap-x-[46px]'>
              {hours.program.map((prgm,idx)=>{
                return <div key={idx}>
                  <div className='text-[18px]'>{prgm.days}</div>
                  <div className='text-accent text-[20px] font-medium'>{prgm.hours}</div>
                </div>
              })}
            </div> 
          </div>
          <div className='capitalise flex-1 lg:max-w-[280px]'>
            <div className='text-[20px] lg:text-[22px] font-normal font-primary text-white mb-[22px]'>{social.title}</div>
            <Socials/>
          </div>
        </motion.div>
      </motion.div>
      <Copyright/>
    </footer>
  )
}

export default Footer
