import { QuoteIcon } from 'lucide-react';
import React from 'react'

type props={
    image: string;
    name: string;
    role: string;
    reviwe: string;
}
function ReviewCart({image, name, role,reviwe}:props) {
  return (
    <div className='flex items-center justify-center flex-col'>
        <QuoteIcon className='w-10 h-10 text-yellow-300'/>
        <p className='text-center mt-4 text-white text-base md:text-lg lg:text-xl font-semibold text-opacity-80'>{reviwe}</p>
        <div className='mt-8 '>
          <h1 className='text-base md:txet-2xl font-bold text-white text-center'>{name}</h1>
          <p className='text-sm md:text-lg font-bold text-white text-center'> {role}</p>
          <img src={image} height={80} width={80} className='mt-6 rounded-full mx-auto ' alt="profile picture" />
        </div>

    </div>
  )
}

export default ReviewCart