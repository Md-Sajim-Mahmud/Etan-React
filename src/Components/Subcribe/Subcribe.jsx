import React from 'react'

const Subcribe = () => {
  return (
    <>
    <section className='Subcribe bg-[#ECEBE6] '>
    <div className="container">
        <div className="subcribe_row flex flex-wrap  gap-[50px] lg:gap-[111px] lg:py-[80px] py-14 justify-center">
            <div className="subcribe_text">
            <h2 className=' lg:w-[356px] w-full font-pt font-medium text-2xl lg:text-[48px] '>Subscribe to the 
            daily <span className='text-brand-color'>updates</span> </h2>
            </div>
            <div className="subcribe_input w-[370px] lg:w-[650px] lg:h-[92px] border-[1px] border-[#A0A79A] rounded-[50px] justify-between p-5 flex lg:flex-none">
              <input className='w-[300px] h-[30px] border-none outline-none rounded-[10px] py-7 px-4 bg-[#ECEBE6]' type="text" placeholder='Enter your email address' />
              <button className='lg:w-[198px] w-[120px] bg-brand-color text-[#ffffff] font-inter font-medium text-[10px] lg:text-lg lg:h-[50px] rounded-[50px] active:scale-[1.1]'>Subscribe now</button>
            </div>
        </div>
    </div>
    </section>

    </>
  )
}

export default Subcribe