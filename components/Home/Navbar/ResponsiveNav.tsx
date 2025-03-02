'use client'
import React, { useState } from 'react'
import Nav from './Nav'
import Mobilenav from './Mobilenav'

function ResponsiveNav() {
  const [showNav ,setShownav] = useState(false)
  const openNavbar = ()=> setShownav(true);
  const closeNavbar = ()=> setShownav(false);
    return (
    <div>
        <Nav openNavbar ={openNavbar}/>
        <Mobilenav showNav={showNav}  closeNavbar={closeNavbar} />
    </div>
  )
}

export default ResponsiveNav