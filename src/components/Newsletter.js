import React from 'react'
import { newsletterData } from '../data'

const Newsletter = () => {
  const{title,subtitle,placeholder, btnText }=newsletterData
  return (
    <div className='bg-none lg:bg-newsletter h-[270px] lg:bg-cover lg:bg-center lg:px-24 bg-no-repeat '>
      <div className='flex lg:flex-row flex-col items-center lg:justify-between  h-full'>
      <div className='text-center lg:text-left mb-4'>
        <h2 className='text-[26px] font-primary italic text-white capitalize mb-4'>{title}</h2>
        <p className=''>{subtitle}</p>
      </div>
      <form className='flex flex-col lg:flex-row gap-x-[10px] gap-y-4'>
        <input type="text" className='input bg-transparent transition-all placeholder:font-light placeholder:text-white/20 text-white border border-white/20 focus:ring-1 focus:ring-accent'  placeholder={placeholder} />
        <button className='btn capitalize w-full lg:max-w-[204px]'>{btnText}</button>
      </form>
      </div>
    </div>
  )
}

export default Newsletter
