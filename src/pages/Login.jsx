import React, { useState } from "react";
import {
  CheckboxChecked,
  Checkboxbase,
  alertCircle,
  infoCircle,
  leftArrow,
  loginImg,
  logoImg,
  passwordImg,
  pendingCircle,
  thumbImg,
  verImg,
} from "../assets";
import { Link, Route, Routes } from "react-router-dom";

const Login = () => {
  const [emailError, setEmailError] = useState(
    "This phone number is not verified. Log in with email instead."
  );
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="flex h-[100vh]">
      <div className="w-[48.61%] flex items-center justify-center border bg-[#F5F0EC] p-[4rem]">
        <div
          className="h-full w-full bg-cover rounded-[2rem] font flex-col flex px-[8%] py-6 items-start justify-between"
          style={{ backgroundImage: `url(${loginImg})` }}
        >
          <img src={logoImg} alt="" />
          <p className='text-[14px] font-light text-white font-["Inter"]'>
            © Farm warehouse 2024
          </p>
        </div>
      </div>
      <div className="pl-[4rem] py-[3rem] border w-[51.39%]">
        <div className=" w-[78.51%] flex flex-col gap-[5vh]">
          <div className="flex justify-between text-[#475467] text-[14px] font-medium">
            <div className="flex gap-1 cursor-pointer">
              <img src={leftArrow} alt="" />
              <p>Back home</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[73%] flex flex-col gap-10 ">
              <div className=" flex flex-col gap-3 items-center">
                <h1 className=" font-semibold text-[30px] text-left w-full">
                  Welcome back!
                </h1>
                <p className=" text-left w-full text-[#475467]">
                  Welcome back! Please enter your details.
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <p className=" font-medium text-[0.875rem] text-[#344054]">
                    Email address / Phone number
                  </p>
                  <div
                    className={`border ${
                      emailError ? "border-[#FDA29B]" : "border-[#D0D5DD]"
                    } rounded-lg py-2 px-3 flex gap-1`}
                  >
                    <input
                      type="text"
                      className="text-[1rem] w-full outline-none text-[#101828]"
                      placeholder="Enter email or Phone number"
                    />
                    {emailError && <img src={alertCircle} />}
                  </div>
                  {emailError ? (
                    <p className="text-[#F04438] text-[0.875rem]">
                      {emailError}
                    </p>
                  ) : (
                    <p className="text-[0.75rem] text-[#475467] font-normal">
                      Phone number must have country code. E.g. +234.
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2 justify-between items-end">
                    <div className="w-[81.67%] flex flex-col gap-2">
                      <p className=" font-medium text-[0.875rem] text-[#344054]">
                        Password
                      </p>
                      <div
                        className={`border ${
                          passwordError
                            ? "border-[#FDA29B]"
                            : "border-[#D0D5DD]"
                        } rounded-lg py-2 px-3 flex gap-1`}
                      >
                        <input
                          type={showPassword ? "text" : "password"}
                          className="text-[1rem] w-full outline-none text-[#101828]"
                          placeholder="Enter password"
                        />
                        {passwordError ? (
                          <img src={alertCircle} />
                        ) : (
                          <img
                            onClick={handleTogglePassword}
                            className=" cursor-pointer"
                            src={passwordImg}
                          />
                        )}
                      </div>
                    </div>
                    <div className="rounded-full bg-[#F6FFFC] border border-[#E7F5F1] p-2">
                      <img src={thumbImg} className=" self-end" alt="" />
                    </div>
                  </div>
                  {passwordError && (
                    <p className="text-[#F04438] text-[0.875rem]">
                      {passwordError}
                    </p>
                  )}
                </div>
                <div className="flex justify-between text-[#344054] text-[0.875rem] font-medium">
                  <div className="flex gap-1">
                    <img src={isChecked?CheckboxChecked:Checkboxbase} onClick={handleCheckboxChange} alt="" />
                  <span className="">Remember for 30 days</span>
                  </div>
                  <span className="text-[#0A6C52] font-semibold">
                    Forgot password
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-6 items-center">
                <button className="border text-white text-[1rem] font-semibold rounded-lg bg-pry hover:bg-[#0A6C52] text-center py-[0.625rem] w-full">
                  Go to Marketplace
                </button>
                <p className="text-[0.875rem] text-[#475467] font-normal">
                  Don’t have an account?{" "}
                  <Link to={"/signUp"} className="text-[#0A6C52] font-semibold">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
