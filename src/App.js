import "./App.css";
import Sidebar from"./Sidebar" ;
import {Navbar} from "./components/Header.js" ;
import Home from"./Home" ;
import Electrician from "./Electrician";
import LoginUser from "./LoginUser";
import LoginService from "./LoginService";
import { useState } from "react";
import { NavLink, Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';   
import Footer from ".//components/Footer.js" ;
import { FaSearch } from 'react-icons/fa';
import ElectricianPage from "./components/ElectricianPage.js" ;
function App() {
  // let isSideBar = true ; 
  // let isDark = true ; 
  const [isSideBar, idSidebarThere] = useState(true);
  const [isDark, setDark] = useState(false);
  return (
    <div className="relative">
      <Navbar isSideBar = {isSideBar} idSidebarThere = {idSidebarThere} ></Navbar>   
        {
          isSideBar && 
          <Sidebar className=" fixed top-0 left-0 z-50" isDark = {isDark} setDark = {setDark}  isSideBar={isSideBar} idSidebarThere={idSidebarThere} > </Sidebar> 
        } 
     
     <div className="absolute top-0 left-0 -z-10  w-[100vw]">
          <Routes>   
          <Route path="/electrician" element={<Electrician/>} />
          <Route path="/loginUser" element={<LoginUser/>} />
          <Route path="/loginService" element={<LoginService/>} />
          <Route path="/electricianPage" element={<ElectricianPage/>} />
            <Route path="/dashboard" element={
              <div>
               <p className="bg-[red]">Dashboard Page</p>
             </div>
              } />

            <Route path="/" element={<Home isDark = {isDark} setDark = {setDark} className="" />} />
        
      </Routes>
      <Footer></Footer>
     </div>


    </div>
  );
}

export default App;
