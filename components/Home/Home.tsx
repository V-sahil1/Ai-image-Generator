import Hero from '@/components/Home/Hero/Hero'
import React from 'react'
import Recentimage from './Recentimage/Recentimage'
import About from './About/About'

function Home() {
  return (
    <div className='overflow-hidden  bg-gray-800'>
      
      <Hero/>
      <Recentimage/>
      <About/>
    </div>
  )
}

export default Home