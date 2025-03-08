"use client"
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ReviewCart from './ReviewCart';

function Slider() {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1324 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1324, min: 764 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 764, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
  return (
    <Carousel

      arrows={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={ true }
      autoPlaySpeed={5000}
      keyBoardControl={true}
      
    > 
    <div>
      <ReviewCart image="/image/u1.jpg" name="Gaurav Thakur" role="Engineer" reviwe="Amazing tool! The image generator is fast, easy to use, and produces stunning visuals. Perfect for creatives and designers. Highly recommended!" />  
    </div>
    <div>
      <ReviewCart image="/image/u2.jpg" name="Shivani Patel" role="Content Creator" reviwe="Impressive quality! I was surprised by how detailed and accurate the AI-generated images are. A must-try for anyone looking for unique artwork." />  
    </div>
    <div>
      <ReviewCart image="/image/u3.jpg" name="Prashant Patil" role="Engineer" reviwe="Best AI image generator! The interface is user-friendly, and the results are top-notch. I've used many tools, but this one stands out. Love it!" />  
    </div>
    </Carousel>
  )
}

export default Slider