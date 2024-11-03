import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
const Common_button = () => {
  return (
    <>
    <button className='flex m-auto lg:m-0 lg:items-center py-[13px] px-[35px] gap-4  w-[211px] rounded-[5px] h-[54px] bg-brand-color font-medium text-[15px] lg:text-[18px] font-inter text-[#FFFFFF] active:scale-[1.1]'><FaCartShopping className='text-white text-2xl'/>Add to cart</button>
    
    </>
  )
}

export default Common_button