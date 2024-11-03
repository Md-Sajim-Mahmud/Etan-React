import React, { useState } from 'react'
import { HiMenuAlt2 } from "react-icons/hi";import { Link } from 'react-router-dom';
const Navbar = () => {
    // ========================== custom state part  start ================================================
    const [show , setshow] = useState(false)


// ================================= funcation part start =================================================
const handdelshow = ()=>{
    setshow(!show)
}
  return (
    <>
    <nav className="main_menu lg:pt-[33px] pt-[30px]">
        <div className="container">
        <div className="nav_menu_row flex justify-between  lg:pb-[97px] pb-[50px]">
            <div className="nav_logo ">
                <img src="images/brandlogo.png" alt="brand logo image" />
            </div>
            <div className="nav_icon relative">
             <HiMenuAlt2 onClick={handdelshow} className='text-2xl rotate-180 active:text-brand-color '/>
             {
                show&&
            <ul className='lg:w-[300px] w-[150px] bg-brand-color flex flex-col lg:gap-5 gap-2 rounded-xl items-center lg:pt-5 lg:pb-5 pt-2 pb-2 absolute right-0 mt-3'>
                <li><Link to='/' className='text-bold text-[15px] lg:text-xl text-white font-inter'>Home</Link></li>
                <li><Link to='/' className='text-bold text-[15px] lg:text-xl text-white font-inter'>About us</Link></li>
                <li><Link to='/' className='text-bold text-[15px] lg:text-xl text-white font-inter'>Product</Link></li>
                <li><Link to='/' className='text-bold text-[15px] lg:text-xl text-white font-inter'>Contact</Link></li>
            </ul>
            
             }
            </div>
        </div>
        </div>
    </nav>
    
    </>
  )
}

export default Navbar