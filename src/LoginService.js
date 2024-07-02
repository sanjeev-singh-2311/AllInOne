import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { FcStumbleupon } from "react-icons/fc";
import { MdDashboard } from "react-icons/md";
import { NavLink, Route, Routes } from 'react-router-dom';
import {GoogleLogin} from 'react-google-login' ;
const clientId = "838583254313-j76r72ndaqp0gehucn28uuplrc1vk9tm.apps.googleusercontent.com" ;

    const onSuccess = (res) => {
    console. log('[Login Success] currentUser:', res.profile0bj);
    };
    
    const onFailure = (res) => {
    console. log( '[Login failed] res:', res);
    }




const LoginService = (props) => {
   
    const navigate = useNavigate();

    const [formData, setFormData] = useState( {
        email:"", password:""
    })

    const[showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {

        setFormData( (prevData) =>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ) )

    }

    function submitHandler(event) {
        event.preventDefault();
        toast.success("Logged In");
        console.log("Printing the formData ");
        console.log(formData)
        // navigate("/dashboard");
    }
  return (
    <div>
        <div className='flex'>
            <div className="h-[100vh] w-[50%]  bg-fill bg-no-repeat bg-[url('./images/Technology.jpg')] "> 
                <div className='flex'>
                    <FcStumbleupon className='ml-10 mt-10 text-[80px] text-white' />
                    <NavLink  className="text-[40px] ml-2 mt-11 text-white" to="/">AbesServices</NavLink>
                </div>

                <div className='mt-[70px] ml-12 text-[40px] text-white'>
                    Welcome to...
                    <br></br>
                    <div className='ml-1 mt-5 text-[25px] text-white'>
                        AbesServices . Place where you can find solution related to problems like appliances repair , installment , services related to water leaks , tap and many more.
                    </div>

                    <br></br>
                    <div className='ml-1 mt-5 text-[25px] text-white'>
                        Ready to Serve You and provide our best services .
                    </div>

                    <br></br>
                    <div className='ml-1 mt-5 text-[25px] text-white'>
                        Hope your experience will be pleasant .
                    </div>
                </div>
            </div>

            <div className='ml-[60px] mt-12'>
                <div className='text-[40px] text-blue-500'>
                    Login
                </div>

                <div className='text-25px text-gray-500'> 
                    Welcome! Login to get amazing discounts and offers only for you.
                </div>


            <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-6">

                <label className='w-full mt-8'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                        Email Address<sup className='text-pink-200'>*</sup>
                    </p>
                    <input 
                        required
                        type="email"
                        value = {formData.email}
                        onChange={changeHandler}
                        placeholder="Enter email address"
                        name="email"
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />
                </label>

                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                        Password<sup className='text-pink-200'>*</sup>
                    </p>
                    <input 
                        required
                        type= {showPassword ? ("text") : ("password")}
                        value = {formData.password}
                        onChange={changeHandler}
                        placeholder="Enter Password"
                        name="password"
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />

                    <span 
                    className='absolute right-3 top-[38px] cursor-pointer'
                    onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? 

                        (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 

                        (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>

                    
                </label>

                <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6 hover:bg-yellow-300'>
                    Sign In
                </button>

            </form>
                
            <button className='text-[15px] text-gray-400 mt-7 ml-[20rem]'>
                Forgot Your Password?
            </button>


            
            
            {/* npm install react-google-login --force */}
            <div>
            
                <GoogleLogin className='mt-8 h-[50px] w-[230px] '
                clientId={clientId}
                buttonText="Log In Using Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{ marginTop: '100px' }}
                isSignedIn={true}
                />
            </div>

            <div className='mt-8'>
            <div className='text-[20px] text-blue-500'>
                <span className='text-gray-400 mt'>New User?</span> Sign Up
            </div>
            
            </div>
            
        </div>
          
        </div>

    </div>
  )
}

export default LoginService
