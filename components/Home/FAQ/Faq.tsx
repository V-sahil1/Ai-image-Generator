import React from 'react'
import Faqcart from './Faqcart'

function Faq() {
  return (
    <>
    <div className='pt-16 pb-16 bg-gray-950'>
        <div className='w-[80%] mx-auto mt-16 grid-cols-1 grid md:grid-cols-2 gap-10 items-center '>
            <div data-aos="fade-right" data-aos-anchor-placement="top-center"
                data-aos-delay="100">
                <img src='/image/faq.png' alt='faq' width={500} height={500} />
            </div>
            <div>
                <Faqcart/>
            </div>

        </div>
    </div>
    </>
    
  )
}

export default Faq