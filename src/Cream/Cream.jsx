import React, { useState } from 'react'
import CommonHead from '../Common/CommonHead'
import CommonAccro from '../Common/CommonAccro'
import Common_button from '../Common/Common_button'


const Cream = () => {
 const [setshow , show] = useState(false)
  return (
    <>
    <section className='cream'>
    <div className="container">
      <div className="cream_row flex flex-warp flex-col lg:flex-row-reverse justify-center mt-[50px] lg:mt-[110px] gap-[60px] lg:gap-[120px]">
          <div className="hand_wash_image pb-[60px] lg:pb-[149px]">
            <img src="images/cream.png" alt="cream image" />
          </div>
        <div className="hand_wash_text px-2 lg:px-0">
          <CommonHead CommonHeadtext={'All skins types'} className='px-2 lg:px-0'/>
          <h2 className='font-pt w-full lg:w-[215px]  text-[#333333] text-[48px] font-medium pb-[32px] px-2 lg:px-0'>Men’s day
          cream</h2>
          <div>
          <CommonAccro Accro_text={'How to use'} />
          <CommonAccro Accro_text={'Ingredients'} />
          <CommonAccro Accro_text={'Benefits'} />
          <div className='pt-4 lg:pt-6 flex gap-3 lg:gap-[27px] mb-12 items-center'>

          <Common_button />
          <p className='text-brand-color text-[19px] lg:text-[31px] font-pt font-medium pr-12'>৳ 500</p>
          </div>

          </div>

      </div>
      </div>
    </div>
   </section>
    
    
    
    
    </>
  )
}

export default Cream