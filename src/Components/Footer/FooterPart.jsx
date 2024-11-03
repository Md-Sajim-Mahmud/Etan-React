import React from 'react'
import { Link } from 'react-router-dom'
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaTelegram } from "react-icons/fa";
import { RiFacebookCircleFill } from "react-icons/ri";
const FooterPart = () => {
  return (
    <>
    <footer className='bg-brand-color'>
      <div className="container">
        <div className="footer_row">
          <h2 className='text-[#ffffff] text-center lg:pt-[64px] pt-10 pb-10 lg:pb-[40px] font-inter font-black text-2xl lg:text-[36px]'>EbTan Cosmetics</h2>
          <ul className='flex flex-warp gap-5 lg:gap-[33px] text-[#ffffff] justify-center lg:pb-[74px] pb-10 font-inter font-medium text-lg '>
            <li><Link to={'#'}>Home</Link></li>
            <li><Link to={'#'}>About us</Link></li>
            <li><Link to={'#'}>Product</Link></li>
            <li><Link to={'#'}>Contact</Link></li>
          </ul>
          <div className='icons'>
            <ul className='flex justify-center text-[#ffffff] gap-10 lg:gap-[29px] text-3xl pb-[19px] '>
              <li><Link to={'#'}><BiLogoInstagramAlt /></Link></li>
              <li><Link to={'#'}><FaTelegram /></Link></li>
              <li><Link to={'#'}><RiFacebookCircleFill /></Link></li>
            </ul>
            <p className='text-center text-[#ffffff] font-inter font-medium text-lg pb-[66px]'>© 2024 All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
    
    </>
  )
}

export default FooterPart