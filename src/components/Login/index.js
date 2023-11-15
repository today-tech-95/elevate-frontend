/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState,useEffect} from "react";
import ElevateLogoText from "./../../assets/Elevatelogo.svg";
import ElevateLogoImage from "./../../assets/logoImage.png";
import GoogleIcon from "./../../assets/googleIcon.png";
import { NavLink,useNavigate } from "react-router-dom";
import {toast} from "react-toastify"
import { SyncOutlined,EyeOutlined,EyeInvisibleOutlined} from '@ant-design/icons';
import axios from "axios"
import { useCookies } from 'react-cookie';

const Login = () => {
  const navigate =  useNavigate()
  const [cookies, setCookie] = useCookies(['user']);
  const [loading,setLoading]  = useState(false)
  const [showPassword,setShowPassword] = useState(false)
  const [formValues, setFormValues] = useState({
    email: "",
    password:"",
  });

  const handleLogin = async(event)=>{

    try {
      event.preventDefault()
      setLoading(true)
      const {data} =  await axios({
        url:"https://elevate-backend.vercel.app/api/v1/elevate/user/login",
        method:"POST",
         data:{
          ...formValues
         }
      })

      toast.success(data.message)
      setLoading(false)
      setCookie('user',data?.data)
      if(data?.data?.user?.role.toLowerCase()==="mentee"){
        navigate('/mentee')
      }else if(data?.data?.user?.role.toLowerCase()==="mentor"){
        navigate('/mentor')
      }
    } catch (err) {
      toast.error("Error: " + err.message)
      console.log(err)
      setLoading(false)
    }
  }

  const getNewYear = () => {
    return new Date().getFullYear();
  };

  const handleShowPassword = ()=>{
    setShowPassword((prev)=>!prev)
  }
  
 
  // useEffect(()=>{
  
  // },[cookies?.user?.user?.role])

  return (
    <div className="flex items-center min-h-screen bg-gray-50">
      <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
        <div className="flex flex-col md:flex-row">
          <div className="flex items-center justify-center p-6 md:w-1/2">
            <div className="w-full">
              <div className="flex justify-start -mt-3">
                <span>
                  <img src={ElevateLogoText} alt="" />
                </span>
              </div>
              <h1 className="mb-4 mt-5 text-2xl font-bold text-gray-700">
                Sign in
              </h1>
              <p className="mb-4 text-sm">
                Level up your career journey by joining our elevate community,
                where mentors are ready to help you soar to new heights!
              </p>
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    placeholder="Email"
                    value={formValues.email}
                    onChange={(event) =>
                      setFormValues({
                        ...formValues,
                        email: event.target.value,
                      })
                    }
                  />
                </div>

                <div className="mb-3 relative">
                { showPassword?
                  <span className="absolute top-1 right-1 cursor-pointer" onClick={handleShowPassword}><EyeOutlined/></span>:
                  <span className="absolute top-1 right-1 cursor-pointer" onClick={handleShowPassword}><EyeInvisibleOutlined/></span>
                }
                
                  <input
                    required
                    className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    placeholder="password"
                    type={showPassword?"text":"password"}
                    value={formValues.password}
                    onChange={(event) =>
                      setFormValues({
                        ...formValues,
                        password: event.target.value,
                      })
                    }
                  />
                </div>

                <p className="mt-4">
                  <a
                    className="text-sm text-blue-600 hover:underline"
                    href="./forgot-password.html"
                  >
                    Forgot your password?
                  </a>
                </p>

                <button
                  className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-[#2467F6] border border-transparent rounded-lg active:bg-[#2467F6] hover:bg-[#2467F6] focus:outline-none focus:shadow-outline-blue"
                  type="submit"
                >
                 {loading? <SyncOutlined spin/>: "Continue with email"}
                </button>
              </form>

              <div className="inline-flex items-center justify-center w-full">
                <hr className="w-64 h-px  bg-gray-200 border-0 dark:bg-gray-700" />
                <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white  ">
                  or
                </span>
              </div>

              <div className="flex items-center justify-center gap-4">
                <button
                  className="flex justify-center items-center gap-4 w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-[#1C1F23] border border-transparent rounded-lg active:bg-[#1C1F23] hover:bg-[#1C1F23] focus:outline-none"
                  href="#"
                >
                  <img src={GoogleIcon} alt="" /> Continue with email
                </button>
              </div>
              <p className="mt-2">
                {" "}
                Don't have an account ?{" "}
                <NavLink to="/signup" className="text-[#2467F6]">
                  Sign Up
                </NavLink>
              </p>
              <p className="text-sm mt-4">
                By proceeding, you acknowledge and accept the{" "}
                <a href="#." className="underline">
                  Terms of Use, Privacy Policy,
                </a>{" "}
                and{" "}
                <a href="#." className="underline">
                  Community Standards
                </a>{" "}
                of Elevate.
              </p>
              <p className="mt-2">&copy; elevate {getNewYear()}</p>
            </div>
          </div>

          <div className="hidden h-32 md:h-auto md:w-1/2 login-left-side relative md:block">
            <div className="absolute top-1/4 left-1/4">
              <img src={ElevateLogoImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
