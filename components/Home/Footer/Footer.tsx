import React from 'react'

function Footer() {
  return (
    <div className='pt-16 pb-16 bg-black' >
        <div className='w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-start pb-8 border-b-2 border-gray-900 space-y-6 sm:space-y-0 '>
            <div className='cols-span-2  '>
                <p className='text-2xl w-[80%] sm:text-3xl md:text-4xl text-white  font-bold'>
                    We Develop & create digital future
                </p>
            </div>
            <div className=''>
                <h1 className='text-xl font-bold text-white  '>Address</h1>
                <p className='text-white opacity-60 mt-4'>Surat</p>
                <p className='text-white opacity-60 '>Gujrat India</p>
                
            </div>
            <div className=''>
                <h1 className='text-xl font-bold text-white '>Contact</h1>
                <p className='text-white opacity-60 mt-4'>Email</p>
                <p className='text-white sm:text-xl text-lg font-bold opacity-60 '>sahilvardekar89@gmail.com</p>
                <p className='text-white opacity-60 mt-4'>Phone numaber</p>
                <p className='text-white sm:text-xl text-lg font-bold opacity-60 '>+9198975979</p>
                
            </div>
        </div>
        <div className='w-[80%] mx-auto text-gray-200 mt-4'>Ai image Generator &copy; 2025. All Right Reserved</div>
    </div>
  )
}

export default Footer