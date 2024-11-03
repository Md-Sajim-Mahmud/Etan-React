import React from 'react'
import CountUp from 'react-countup';
const CommonCount = ({count_icon , count_number , comma ,plus ,count_text ,alu}) => {
  return (
    <section>
        <div className="single_count">
          <div className="  count-icon mt-[28px] lg:mt-[35px] flex flex-warp flex-row lg:gap-[6px] gap-2 sm:*:first sm:text-center items-center  ">
            <div className='text-2xl lg:text-2xl text-[#F2994A]'>{count_icon}</div>
           <CountUp end={count_number} className='font-bold text-25px lg:text-[32px] font-inter' />
           <p className='font-bold text-[18px] lg:text-[32px] font-inter text-kalo'>{comma} {plus}</p>

          </div>
          <p className='font-inter font-normal text-[#A0A79A] lg:text-lg text-[15px]'>{count_text}</p>
        </div>
    </section>
  )
}

export default CommonCount