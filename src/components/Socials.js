import React from 'react'
import { socialData } from '../data'

const Socials = () => {
  return (
    <div className='flex gap-x-[10px]'>
      {socialData.map((icon, idx)=>{
        return (
          <a className='border border-white/20 rounded-full w-[35px] h-[35px] flex items-center justify-center text-lg hover:text-accent hover:border-accent transition-all' href={icon.href} key={idx}>{icon.icon}</a>
        )
      })}
    </div>
  )
}

export default Socials
