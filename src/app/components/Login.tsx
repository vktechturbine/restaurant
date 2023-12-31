"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/loginContext/LoginContext";
interface FormData {
  email: string;
  password: string;
}

const Login = () => {
  const { login } = useAuth();
  const [shown, setIsShown] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const navigate = useRouter();
  const handleLoginUser = async (data: any) => {
    try {
      const response = await fetch(
        `http://localhost:3001/user/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      alert(result.message);
      login(result.data);
      if (result.statusCode === 200) {
        navigate.push(`/`);
      }

    } catch (error) {
      console.error(error);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Form Data:', formData);
    handleLoginUser({email:formData.email,password:formData.password} );
  };
  return (
    <div className="flex justify-center mt-10  ">
      <div className="xl:w-[60%] md:w-[90%] flex border-4 border-orange-600 p-4">
        <div className="w-[100%]">
          <img
            className="w-[100%] h-[100%] object-cover rounded-md"
            src="https://images.rawpixel.com/image_350/cHJpdmF0ZS9zdGF0aWMvaW1hZ2Uvd2Vic2l0ZS8yMDIyLTA0L2xyL2lzMTEyMTAtaW1hZ2Uta3d2d3ZyemcuanBn.jpg"
            alt="login_image"
          />
        </div>
        <div className="w-[100%] pl-4 pr-4 ">
          <h1 className="mb-8 text-[25px] font-[600] font-nunito">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="relative border-2 border-yellow-600 mb-10 rounded-md">
              <input
                type="text"
                id="email"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Email
              </label>
            </div>
            <div className="relative border-2 border-yellow-600 rounded-md">
              <input
                type="text"
                id="password"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <label
                htmlFor="password"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Password
              </label>
            </div>
            <button
              className={
                shown
                  ? " mt-6 w-[100%] bg-orange-400 rounded-md p-2"
                  : " mt-6 w-[100%] bg-green-400 rounded-md p-2"
              }
              type="submit"
            >
              Submit
            </button>
          </form>
          <Link href="/register">
            <button
              className={
                shown
                  ? "mt-2 w-[100%] bg-green-400 rounded-md p-2"
                  : " mt-2 w-[100%]  bg-orange-400 rounded-md p-2"
              }
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
            >
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
