"use client";
import React  from "react";

import Slider from "react-slick";
import Card from "./Card";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SubMenu = ({ name,data}: any) => {

  var settings = {

    infinite: false,
    speed: 500,
    arrows: false,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll:2,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  let slider: any;

  const nextSlide = () => {
    slider.slickNext();
  };

  const prevSlide = () => {
    slider.slickPrev();
  };
  let count = 1;

  
    return (
      <div className="flex flex-col justify-center">
        <h1 className="self-center text-[16px] font-Jost uppercase font-[700] tracking-[3px]">
          {name}
        </h1>
        <div className="flex  justify-center pt-4 ">
          <button onClick={prevSlide} className="w-[2%]">
            <img src="lesserthan.svg" className="w-[50px] h-[50px]" alt="" />
          </button>
          <div className="flex justify-center xl:w-[95%]   md:w-[90%]">
            <div className="w-[100%]">
              <Slider ref={(c) => (slider = c)} {...settings}>
              
                 {data ? 
                    data?.map((firstData: any) => {
                 
                        return (
                          <div key={firstData.id} className="ml-[7%] ">
                            <Card
                              key={firstData.id}
                              name={firstData.productName}
                              image={firstData.productImage}
                              price={firstData.price}
                              quant={firstData.quantity}
                            />
                          </div>
                        );
                 
                     
                        
                      }
                      ):null}
                      
                 
               
                
                
                
              </Slider>
            </div>
          </div>
          <button className="w-[2%]" onClick={nextSlide}>
            <img src="greaterthan.svg" className="w-[50px] h-[50px]" alt="" />
          </button>
        </div>
      </div>
    );
  
};

export default SubMenu;
