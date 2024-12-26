import React from 'react'
import { assets, plans } from '../assets/assets'

const BuyCredit = () => {
  return (
    <div className='min-h-[80vh] text-center pt-14 mb-10'>
     <button className='border border-gray-400 px-10 py-2 rounded-full mb-6 '>Our Plans</button>
     <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-500 to-gray-400 bg-clip-text text-transparent mb-6 sm:mb-10'>Choose the plan thats's right for you</h1>

     <div className='flex flex-wrap justify-center gap-6 text-left '>
       {plans.map((items,index)=>(
             <div className='bg-white drop-shadow-sm border rounded-lg py-16 px-16 text-gray-700 hover:scale-105 transition-all duration-700' key={index}>
               <img src={assets.logo_icon} alt="" />
               <p className='mt-3 font-semibold'>{items.id }</p>
               <p className='text-sm'> {items.desc} </p>
               <p className='mt-6'>
                 <span className='text-3xl font-medium '> ${items.price}</span>/{items.credits} credits
               </p>

               <button className='w-full bg-gray-800 text-white mt-8 text-sm rounded-md py-2.5 min-2-52'>Purchase</button>
             </div>
       ))}
     </div>



    </div>
  )
}

export default BuyCredit