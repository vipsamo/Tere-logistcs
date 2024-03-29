import React from "react";
import ScrollToTop from "react-scroll-to-top";
import brochure from '../assets/pdf/brochure.pdf'

import { FaFacebookSquare,FaTwitter,FaInstagramSquare,FaPeriscope, FaEnvelope,FaPhone,FaAngleUp } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
<ScrollToTop smooth   component={<p className="text-indigo-600  flex  justify-center "><FaAngleUp size={30}/></p>} />
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
          <span className="text-indigo-400">Download</span> our brochure
         
        </h1>
        <div>
          <a href={brochure}
          download
          >
          <button
            className="bg-indigo-400 hover:bg-indigo-500 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white md:w-auto w-full"
            
          >
           Download
          </button>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 sm:px-8 px-5 m-8  py-5 ">
      <Link to='./contact'>
        <div>
          <h1 className="pt-2 pb-4 text-4xl ">FIND US</h1>
          <div className="flex  gap-2 p-1 ">
         <div className="text-indigo-500 size-20"><  FaPeriscope/></div>
          <p className="flex flex-col">  Located at munuki, Suk Libya</p>
          </div>
          <div className="flex p-1 gap-2 ">
         <div className="text-indigo-500 size-20"><FaPhone/></div>
          <p className="flex flex-col"> +211920833378</p>
          </div>
          <div className="flex p-1 gap-2 ">
         <div className="text-indigo-500 size-20"><FaPhone/></div>
          <p className="flex flex-col"> +211917216374</p>
          </div>
          <div className="flex p-1 gap-2 ">
         <div className="text-indigo-500 size-20"><FaPhone/></div>
          <p className="flex flex-col"> +211922825778</p>
          </div>
          <div className="flex p-1 gap-2 ">
         <div className="text-indigo-500 size-20"><FaEnvelope/></div>
          <p className="flex flex-col"> tereinvestment@gmail.com</p>
          </div>

        </div>
        </Link>
        
        <div>
          <h1 className="pt-2 pb-4 text-4xl ">OUR SERVICES</h1>
          <Link to='./services'>
          <div >
            <p className="p-1">General supply of goods and services</p>
            <p className="p-1">Office Stationary</p>
            <p className="p-1">Office Furniture</p>
            <p className="p-1">Relief Items</p>
            <p className="p-1">And many more</p>
            
          </div>
          </Link>

        </div>
        
    </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© Tere investment co.ltd 2022. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
       <div>
       <span
          
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-indigo-500
        duration-300 "
        >
    <FaFacebookSquare/>
        </span>
        <span
          
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-indigo-500
        duration-300 "
        >
    <FaTwitter/>
        </span>
        <span
          
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-indigo-500
        duration-300 "
        >
    <FaInstagramSquare/>
        </span>
       </div>
      </div>
      
    </footer>
  );
};

export default Footer;