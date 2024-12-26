import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 px-4 lg:px-33 py-3'>

         <img  width ={140} src={assets.logo} alt="" />
         <p className='flex-1 border-1   border-gray-400 p1-4 text-sm  font-bold text-gray-500 max-sm:hidden'>Copyright @Mudit.dev  | 2024</p>

         <div className='flex gap-1'>
            <img  width={40} src={assets.facebook_icon}alt="" />
            <img  width={40} src={assets.twitter_icon} alt="" />
            <img   width={40} src={assets.google_plus_icon}alt="" />
         </div>
    </div>
  )
}

export default Footer