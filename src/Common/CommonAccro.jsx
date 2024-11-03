import React, { useState } from 'react'
import { MdArrowRight } from "react-icons/md";
const CommonAccro = ({Accro_text}) => {
const [show , setshow] =useState(false)
  return (
   
    <>
    <div onClick={()=>setshow(!show)} className='Accro py-[18px]'>
     <h2 className='text-[22px] font-inter font-semi-bold text-[#333333] flex items-center gap-[12px]'><MdArrowRight className='text-4xl'/>{Accro_text}</h2>
    
    </div>
         
         {
            show&&
          <div className=''>
            <p className='py-4 font-inter  bg-[#F0EFEA] rounded-lg w-[400px] text-center'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, animi sapiente eum cum a Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium modi veniam sint atque minus odio. </p>
          </div>
          }
    
    
    
    </>
  )
}

export default CommonAccro