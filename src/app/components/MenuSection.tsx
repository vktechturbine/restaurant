import React from 'react'

import SubMenu from './SubMenu';

const MenuSection = ({menuCategory}:any) => {
    if(menuCategory === "food")
    {

        return (
            <div className="xl:w-[100%] flex flex-col justify-center">
                <SubMenu name="BreakFast" />    
                <SubMenu name="Snacks" />
                <SubMenu name="Dinner" />
                <SubMenu name="Lunch" />
            </div>
        );
    }
    if(menuCategory === "drinks"){
        return (
            <h1>Drinks</h1>
        );
    }

}

export default MenuSection