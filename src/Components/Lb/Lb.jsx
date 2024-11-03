import React from 'react'
import CommonHead from '../../Common/CommonHead'
import Common_button from '../../Common/Common_button'
import CommonAccro from '../../Common/CommonAccro'

const Lb = () => {
  return (
    <>

    <section className='Lb'>
    <div className="container">
      <div className="cream_row flex flex-warp flex-col-reverse lg:flex-row-reverse lg:justify-center lg:mt-[110px] gap-[50px] lg:gap-[120px]">
        <div className="hand_lb_text">
          <CommonHead CommonHeadtext={'All skins types'} className='px-2 lg:px-0'/>
          <h2 className='px-2 lg:px-0 font-pt w-full lg:w-[489px] text-[#333333] text-[48px] font-medium pb-[32px]'>Men's lip balm lasting 
          (25 gr)</h2>
          <div>
          <CommonAccro Accro_text={'How to use'} />
          <CommonAccro Accro_text={'Ingredients'} />
          <CommonAccro Accro_text={'Benefits'} />
          <div className='pt-6 flex gap-[27px]'>

          <Common_button />
          <p className='text-brand-color text-[25px] font-pt font-medium'>৳ 300</p>
          </div>
          </div>
      </div>
          <div className="hand_wash_image lpb-[40px] lg:pb-[149px]">
            <img src="images/lb.png" alt="lb image" />
          </div>
      </div>
    </div>
   </section>

    </>
  )
}
  

export default Lb