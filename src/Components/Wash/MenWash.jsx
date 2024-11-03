import React from 'react'
import CommonHead from '../../Common/CommonHead'
import { BsBoxSeamFill } from "react-icons/bs";
import CommonCount from '../../Common/CommonCount';
import { FaBagShopping } from "react-icons/fa6";
import { FaFaceSmile } from "react-icons/fa6";
import Common_button from '../../Common/Common_button';

const MenWash = () => {
  return (
    <>
   <section className='handWash mt-[60px] lg:mt-[110px] pt-[60px] lg:pt-[110px] py-[35px] lg:py-[50px] bg-[#ECEBE6] pl-[10px] lg:pl-[100px]'>
    <div className="container">
      <div className="hand_wash_row flex flex-wrap flex-col-reverse lg:flex-row-reverse lg:items-center lg:justify-between ">
        <div className="hand_wash_text">
          <CommonHead CommonHeadtext={'All skins types'}/>
          <div className="counter flex flex-wrap gap-5 lg:gap-[80px]">
            < CommonCount count_icon={<BsBoxSeamFill/>} count_number={48} count_text={'Products'}/>
            < CommonCount count_icon={<FaBagShopping/>} count_number={200} plus={'+'} count_text={'Product solds'} />
            < CommonCount count_icon={<FaFaceSmile/>} count_number={99} plus={'+'} count_text={'Review'}/>
          </div>
          <h2 className='text-brand-color font-pt text-[36px] font-medium pt-10 my-10'>Men’s Hand wash  lorem</h2>
          <div className="button flex gap-5">
            <Common_button/>
            <p className='font-pt text-brand-color text-[19px]  lg:text-[31px] font-medium'>৳ 700</p>
          </div>
        </div>
          <div className="hand_wash_image pb-[50px] lg:pb-[149px]">
            <img src="images/hadn_wash.png" alt="hand wash image" />
          </div>
      </div>
    </div>
   </section>
    
    
    
    </>
  )
}

export default MenWash