"use client";
import React, { useEffect } from 'react'
import data from '../../../public/MOCK_DATA.json';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



import Card from './Card';
import { error } from 'console';
const SubMenu = async ({ name }: any) => {
   await fetch('http://localhost:3001/product/fetchItems').then( response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
}).then(data => {
    console.log(data.data);

   
    const frsttenProduct = data.data.slice(0, 9);
    console.log(frsttenProduct);
    var settings = {

        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        speed: 500,
        arrows: false,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 2560,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
        ]

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
            <h1 className="self-center text-[16px] font-Jost uppercase font-[700] tracking-[3px]">{name}</h1>
            <div className="flex  justify-center pt-4 ">

                <button onClick={prevSlide} className="w-[2%]"><img src="lesserthan.svg" className="w-[50px] h-[50px]" alt="" /></button>
                <div className="flex justify-center xl:w-[95%]   md:w-[90%]">

                    <div className="w-[100%]">
                        <Slider ref={c => (slider = c)} style={{ display: "flex" }}{...settings}>

                            {data.slice(0, 15).map(firstData => {
                                if (firstData.subCategory === name) {

                                    return (<div key={firstData.id} className="ml-[7%]">

                                        <Card name={firstData.name} price={firstData.price} />
                                    </div>);
                                }
                            })}
                        </Slider>
                    </div>
                </div>
                <button className="w-[2%]" onClick={nextSlide}><img src="greaterthan.svg" className="w-[50px] h-[50px]" alt="" /></button>
            </div>
        </div>
  
    )
}).catch(error => {
    console.log(error);
})
}

export default SubMenu;