import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <>
    <div className='pt-16 pb-16'>
        <div className='w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center'>
            {/* image */}
            <div className='order-2 xl:order-1'>
                <Image src="/image/about.jpg" alt ="about" width={400} height={400} className='rounded-lg w-full h-full'/>
            </div>
            {/* contant */}
            <div className='order-1 xl:order-2'>
              <h1 className='text-gray-300 mb-4 font-semibold text-lg capitalize'> what we do</h1>
              <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 '> Create your own AI Business</h1>
              <p className='text-gray-200 mb-8 text-base'>Visionary AI Solutions creates smart tools for businesses, including AI content creators, chatbots, image generators, and data analysis. Our AI-powered solutions simplify tasks, improve efficiency, and enhance creativity, making AI accessible and useful for everyone, from startups to enterprises. 🚀</p>
              <Button className='bg-rose-500 w-36 h-12 text-base uppercase text-gray-200' size={"lg"}>About Us</Button>
            </div>
        </div>
    </div>

    </>
  )
}

export default About