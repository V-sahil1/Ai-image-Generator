"use client"
import { Navlinks } from '@/components/constant/Constant'
import { MenuIcon, Search, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
type props ={
  openNavbar : ()=>void
}
function Nav({openNavbar}:props) {
  const[navbg,setNavbg] = useState(false);
  useEffect(()=>{
    const handler =()=>{
      if(window.scrollY >=90) setNavbg(true);
    if(window.scrollY<90) setNavbg(false);
    };
    window.addEventListener("scroll", handler);
    return ()=> window.removeEventListener("scroll",handler);
    
  },[])
  const bg_style = navbg? "bg-gray-900 shadow-md":"";
  return (
    <div className={`flex ${bg_style} items-center justify-between  h-[12vh] fixed mx-auto transition-all duration-200 z-[100] w-full `}>
        <h1 className='text-3xl text-white font-bold ml-8 md:ml-16'>IMGIAI</h1>
        <div className='md:flex items-center space-x-10 hidden'>
          {/* Navlink */}
          {Navlinks.map((link)=>{
            return(
              <Link className='relative text-white text-base w-fit block after:block after:contant-[""] after:absolute after:h-[3px] after:bg-yellow-400 after:w-full after:scale-x-0
              after:hover:scale-x-100 after:transition after:duration-100 after:origin-center' key={link.id} href={link.url}>
                <p>{link.label}</p>
              </Link>
            )
          })}
        </div>
        {/* button and icons */}
        <div className='flex items-center space-x-5 md:space-x-8 text-white mr-8 md:mr-16'>
          <ShoppingCart className='cursor-pointer w-6 h-6'/>
          <Search className='cursor-pointer w-6 h-6'/>
          <MenuIcon onClick={openNavbar} className='cursor-pointer w-6 h-6 md:hidden'/>
        </div>
        </div>
  )
} 

export default Nav