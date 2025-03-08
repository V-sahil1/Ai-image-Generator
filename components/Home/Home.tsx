"use client"
import Hero from '@/components/Home/Hero/Hero'
import React, { useEffect } from 'react'
import Recentimage from './Recentimage/Recentimage'
import About from './About/About'
import Price from './Price/Price'
import Review from './Review/Review'
import Faq from './FAQ/Faq'
import AOS from 'aos' ;
import 'aos/dist/aos.css'; 

function Home() {
  useEffect(()=>{
    const initAOS = async ()=>{
      await import ("aos");
      AOS.init({
        duration :1000,
        easing :"ease",
        once : true,
        anchorPlacement :"top-bottom"
      })
    }
    initAOS()
  },[])
   
  return (
    <div className='overflow-hidden  bg-gray-800'>
      
      <Hero/>
      <Recentimage/>
      <About/>
      <Price/>
      <Review/>
      <Faq/>
    </div>
  )
}

export default Home