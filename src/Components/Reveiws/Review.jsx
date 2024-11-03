import React from 'react'
import { Link } from 'react-router-dom'
import { MdStarRate } from "react-icons/md";
const Review = () => {
  return (
    <>
    <section className='mt-[142px]'>
    <div className="container">
        <h2 className='text-[48px] font-pt font-medium text-brand-color text-center mb-[21px]'>Review</h2>
        <p className='w-full lg:w-[526px] text-lg font-inter font-medium text-[#A0A79A]] text-center m-auto text-[#A0A79A]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
        <div className="review_row justify-center  flex flex-wrap lg:gap-[105px]">
        <div className="row1 m-auto">
            <ul className='flex  text-3xl text-[#F2994A] mt-9 lg:mt-0 gap-[25px] justify-center'>
            <li><Link to={'#'}><MdStarRate /></Link></li>
            <li><Link to={'#'}><MdStarRate /></Link></li>
            <li><Link to={'#'}><MdStarRate /></Link></li>
            <li><Link to={'#'}><MdStarRate /></Link></li>
            <li><Link to={'#'}><MdStarRate /></Link></li>
            </ul>
            <p className='pb-[13px] lg:w-[441px] text-brand-color text-[20px] lg:mt-[13px] font-pt   text-center font-medium'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
            <h2 className='text-[#333333] text-[36px] font-pt font-medium text-center pb-3'>Ebrahim Ahmed</h2>
            <p className='font-medium text-[20px] font-pt text-center text-[#F2994A]'>actor</p>
        </div>
        <div className="row2 ">
        <ul className='flex  mt-[90px] mt-9 lg:mt-0 text-3xl text-[#F2994A] gap-[25px] justify-center '>
            <li><Link to={'#'}><MdStarRate /></Link></li>
            <li><Link to={'#'}><MdStarRate /></Link></li>
            <li><Link to={'#'}><MdStarRate /></Link></li>
            <li><Link to={'#'}><MdStarRate /></Link></li>
            <li><Link to={'#'}><MdStarRate /></Link></li>
            </ul>
            <p className='pb-[13px] lg:w-[441px] text-brand-color text-[20px] lg:mt-[13px] font-pt   text-center font-medium'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
            <h2 className='text-[#333333] text-[36px] font-pt font-medium pb-3 text-center'>Tanvir Shantoh</h2>
            <p className='font-medium text-[20px] font-pt  text-[#F2994A] text-center mb-[120px]'>actor</p>
        </div>
       
        </div>
    </div>
    </section>
    
    </>
  )
}

export default Review