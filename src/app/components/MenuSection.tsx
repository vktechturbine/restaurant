"use client"
import React, { useEffect, useState } from 'react'

import SubMenu from './SubMenu';

const MenuSection = ({menuCategory}:any) => {
    const [breakFast, setBreakFast] = useState<any[]>();
    const [lunch, setLunch] = useState<any[]>();
    useEffect(() => {
        fetch("http://localhost:3001/product/fetchItems")
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            setBreakFast(data.data.filter((p:any) => p.subCategory === "Breakfast"));
            setLunch(data.data.filter((p:any) => p.subCategory === "Lunch"));
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
    if(menuCategory === "food")
    {

        return (
            <div className="xl:w-[100%] flex flex-col justify-center">
                <SubMenu name="Breakfast" data={breakFast} />    
                <SubMenu name="Lunch" data={lunch}/>    
                
            </div>
        );
    }
    if(menuCategory === "drinks"){
        return (
            <h1>Drinks</h1>
        );
    }

    return(
        <h1>No Products Found</h1>
    );

}

export default MenuSection