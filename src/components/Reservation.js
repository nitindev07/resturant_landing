import React from 'react'
import { reservationData } from '../data'
import { motion } from 'framer-motion'
import { AiFillCalendar } from 'react-icons/ai'
import { MdOutlineAccessTimeFilled } from 'react-icons/md'
import { IoIosPeople } from 'react-icons/io'
import { fadeIn, staggerContainer } from '../variants'


const Reservation = () => {
  const{title, subtitle, modelImg, btnText}= reservationData 
  return (
    <div className='relative top-[250px] lg:top-28 h-[550px]' id='book'>
      <div className="container mx-auto flex flex-col items-center justify-center h-full"  >
        <motion.div className='flex flex-col items-center text-center' variants={staggerContainer(0.3,0.9)} initial='hidden' whileInView={'show'}>
        <motion.h1 variants={fadeIn('down', 'tween', 0.2, 1.1)} className='h2 capitalize'>{title}</motion.h1>
        <motion.p variants={fadeIn('down', 'tween', 0.3, 1.1)} className='mb-8'>{subtitle}</motion.p>
        <motion.img variants={fadeIn('down', 'tween', 0.4, 1.1)} className='mb-10' src={modelImg} alt="" />
        </motion.div>
        {/* form */}
        <motion.form className='grid lg:grid-cols-3 grid-cols-1 gap-x-10 gap-y-6 px-6 lg:px-0 w-full mb-10' variants={fadeIn('down', 'tween', 0.4, 1.1)} initial='hidden' whileInView={'show'}>
          <div className='w-full'>
            <div className='text-black text-[20px] flex items-center gap-2 mb-2'>
              <AiFillCalendar size={25} />
              <p>Choose Date</p>
            </div>
            <div className=''>
            <input type="date" name="" id="" className='border px-6 py-3 rounded-full w-full'/>
            </div>
          </div>
          <div className='w-full'>
            <div className='text-black text-[20px] flex items-center gap-2 mb-2'>
                <MdOutlineAccessTimeFilled size={25} />
                <p>Choose Time</p>
            </div>
            <div>
            <input type="time" name="" id="" className='border px-6 py-3 rounded-full w-full' />
            </div>
          </div>
          <div className=''>
            <div className='text-black text-[20px] flex items-center gap-2 mb-2'>
                <IoIosPeople size={25} />
                <p>How many people?</p>
            </div>
            <div className='w-full'>
            <input type="text" name="" id="" className='border px-6 py-3 rounded-full w-full' />
            </div>
          </div>
        </motion.form>
        <motion.div variants={fadeIn('down', 'tween', 0.4, 1.1)} initial='hidden' whileInView={'show'}>
        <button className='btn max-w-[300px] mx-auto'>{btnText}</button>
        </motion.div>
      </div>
    </div>
  )
}

export default Reservation
