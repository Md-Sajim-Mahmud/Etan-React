import React from 'react';
import CommonHead from '../../Common/CommonHead';
import Common_button from '../../Common/Common_button';
import CommonCount from '../../Common/CommonCount';
import { MdStar } from "react-icons/md";
import { FaBagShopping } from "react-icons/fa6";
import { HiFaceSmile } from "react-icons/hi2";

const Banner = () => {
  return (
    <>
      <section className='Banner py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 2xl:py-24'>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="banner_row flex flex-col lg:flex-row items-center gap-8 lg:gap-[72px]">
            {/* Banner Image */}
            <div className="banner_image w-full lg:w-1/2 text-center lg:text-left">
              <img src="images/bannner_img.png" alt="banner image" className="max-w-full h-auto"/>
            </div>

            {/* Banner Text */}
            <div className="banner_text w-full lg:w-1/2">
              <CommonHead CommonHeadtext={'Normal to oily skin'} />
              <h1 className='text-[#333333] text-[32px] sm:text-[36px] md:text-[48px] lg:text-[56px] xl:text-[64px] 2xl:text-[72px] font-pt font-normal pb-5 w-full lg:w-[540px] sm:pl-3'>
                Men’s Sunscreen hand & body
              </h1>
              <p className='text-[#A0A79A] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-inter font-normal pb-6 sm:pb-8 lg:pb-[71px] w-full lg:w-[526px]'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
              </p>
              <Common_button />
              <div className='flex flex-wrap gap-6 lg:gap-[49px] mt-6 sm:mt-8'>
                <CommonCount count_icon={<MdStar />} count_number={4} comma={','} plus={6} count_text={'Rating'} />
                <CommonCount count_icon={<FaBagShopping />} count_number={200} comma={'+'} count_text={'Product sold'} />
                <CommonCount count_icon={<HiFaceSmile />} count_number={99} comma={'+'} count_text={'Review'} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
