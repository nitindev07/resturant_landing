import React from 'react'
import { menuData } from '../data'
import {motion} from 'framer-motion'
import { fadeIn, staggerContainer } from '../variants'


const Menu = () => {
  const{title,subtitle,modelImg ,btnText,menuItems}=menuData
  return (
    <section className='h-full' id='menu'>
      <div className='bg-menu h-[780px] -z-0 w-full max-w-[1800px] '> 
        {/* taxt */}
        <motion.div className='z-10 text-center flex flex-col items-center container mx-auto top-64 lg:top-52 relative px-4'  variants={staggerContainer(0.3, 1)} initial='hidden'  whileInView='show' viewport={{once:false, amount:0.1}}>
          <motion.h1 variants={fadeIn('down', 'tween', 0.2, 0.9)} className='h2 text-white capitalize mb-5'>{title}</motion.h1>
          <motion.p variants={fadeIn('down', 'tween', 0.3, 0.9)} className='text-[20px] text-grey-100 mb-10 capitalize'>{subtitle}</motion.p>
          <motion.img variants={fadeIn('down', 'tween', 0.4, 0.9 )} className='w-[180px] mb-0 lg:mb-16 ' src={modelImg} alt="" />
        </motion.div>
        {/* galley */}
        <div className='relative top-80 lg:top:[]  w-full'>
            <motion.div initial={{opacity:0, y:150}} animate={{opacity:1, y:0}} transition={{type:'tween', ease:'easeInOut', delay:0.2, duration:1.6}} className='container mx-auto flex-col items-center flex gap-y-[80px] lg:-mt-24 min-h-[590px]'>
              <div className='grid lg:grid-cols-2 grid-cols-1 lg:px-0'>  
                {menuItems.map((img,index)=>{
                  return <div className='flex items-center lg:grid grid-cols-2  justify-center' key={index}>
                    <div className='min-w-[180px] w-[full] '>
                      <img src={img.image} alt="" />
                    </div>
                    
                      <div className='text-center flex flex-col justify-center h-full  bg-[#fff3e4]'>
                        <h5 className='text-[20px] mb-3 lg:mb-8 lg:text-[28px] text-amber-900 font-semibold'>{img.name}</h5>
                        <p className='text-[20px] mb-3 lg:mb-8 lg:text-[28px] text-accent font-semibold'> {img.price}</p>
                        <p className='text-[16px] lg:text-[18px] px-7'>{img.description}</p>
                      </div>
                      
                  </div>
                })}
              </div>
              <button className='btn capitalize'>{btnText}</button>
            </motion.div>
        </div>
        
      </div>
    </section>
  )
}

export default Menu
