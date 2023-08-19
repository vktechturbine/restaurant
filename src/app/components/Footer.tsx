import React from 'react'

const Footer = () => {
    return (
        <div className="flex justify-center mt-4">
            <div className="w-[60%] flex">
                <div className="w-[25%]">
                    <div>
                        <h1>About Company</h1>
                    </div>
                    <div>
                        <div><img src="./public/twitter.svg" alt="" /></div>
                        <div><img src="" alt="" /></div>
                        <div><img src="" alt="" /></div>
                        <div><img src="" alt="" /></div>
                    </div>
                </div>
                <div className="w-[25%]">
                    <h1>Address</h1>
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
                <div className="w-[25%]">
                    <h1>OPENING HOURS</h1>
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
                <div className="w-[25%]">
                    <h1>SIGN UP TO OUR NEWSLETTER</h1>
                    <form action="">
                        <div className="relative">
                            <input type="text" id="email" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email</label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Footer