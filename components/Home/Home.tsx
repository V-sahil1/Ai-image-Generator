import Hero from '@/components/Home/Hero/Hero'
import React from 'react'
import Recentimage from './Recentimage/Recentimage'

function Home() {
  return (
    <div className='overflow-hidden h-[2000px] bg-gray-800'>
      
      <Hero/>
      <Recentimage/>
    </div>
  )
}

export default Home