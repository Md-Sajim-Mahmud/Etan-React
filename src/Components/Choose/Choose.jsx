import React from 'react'

const Choose = () => {
  return (
    <>
  <section className='choose pt-8 lg:pt-[100px]'>
  <div className="container">
  <div className="choose_text">
    <h2 className='font-normal text-[48px] font-pt text-center'>Why <span className='text-red-500'>choose</span> us</h2>
    <p className='w-full lg:w-[526px] font-inter font-medium text-[#A0A79A] text[18px] pt-[21px] m-auto text-center mb-[60px] '>SLorem Ipsum is simply dummy text of the printing and <br /> typesetting industry. Lorem Ipsum has been the industry's</p>
  </div>
  <div className="choose_cart flex flex-col lg:flex-row lg:justify-center gap-5">
    
    <div className="one w-full lg:w-[380px] bg-[#F0EFEA] rounded-[5px] px-[32px] py-[26px]">
        <img src="images/one.png" alt="logo" />
        <h3 className='text-kalo text-[22px] font-bold font-inter pt-[20px]'>Dermatologist Tested</h3>
        <p className=' w-full lg:w-[313px] text-[18px] font-inter font-normal text-[#A0A79A] pt-[11px] pb-[20px]'>Lorem Ipsum is simply dummy text <br />of the printing and typesetting industry. Lorem Ipsum has been</p>
    </div>

    <div className="two w-full lg:w-[380px] bg-[#F0EFEA] rounded-[5px] px-[32px] py-[26px]">
        <img src="images/two.png" alt="logo" />
        <h3 className='text-kalo text-[22px] font-bold font-inter pt-[20px]'>Allergy tested</h3>
        <p className='w-fulllg:w-[313px] text-[18px] font-inter font-normal text-[#A0A79A] pt-[11px] pb-[20px]'>Lorem Ipsum is simply dummy text <br /> of the printing and typesetting industry. Lorem Ipsum has been</p>
    </div>

    <div className="three w-full lg:w-[380px] bg-[#F0EFEA] rounded-[5px] px-[32px] py-[26px]">
        <img src="images/three.png" alt="logo" />
        <h3 className='text-kalo text-[22px] font-bold font-inter pt-[20px]'>Non-comedogenic</h3>
        <p className='w-full lg:w-[313px] text-[18px] font-inter font-normal text-[#A0A79A] pt-[11px] pb-[20px]'>Lorem Ipsum is simply dummy text <br/> of the printing and typesetting industry. Lorem Ipsum has been</p>
    </div>
  </div>
  </div>   
 </section>    
    
    </>
  )
}

export default Choose