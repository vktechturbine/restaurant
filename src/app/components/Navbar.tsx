import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className="flex justify-center mt-[-8px]  ">
      <div className="flex xl:w-[60%] mt-2    md:w-[90%]  bg-orange-500 ">
        <div className=" flex justify-center w-[20%]">
          <img className="rounded-[80px] w-[100px] h-[100px]" src="https://img.freepik.com/premium-vector/animated-chef-logo-template_434010-35.jpg?size=626&ext=jpg" alt="" />
        </div>
        <div className="w-[80%] flex justify-evenly">
          <Link href="/" className="self-center font-nunito text-[20px] font-[600] hover:bg-black text-yellow-50 rounded-lg pl-2 pr-2">Home</Link>
          <Link href="/Menu" className="self-center font-nunito text-[20px] font-[600] hover:bg-black text-yellow-50 rounded-lg pl-2 pr-2">Menu</Link>
          <Link href="/contactus" className="self-center font-nunito text-[20px] font-[600] hover:bg-black text-yellow-50 rounded-lg pl-2 pr-2">Contact Us</Link>
          <Link href="/aboutus" className="self-center font-nunito text-[20px] font-[600] hover:bg-black text-yellow-50 rounded-lg pl-2 pr-2">About Us</Link>
          <Link href="/login" className="self-center font-nunito text-[20px] font-[600] hover:bg-black text-yellow-50 rounded-lg pl-2 pr-2">Login</Link>
        </div>
      </div>
    </div>

  )
}

export default Navbar