import React from 'react'
import {navData} from '../data'


const Nav = ({setNav, nav}) => {
  return (
    <nav className='w-full h-full' onClick={()=>setNav(!nav)}>
      <ul className='flex flex-col h-full justify-center items-center gap-y-6 text-white'>
        {navData.map((item,index)=>{
          return(
            <li key={index}>
              <a href={item.href} className='text-xl capitalize font-primary italic hover:text-dark transition-all duration-300'>{item.name}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav
