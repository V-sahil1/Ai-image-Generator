import React from 'react'
type props={
    heading :string;
}

function SectionHeading({heading}: props) {
  return (
    <div className='w-[80%] m-auto' >
        <h1 className='text-2xl lg:text-3xl font-bold text-white'>{heading}</h1>
        <p className='text-sm sm:text-base md:text-lg font-medium mt-2 text-gray-200'>Text-to-Image Generation uses AI to transform text into visuals with models like DALL·E, enabling creativity, automation, and content creation.</p>

    </div>
  )
}

export default SectionHeading