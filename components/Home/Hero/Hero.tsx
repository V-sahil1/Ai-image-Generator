"use client"
import { Button } from '@/components/ui/button'
import axios from 'axios';
import {Loader} from 'lucide-react';
 
import React, { useState } from 'react'
import { toast } from 'sonner';

function Hero() {
  const [promt,setPromt] = useState("");
  const [image,setImage] = useState("");
  const [loading,setLoading] = useState(false);
  const handleimage = async ()=>{
    setLoading(true);
    const options = {
      method: 'POST',
      url: 'https://ai-text-to-image-generator-api.p.rapidapi.com/realistic',
      headers: {
        'x-rapidapi-key': 'e942c33e36msh1bb79f4d94b6c51p194bbejsnf225aa9a0caf',
        'x-rapidapi-host': 'ai-text-to-image-generator-api.p.rapidapi.com',
        'Content-Type': 'application/json'
      },
      data: {
        inputs: promt,
      }
    };
    try{
      const response = await axios.request(options);
      setImage(response?.data.url);
      toast.success("Image Generated successfully");

    }catch(error:unknown){
      if(axios.isAxiosError(error)&& error.response){
        toast.error(error.response.data.message)

      }
      else{
        toast.error("An unexpected error occurred")
      }

    }finally{
      setLoading(false);
    }
    
  }
  const handleDownloadimg = ()=>{
    const link = document.createElement("a");
    link.target ="_blank";
    link.href = image;
    link.download="generated-img.jpg"
    link.click()
  }

  return (
    <div className='w-[95%] min-h-screen relative mx-auto mt-[20vh]'>
        {/* content */}
        <div className='relative z-10 text-white flex flex-col items-center justify-center '>
            <h1 data-aos="fade-up" className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center bg-gradient-to-r from-orange-300 to-cyan-500 bg-clip-text text-transparent'> Create Beautiful Image with <br /> Artificial Intelligence</h1>
            <p data-aos="fade-up" data-aos-delay='100'
             className='mt-3 text-sm md:text-base font-semibold text-center text-gray-300'>Get started wuth our AI-powered Image generator tools</p>
            <div className='h-11 md:h-16 w-[95%] sm:w-[80%] md:w-[80%] lg:w-[70%] xl:w-[60%] bg-white rounded-lg mt-12 px-2 md:px-6 flex items-center justify-between '>
                <input type="text" placeholder='Genrate Your Dream Image' className='h-full rounded-lg outline-none w-full text-black block flex-1 placeholder:text-xs sm:placeholder:text-base '
                value={promt}
                onChange={(e)=>setPromt(e.target.value)}/>

                <Button onClick={handleimage} variant={"default"} size={"lg"} className=' bg-black text-white'>Genrate</Button>
            </div>
            {/* Tags */}
            <div className='flex items-center mt-8 space-x-4 flex-wrap space-y-3'>
              <p className='mt-[6px]'> Popular Tag:</p>
              <Button variant={"secondary"} className=' bg-white text-black' >Creative</Button>
              <Button className=' bg-white text-black' variant={"secondary"}>Hyperreality</Button>
              <Button className=' bg-white text-black' variant={"secondary"}>Steampunk</Button>
              <Button className=' bg-white text-black' variant={"secondary"}>Animation</Button>
              <Button className=' bg-white text-black' variant={"secondary"}>Business</Button>
            </div>
            {/* showloading and image */}
            {loading && ( <div>
              <Loader  className='animate-spin mt-6 '/>
            </div>)}
            {image && <div className='mt-8 flex flex-col items-center'>
              <img src={image} alt="ai image" className='max-w-full h-[500px] rounded-lg shadow-lg' loading='lazy' />
              <Button onClick={handleDownloadimg} className='mt-4 mb-4 bg-orange-500 hover:bg-orange-800'>Download</Button>
              </div>}
            
            
            
        </div>

    </div>
  )
}

export default Hero