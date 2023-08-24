import React from 'react'

const Footer = () => {
    return (
        <div className="flex justify-center ">
            <div className="md:w-[90%] xl:w-[60%] flex flex-wrap  bg-orange-200 ">
                <div className="w-[25%] pl-4 pr-4 ">
                    <div>
                        <h1 className="font-nunito font-[600] text-lg">About Company</h1>
                    </div>
                    <div className="flex">
                        <div><img className="w-[35px] mr-2" src="twitter.svg" alt="twitter_img" /></div>
                        <div><img className="w-[35px] mr-2" src="facebook.svg" alt="facebook_img" /></div>
                        <div><img className="w-[35px] mr-2" src="insta.svg" alt="insta_img" /></div>
                        <div><img className="w-[35px] mr-2" src="icons8-google-plus.svg" alt="google_img" /></div>
                    </div>
                </div>
                <div className="w-[25%] pl-4 pr-4">
                    <h1 className="font-nunito font-[600] text-lg">Contact Us</h1>
                    <div>
                        <p>New York, NY 10012, US</p>
                    </div>
                    <div>
                        <p>info@example.com</p>
                    </div>
                    <div>
                        <p>+91 9856859656</p>
                    </div>

                </div>
                <div className="w-[25%] pl-4 pr-4">
                    <h1 className="font-nunito font-[600] text-lg">OPENING HOURS</h1>
                    <div className="flex border-b-2 border-black pb-2 pt-1">
                        <p className="w-[50%] text-center">Mon-Thu</p>
                        <p className="w-[50%] text-center">08am-09pm</p>
                    </div>
                    <div className="flex border-b-2 border-black pb-2 pt-1">
                        <p className="w-[50%] text-center">Fri-Sat</p>
                        <p className="w-[50%] text-center">08am-01pm</p>
                    </div>
                    <div className="flex border-b-2 border-black pb-2 pt-1">
                        <p className="w-[50%] text-center">Sunday</p>
                        <p className="w-[50%] text-center">09am-10pm</p>
                    </div>
                </div>
                <div className="w-[25%] pl-4 pr-4">
                    <h1 className="font-nunito font-[600] text-lg">SIGN UP TO OUR NEWSLETTER</h1>
                    <form action="">
                        <div className="relative flex">
                            <input type="text" id="footeremail" className=" border-2 border-black border-r-0 block px-2.5 pb-2.5 pt-4 w-[70%] text-sm text-gray-900 bg-transparent rounded-tl-lg rounded-bl-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="footeremail" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email</label>
                            <button className=" w-[30%] pl-2 pr-2 border-2 rounded-br-lg border-black hover:bg-[#ffd703] rounded-tr-lg">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Footer