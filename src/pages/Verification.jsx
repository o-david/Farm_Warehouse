import React from "react";
import { leftArrow, logoImg, verImg } from "../assets";
import { Link, Route, Routes } from "react-router-dom";
import VerificationRequired from "../components/verification/VerificationRequired";

const Verification = () => {

  return (
    <div className="flex h-[100vh]">
      <div className="w-[48.61%] flex items-center justify-center border bg-[#F5F0EC] p-[4rem]">
        <div
          className="h-full w-full bg-cover rounded-[2rem] font flex-col flex px-[8%] py-6 items-start justify-between"
          style={{ backgroundImage: `url(${verImg})` }}
        >
          <img src={logoImg} alt="" />
          <p className='text-[14px] font-light text-white font-["Inter"]'>
            © Farm warehouse 2024
          </p>
        </div>
      </div>
      <div className="px-[4rem] py-[3rem] border w-[51.39%]">
        <div className="border w-[78.51%] flex flex-col gap-[5vh]">
          <div className="flex justify-between">
            <div className="flex gap-1 cursor-pointer">
              <img src={leftArrow} alt="" />
              <p>Back home</p>
            </div>
            <p>
              Already have an account? <Link to={"/"}>Log in</Link>{" "}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Routes>
                <Route path="/" element= {<VerificationRequired/>}/>
                <Route path="" element/>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;
