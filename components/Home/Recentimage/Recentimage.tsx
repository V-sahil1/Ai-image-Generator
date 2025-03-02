import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import Imageslider from './Imageslider'

function Recentimage() {
  return (
    <>
     <div className='pt-16 pb-16 bg-gray-950'>
        {/* Heading */}
        <SectionHeading  heading ="Explor Our Recent Image"/>
        {/* Slider */}
        <div className='w-[90%] md:w-[80%] mx-auto mt-16'>
            <Imageslider/>
        </div>
        
    </div></>
   
  )
}

export default Recentimage