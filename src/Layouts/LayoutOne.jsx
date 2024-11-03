import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import FooterPart from '../Components/Footer/FooterPart'



const LayoutOne = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <FooterPart/>
    
    
    
    
    </>
  )
}

export default LayoutOne