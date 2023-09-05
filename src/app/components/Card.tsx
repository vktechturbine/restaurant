"use client";
import React, { useContext, useState } from 'react'
import { useAuth } from '../context/loginContext/LoginContext';
import { useCart } from '../context/cartContext/CartContext';


const Card = ({key,name,price,quant}:any) => {

    const {user} = useAuth();
    const [quantity, setQuantity] = useState(1);
    const {addToCart} = useCart();
    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = (data:any) => {
        // Implement your logic to add the item to the cart here
        addToCart(data);
        console.log("item added successfully");

    };

    return (
        <div key={key} className="w-[300px]">

           <div className="  w-[100%] h-[40%]">
                <img className="object-cover  w-[100%] rounded-lg " src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80" alt="" />
           </div>
           <div className="w-[100%] h-[60%]">
                <h1 className="pt-2 pl-2 pb-2 self-center font-nunito text-[20px] font-[800]">{name}</h1>
                <p  className=" pt-2 pl-2 pb-2 font-nunito text-[20px] font-[600]">${price}</p>
                <div className="flex pt-2  pb-2">
                    <div className="flex w-[50%] pl-1 justify-between">
                        <button className="hover:bg-red-600 w-[30%] rounded-md" onClick={handleIncrement}>+</button>
                        <p>{quantity}</p>
                        <button className="hover:bg-red-600 w-[30%] rounded-md" onClick={handleDecrement}>-</button>
                    </div>
                    <button className="hover:bg-red-600 w-[50%] rounded-lg " onClick={() => handleAddToCart({name:name,price:price,quantity:quantity})}>Add to cart</button>
                </div>
           </div>
            

        </div>
    );
};

export default Card