"use client";
import React from 'react'
import data from '../../../public/MOCK_DATA.json';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Card from './Card';
const BreakFast = () => {
    const first10Products = data.filter((_, index) => index < 10);
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        responsive: [
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 3,
                }
            },
        ]

    };
    let slider;

    const nextSlide = () => {
        slider.slickNext();
    };

    const prevSlide = () => {
        slider.slickPrev();
    };
    let count = 1;
    return (

        <div className="flex justify-center pt-4 pb-10">
            <div className="flex xl:w-[60%]   md:w-[90%]">
                <button onClick={prevSlide} className="w-[2%]"><img src="lesserthan.svg" className="w-[50px] h-[50px]" alt="" /></button>
                <div className="w-[96%]">
                    <Slider ref={c => (slider = c)} {...settings}>

                        {first10Products.map(firstData => {
                            if (firstData.subCategory === "BreakFast") {
                                if (count <= 1) {
                                    count++;
                                }
                            }
                            return (<div key={firstData.id} className="ml-[7%]">
                                <Card name={firstData.name} price={firstData.price} />
                            </div>);
                        })}
                    </Slider>
                </div>
                <button className="w-[2%]" onClick={nextSlide}><img src="greaterthan.svg" className="w-[50px] h-[50px]" alt="" /></button>
            </div>
        </div>

    )
}

export default BreakFast