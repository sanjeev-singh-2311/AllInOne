import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'

export const Navbar = (props) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const {isSideBar ,idSidebarThere } = props ;
  
  const sideButton = () => {
    idSidebarThere(!isSideBar) ;
  } ;

  const navigate = useNavigate();

function clickHandlerLogin() {
    //move to about page
    navigate("/loginService");
}

function clickHandlerUser() {
  //move to about page
  navigate("/loginUser");
}
function clickHandlerHome() {
  //move to about page
  navigate("/");
}

  return (
    <div>

      <nav className='bg-teal-300 py-4 flex justify-between items-center'>
        <div className='flex items-center space-x-4'>
          <FontAwesomeIcon icon={faBars} className='icon text-2xl ml-2 mt-1' onClick={() => sideButton()}/>
          <div>Logo</div>
        </div>
        <div className='flex justify-end space-x-12 ml-64 mt-2'>
          <div className='flex items-center space-x-8'>
            <button className='mb-1 hover:text-blue-500 transition duration-500 ease-in-out' onClick={()=> clickHandlerHome()}>Home</button>
            <div className='flex flex-col space-y-0.5'>
              <div className='w-1 h-1 bg-white rounded-full'></div>
              <div className='w-1 h-1 bg-white rounded-full'></div>
              <div className='w-1 h-1 bg-white rounded-full'></div>
            </div>
          </div>
          <div className='flex items-center space-x-8'>
            <button className='mb-1 hover:text-blue-500 transition duration-500 ease-in-out'>About us</button>
            <div className='flex flex-col space-y-0.5'>
              <div className='w-1 h-1 bg-white rounded-full'></div>
              <div className='w-1 h-1 bg-white rounded-full'></div>
              <div className='w-1 h-1 bg-white rounded-full'></div>
            </div>
          </div>
          <div className='flex items-center space-x-8'>
            <button className='mb-1 hover:text-blue-500 transition duration-500 ease-in-out'>Policies</button>
            <div className='flex flex-col space-y-0.5'>
              <div className='w-1 h-1 bg-white rounded-full'></div>
              <div className='w-1 h-1 bg-white rounded-full'></div>
              <div className='w-1 h-1 bg-white rounded-full'></div>
            </div>
          </div>
          <div className='flex items-center space-x-8'>
            <button className='mb-1 hover:text-blue-500 transition duration-500 ease-in-out'>Categories</button>
            <div className='flex flex-col space-y-0.5'>
              <div className='w-1 h-1 bg-white rounded-full'></div>
              <div className='w-1 h-1 bg-white rounded-full'></div>
              <div className='w-1 h-1 bg-white rounded-full'></div>
            </div>
          </div>
          <div className='flex items-center space-x-8'>
            <button className='mb-1 hover:text-blue-500 transition duration-500 ease-in-out'>Marketplace</button>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <div className='relative w-48'>
            {isSearchVisible && <input type="text" className="transition-all duration-700 ease-in-out w-full pl-2 rounded-full absolute right-0 top-0 -mt-2" />}
            <FaSearch onClick={() => setIsSearchVisible(!isSearchVisible)} className='absolute right-0 top-0 -mt-1 mr-2 cursor-pointer' />

          </div>
          <button class="bg-blue-100 hover:bg-blue-700 text-black font-bold py-2 px-5 rounded-full transition duration-500 ease-in-out" onClick={() => clickHandlerLogin()} >
            Sign in
          </button>
          <button class="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full mx-1 transition duration-500 ease-in-out" onClick={() => clickHandlerUser()}>
            Sign up
          </button>
        </div>
      </nav>
    </div>
  );
}
