import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from 'react'
import { useNavigate } from 'react-router-dom'
import HeroSection from "./components/HeroSection.js" 
import './Home.css'
const Home = (props) => {
    const { isDark, setDark } = props;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
    };
    
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    />
  );
}



function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray"  }}
      onClick={onClick}
    />
  );
}

const navigate = useNavigate();

function clickHandler() {
    //move to about page
    navigate("/electrician");
}

function clickHandlerElec() {
  //move to about page
  navigate("/electricianPage"); 
}
    
  return (
  
    <div className={`w-[100vw] p-1 ${isDark ? 'dark-mode' : 'light-mode' }`}>
        
        <HeroSection></HeroSection>

        <div className="mt-[30px] flex justify-center items-center mx-auto h-[350px] bg-[length:1300px_550px]  bg-center bg-no-repeat w-[1600px] bg-[url('./images/Electrician.png')] "> 
          <button className='h-[80px] w-[140px] bg-black text-white text-[30px] border-2 border-red-600 cursor-pointer' onClick={clickHandler} > Explore </button>
        </div>
       

        {/* <h1 className='mx-auto w-[1200px]'> this is a Electriczian</h1> */}


       <div className='mx-auto w-3/4 '>
          <div className='mt-[20px]'>
          <Slider {...settings}>
              {data.map((d) => (
                <div className='bg-white h-[400px] text-black rounded-xl' onClick={() => clickHandlerElec()} >
                  <div className=' bg-indigo-500 flex justify-center items-center h-56 '>
                   <img src= {d.img} alt="new" className='h-44 w-44' />
                  </div> 
                   <p  className="text-[27px] ml-4 font-bold"> {d.title }</p>
                   <p className="text-[18px] ml-5 font-bold"> {d.rating }</p>
                   <p className="text-[18px] ml-5 font-bold"> {d.price }</p>

                </div>
              ))}
            </Slider>
          </div>
       </div>
       
          
    </div>
    
  )
}

const data = [
  {
    img : `images/Electrician.png` ,
    
    title : `AC Repair (split / window` ,
    rating : `4.83 (200k)` ,
    price : `₹ 249`  

  } ,

  {
    img : `images/Electrician.png`,
    
    title : `Washing Machine Repair` ,
    rating : `4.7 (150k)` ,
    price : `₹ 199`  
  } ,
  
  {
    img : `images/Electrician.png` ,
    
    title : `TV Repair` ,
    rating : `4.9 (350k)` ,
    price : `₹ 249`  
  } ,

  {
    img : `images/Electrician.png` ,
    
    title : `Mixer Grinder Repair` ,
    rating : `4.4 (100k)` ,
    price : `₹ 149`  
  } ,

  {
    img :`images/Electrician.png`,
    
    title : `Fan Repair` ,
    rating : `4.7 (150k)` ,
    price : `₹ 149`  
  } 
]

export default Home


// npm install react-slick --save
// npm install slick-carousel --save