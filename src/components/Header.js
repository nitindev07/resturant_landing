import { motion } from 'framer-motion'
import React, { useState, useEffect } from 'react'
import logo from '../assets/img/header/logo-white.png'
import Nav from './Nav'
import Socials from './Socials'
import { fadeIn, staggerContainer } from '../variants'


const hearderVariants={
  hidden:{
    padding:'84px 0 84px 0',
    background:'rgba(0,0,0,0.01)'
  },
  show:{
    padding:'14px 0 14px 0',
    background:'rgba(0,0,0,0.92)',
    transition:{
      type:'spring'
    }
  },
}

const navVariants={
  hidden:{
    clipPath:'circle(5.8% at 50% 0)',
    opacity:0,
    transition:{
      type:'spring',
      delay:0.2,
      stifness:300,
      damping:140
    }
  },
  show:{
    clipPath:'circle(130% at 50% 0)',
    opacity:1,
    transition:{
      type:'spring',  
      stifness: 80,
    }
  }
}

const Header = () => {
  
  
  const[active,setActive]=useState(false)
const[nav,setNav]=useState(false) 

  useEffect(()=>{
    window.addEventListener('scroll',()=>{window.scrollY > 50 ? setActive(true): setActive(false);})
  })
  
  return (
    <motion.header className='fixed w-full max-w-[1800px] bg-pink-200/20 z-50 py-4 ' 
    variants={hearderVariants}
    initial='hidden'
    animate={active ? 'show' : ''}>
      <motion.div className='container mx-auto flex lg:flex-row flex-row-reverse justify-between items-center relative px-5 lg:px-0' variants={staggerContainer(0.3,1)} initial='hidden' animate={'show'}>
        {/* menubar */}
        <motion.div onClick={()=>setNav(!nav)} className={`flex flex-col w-12 h-12 p-2 ${nav ? 'gap-y-0':'gap-y-2'} border-2 rounded-full items-center justify-center `} variants={fadeIn('down', 'tween', 1, 1.4)}>
          <motion.div className='w-[25px] bg-white h-[2px]' initial={{rotate:0}} animate={{rotate:nav ? -45 : 0, translateY: nav ? 2 : 0}}></motion.div>
          <motion.div className='w-[25px] bg-white h-[2px]' initial={{rotate:0}} animate={{rotate:nav ? 45 : 0}}></motion.div>
        </motion.div>
        {/* logo */}
        <motion.div variants={fadeIn('down', 'tween', 1.2, 1.4)}>
          <a href="/"><img className={`${active ? 'h-[90px]': 'h-[107px]'} lg:ml-40 mb-0`} src={logo} alt="" /></a>
        </motion.div>
        {/* socialmedia */}
        <motion.div className='hidden lg:block' variants={fadeIn('down', 'tween', 1.3, 1.4)}>
          <Socials/>
        </motion.div>
        {/* navigation */}
        <motion.div className={`absolute bg-accent h-[50vh] rounded-lg w-[310px] bottom-0 z-50  right-3 top-[100px] lg:left-0`}
        variants={navVariants} initial='hidden' animate={nav ? 'show': ''}
        >
        <Nav setNav={setNav} nav={nav}/>
        </motion.div>
      </motion.div>
    </motion.header>
  )
}

export default Header
