"use client";

import React, { useEffect, useState } from 'react'
const images = [
  'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGluZGlhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGluZGlhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1625398407796-82650a8c135f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  // Add more image URLs here
];
const Slider = ({title}:any) => {

  const [currentImage, setCurrentImage] = useState(0);

  const goToPrevious = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
  };

  const goToNext = () => {
    setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
  };

  // Automatic slide transition
  useEffect(() => {
    const interval = setInterval(goToNext, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center   ">
      <div className="xl:w-[60%] xl:h-[30%] md:w-[90%] flex items-center justify-center rounded-lg mt-2 mb-2 ">
        <button onClick={goToPrevious} className=" w-[5%] absolute xl:left-[19.5%] md:left-16">
          <img className="w-[70%]" src="lesserthan.svg" alt="" />
        </button>
        <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} className=" rounded-lg xl:w-full md:w-full h-[500px] object-cover " />
        <h1 className="text-[30px] font-nunito font-[600] absolute">{title}</h1>


        <button onClick={goToNext} className="w-[5%] absolute xl:right-[18%] md:right-16">
          <img className="w-[70%]" src="greaterthan.svg" alt="" />
        </button>
      </div>
    </div>
  )
}

export default Slider;