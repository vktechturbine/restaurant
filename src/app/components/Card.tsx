"use client";
import React, { useState } from 'react'


const Card = () => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = () => {
        // Implement your logic to add the item to the cart here
    };

    return (
        <div className="w-[300px]">

           <div className="  w-[100%] h-[40%]">
                <img className="object-cover  w-[100%] rounded-lg " src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80" alt="" />
           </div>
           <div className="w-[100%] h-[60%]">
                <h1 className="pt-2 pl-2 pb-2 self-center font-nunito text-[20px] font-[800]">title</h1>
                <p  className=" pt-2 pl-2 pb-2 font-nunito text-[20px] font-[600]">$40</p>
                <div className="flex pt-2  pb-2">
                    <div className="flex w-[50%] pl-1 justify-between">
                        <button className="hover:bg-red-600 w-[30%] rounded-md">+</button>
                        <p>3</p>
                        <button className="hover:bg-red-600 w-[30%] rounded-md">-</button>
                    </div>
                    <button className="hover:bg-red-600 w-[50%] rounded-lg ">Add to cart</button>
                </div>
           </div>
            

        </div>
    );
};

export default Card