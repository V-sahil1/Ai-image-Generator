import React from 'react'
import PriceCart from './PriceCart'

function Price() {
  return (
    <div className='pt-16 pb-16 bg-gray-950'>
        <div className='w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center'>
            <div>
                <h1 className='uppercase text-white mb-6 font-bold'>Flexible & affortable</h1> 
                <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold mb-6 text-white'>Our Pricing Plans</h1>
                <p className='text-gray-200'>The pricing plans for your AI image generator can include a Free plan with limits, a Pro plan with HD images and no watermark, and a Premium plan with unlimited access and full rights.</p>
                <div className=' mt-[15px] '>
                     
                <h3 className='text-gray-200 '> <span className='text-green-600 '>✔</span>  High-quality services</h3>
                <h3 className='text-gray-200'><span className='text-green-600'>✔</span> 24/7 customer support</h3>
                <h3 className='text-gray-200'><span className='text-green-600'>✔</span> Affordable rates</h3> 
                </div>
              
                

            </div>
            {/* price cart */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
                <div data-aos="fade-right" data-aos-anchor-placement="top-center"
                data-aos-delay="100">
                    <PriceCart price="100" user='1' type='Silver Pack ' />
                </div>
                <div
                data-aos="fade-right" data-aos-anchor-placement="top-center"
                data-aos-delay="100">
                    <PriceCart price="180" user='3' type='Golden Pack ' />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Price