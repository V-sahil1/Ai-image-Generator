import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
function Faqcart() {
  return (

    <Accordion type="single" collapsible className='text-gray-200'>
    <AccordionItem value="item-1">
      <AccordionTrigger className='md:text-xl lg:text-2xl'>How does the image generator work?</AccordionTrigger>
      <AccordionContent className=' text-base md:text-lg'>
      Our AI-powered image generator creates unique and high-quality images based on your input. Simply enter a prompt, customize settings if needed, and generate stunning visuals instantly!
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger className='  md:text-xl lg:text-2xl'> Is the image generation free to use?</AccordionTrigger>
      <AccordionContent className=' text-base md:text-lg' >
      Yes! Our basic image generation is free. However, we may offer premium features for higher-resolution images or additional customization options.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger className='md:text-xl lg:text-2xl'>Can I use the generated images for commercial purposes?
      </AccordionTrigger>
      <AccordionContent className=' text-base md:text-lg'>
      Yes, you can use the images for personal and commercial projects. However, please check our terms of use for any specific licensing restrictions.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
  
  )
}

export default Faqcart