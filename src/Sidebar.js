import React from 'react'
import { useState } from "react";
import { FcStumbleupon } from "react-icons/fc";
import { MdDarkMode } from "react-icons/md";
import { FaSun } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { NavLink, Route, Routes } from 'react-router-dom';
import { MdCategory } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { PiArrowBendDownRightFill } from "react-icons/pi";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { IoIosAnalytics } from "react-icons/io";
import { FaHandsHelping } from "react-icons/fa";
import "./Sidebar.css"

const Sidebar = (props) => {
    const { isDark, setDark } = props;
    const {isSideBar ,idSidebarThere } = props ;

    const [showCat, setShowCat] = useState(false);


    const toggleMode = (darkMode) => {
        setDark(darkMode);
    };
    const showSideBar = (bool) => {
      idSidebarThere(bool) ;
    };
    const showCategories = (bool) => {
      setShowCat(bool) ;
    };
  return (
  
    <div className={`w-[17rem] h-[100vh] p-1 ${isDark ? 'dark-mode' : 'light-mode' }`}>

        <div className='flex'>
          <FcStumbleupon className='ml-3 text-[40px]' />
          <NavLink  className="text-[25px] ml-5" to="/">AbesServices</NavLink>
          <MdKeyboardDoubleArrowLeft className='mt-2 ml-3 text-[30px] text-red-700 cursor-pointer' onClick={() =>showSideBar(false)} />
        </div>

        <div className='text-[20px] flex mt-9 cursor-pointer' onClick={() => showSideBar(false)}>
          <MdDashboard className='ml-3 text-[35px]'/>
          <NavLink className="text-[20px] ml-5" to="/dashboard" >Dashboard</NavLink> 
        </div>

        <div className='text-[20px] flex mt-6 cursor-pointer' onClick={() => showCategories(!showCat)} >
          <MdCategory className='ml-3 text-[35px]'/>
          <p className="text-[20px] ml-5"> Category</p>
          <MdKeyboardArrowDown className='text-[25px] mt-[8px]' />
        </div>
        <div>
          {
            showCat &&
            <div className='ml-[50px] '>
              <NavLink className="text-[20px] flex mt-3 border-2 w-[130px] border-gray-600 " to="/Electrician" > <PiArrowBendDownRightFill className='mt-1' />Electrician</NavLink> 
              <NavLink className="text-[20px] flex mt-3 border-2 w-[130px] border-gray-600" to="/Electrician" > <PiArrowBendDownRightFill className='mt-1' />Doctor</NavLink> 
              <NavLink className="text-[20px] flex mt-3 border-2 w-[130px] border-gray-600" to="/Electrician" > <PiArrowBendDownRightFill className='mt-1' />Plumber</NavLink> 
              <NavLink className="text-[20px] flex mt-3 border-2 w-[130px] border-gray-600" to="/Electrician" > <PiArrowBendDownRightFill className='mt-1' />Parlour</NavLink> 
              <NavLink className="text-[20px] flex mt-3 border-2 w-[130px] border-gray-600" to="/Electrician" > <PiArrowBendDownRightFill className='mt-1' />Tailor</NavLink> 
            </div>
          }
        </div>

        <div className='text-[20px] flex mt-9 cursor-pointer'>
          <IoIosAnalytics className='ml-3 text-[35px]'/>
          <NavLink className="text-[20px] ml-5" to="/analytics" >Analytics</NavLink> 
        </div>

        <div className='text-[20px] flex mt-9 cursor-pointer'>
          <FaHandsHelping className='ml-3 text-[35px]'/>
          <NavLink className="text-[20px] ml-5" to="/analytics" >Help Center</NavLink> 
        </div>

        <div className="flex font-bold font-thin border-2  mt-[60px]" >
            <button onClick={ ()=> toggleMode(false) } className="ml-[50px] mr-[25px] text-[20px] flex" ><FaSun className='mr-[1px] mt-[6px]'/>Light</button>
            <button onClick={ ()=> toggleMode(true) } className="text-[20px] flex"><MdDarkMode className='mr-[1px] mt-[6px]' />Dark</button>
        </div>
    </div>
    
  )
}

export default Sidebar
