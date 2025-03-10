"use client"
import { Button } from '@/components/ui/button';
import { QRCodeSVG } from "qrcode.react";
import React, { useState } from 'react'
type props ={
    price:string;
    type:string;
    user:string;
}


function PriceCart({price,type,user}:props) {

  const [showQR, setShowQR] = useState(false);

  const handlePayment = () => {
    setShowQR(true);
  };
  return (
    <div className='bg-gray-900 p-8 rounded-lg text-center'>
        <p className='mt-12 mb-2 text-3xl text-white font-semibold'>{type}</p>
        <p className='text-white'>Greate for private individuals</p>
        <hr className=' opacity-20 my-8' />
        <div className='text-white font-semibold text-2xl'>
            <span className='text-5xl'>&#8377;{price}</span>/mo
        </div>
        <hr className=' opacity-20 my-8' />
        <div className='mt-6 space-y-3 text-white text-opacity-50'>
            <p>{user} User</p>
            <p>Unlimited Projects</p>
            <p>Download Prototypes</p>
             
        </div>
        <Button size={"lg"} className='bg-white mt-8 text-black'
         onClick={handlePayment} >Get Now</Button>
          {showQR && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg text-center flex flex-col items-center">
            <h2 className="text-lg font-bold text-black mb-4">
              Scan QR Code to Pay &#8377;{price} 
            </h2>
            <QRCodeSVG
              value={`upi://pay?pa=vardeka@okicici&pn=VA&am=${price}&cu=INR&tn=aiImageGenrator`}
            />
            <Button size={"lg"} onClick={() => setShowQR(false)} className='bg-gray-950  mt-4   px-4 py-2 rounded-lg text-white'
         >Close</Button>

            {/* <button
              className="
               mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
              onClick={() => setShowQR(false)}
            >
              Close
            </button> */}
          </div>
        </div>
      )}
        
    </div>
  )
}

export default PriceCart