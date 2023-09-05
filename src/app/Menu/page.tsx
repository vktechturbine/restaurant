"use client";
import React, { useState } from 'react'
import Slider from '../components/Slider'
import Link from 'next/link'
import BreakFast from '../components/SubMenu'
import MenuSection from '../components/MenuSection'
import SubMenu from '../components/SubMenu';

const Page = () => {
  const [menu,setMenu] = useState("food");



  return (
    <div>
      <Slider title="Menu" />
      <div className="flex justify-center">
        <div className="w-[60%] self-center border-[5px] border-[#F16F3E]">
          <div className="w-[40%] flex justify-between pt-4 pb-4">
            <button className="font-Jost text-[1.2em] font-bold uppercase border-2 border-transparent hover:border-t-[#111111] hover:border-b-[#111111] " onClick={() => setMenu("food")} >Food</button>
            <button className="font-Jost text-[1.2em] font-bold uppercase border-2 border-transparent hover:border-t-[#111111] hover:border-b-[#111111] " onClick={() => setMenu("drinks")} >Drinks</button>
            <button className="font-Jost text-[1.2em] font-bold uppercase border-2 border-transparent hover:border-t-[#111111] hover:border-b-[#111111] " onClick={() => setMenu("pastry")}>Pastry</button>
            <button className="font-Jost text-[1.2em] font-bold uppercase border-2 border-transparent hover:border-t-[#111111] hover:border-b-[#111111] " onClick={() => setMenu("iceCream")} >IceCream</button>
          </div>
          <div className="flex flex-col">
            <MenuSection menuCategory={menu}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page