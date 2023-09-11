"use client";
import React, { useContext, useState } from 'react'
import { useAuth } from '../context/loginContext/LoginContext';
import { useCart } from '../context/cartContext/CartContext';
import { useRouter } from 'next/navigation';

interface Cards {
  key:string,
  name:string,
  price:string,
  quant:string,
  image:string
}


const Card = ({key,name,price,quant,image}:Cards) => {
  console.log(image);

 
    const navigate = useRouter();
    const {user} = useAuth();
    const [quantity, setQuantity] = useState(1);
    const {addToCart} = useCart();
    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        console.log(user);
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = async (data:any) => {
        // Implement your logic to add the item to the cart here

        try {
            const response = await fetch(
              `http://localhost:3001/user/cart/addtocart`,
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization':`Bearer ${user?.token}`
                },
                body: JSON.stringify(data),
              }
            );
            const result = await response.json();
            addToCart(data);
            if (result.statusCode === 200) {
                navigate.push(`/cartItems`);
            }
      
          } catch (error) {
            console.error(error);
          }
       
        
    };

    return (
        <div key={key} className="w-[300px]">

           <div className="  w-[100%] h-[40%]">
                <img className="object-cover  w-[100%] rounded-lg " src={image} alt="" />
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
                    <button className="hover:bg-red-600 w-[50%] rounded-lg " onClick={() => handleAddToCart({email:user?.email,productId:key,name:name,price:price,quantity:quantity})}>Add to cart</button>
                </div>
           </div>
            

        </div>
    );
};

export default Card