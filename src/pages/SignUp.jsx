import React, { useState } from 'react'
import { bankDetailsImg, farmRegImg, greenTick, leftArrow, logoImg, personalDetailsImg, securityDetailsImg } from '../assets'
import { Link, Route, Routes } from 'react-router-dom'
import PersonalDetails from '../components/login components/PersonalDetails';
import BankDetails from '../components/login components/BankDetails';
import Security from '../components/login components/Security';
import FarmRegistration from '../components/login components/FarmRegistration';

const SignUp = () => {
  const [regStage, setRegStage] = useState('');

  return (
    <div className="flex h-[100vh]">
    <div className="w-[48.61%] flex items-center justify-center bg-[#F5F0EC] p-[4rem]">
      <div
        className="h-full w-full bg-cover rounded-[2rem] font flex-col flex px-[8%] py-6 items-start justify-between"
        style={{ backgroundImage: regStage==''?`url(${personalDetailsImg})`:regStage=='bankDetails'?`url(${bankDetailsImg})`:regStage=='security'?`url(${securityDetailsImg})`:`url(${farmRegImg})` }}
      >
        <img src={logoImg} alt="" />
        <p className='text-[14px] font-light text-white font-["Inter"]'>
          © Farm warehouse 2024
        </p>
      </div>
    </div>
    <div className="pl-[4rem] py-[2.25rem] w-[51.39%] flex flex-col gap-14">
        <div className=" w-[78.51%] flex flex-col gap-[5vh]">
          <div className="flex justify-between text-[#475467] text-[14px] font-medium">
            <div className="flex gap-1 cursor-pointer">
              <img src={leftArrow} alt="" />
              <p>Back home</p>
            </div>
            <p className=" font-normal">
              Already have an account? <Link className=" font-semibold text-pry" to={"/"}>Log in</Link>{" "}
            </p>
          </div>
        </div>
        <div className=' flex gap-14 '>
          <div className='flex flex-col items-center'>
            {regStage == ''? <div className='w-6 aspect-square flex items-center justify-center shadow-[0_0_0_4px_#B4DFD4] rounded-full bg-[#E7F5F1] border border-[#0D8A6A]'><div className=' bg-[#0D8A6A] w-2 rounded-full aspect-square'></div></div> :<div className='w-6 aspect-square flex items-center justify-center rounded-full bg-[#E7F5F1] border border-[#0D8A6A]'><img src={greenTick} alt="" /></div>}
            <div className='bg-[#EAECF0] h-20 w-[0.125rem]'></div>
            {regStage == ''? <div className='w-6 aspect-square flex items-center justify-center rounded-full border border-[#EAECF0]'><div className=' bg-[#EAECF0] w-2 rounded-full aspect-square'></div></div> :regStage == 'bankDetails'? <div className='w-6 aspect-square flex items-center justify-center shadow-[0_0_0_4px_#B4DFD4] rounded-full bg-[#E7F5F1] border border-[#0D8A6A]'><div className=' bg-[#0D8A6A] w-2 rounded-full aspect-square'></div></div> :<div className='w-6 aspect-square flex items-center justify-center rounded-full bg-[#E7F5F1] border border-[#0D8A6A]'><img src={greenTick} alt="" /></div>}
            <div className='bg-[#EAECF0] h-20 w-[0.125rem]'></div>
            {regStage == 'security'? <div className='w-6 aspect-square flex items-center justify-center shadow-[0_0_0_4px_#B4DFD4] rounded-full bg-[#E7F5F1] border border-[#0D8A6A]'><div className=' bg-[#0D8A6A] w-2 rounded-full aspect-square'></div></div>  :regStage == 'farmRegistration'?<div className='w-6 aspect-square flex items-center justify-center rounded-full bg-[#E7F5F1] border border-[#0D8A6A]'><img src={greenTick} alt="" /></div>:<div className='w-6 aspect-square flex items-center justify-center rounded-full border border-[#EAECF0]'><div className=' bg-[#EAECF0] w-2 rounded-full aspect-square'></div></div>}
            <div className='bg-[#EAECF0] h-20 w-[0.125rem]'></div>
            {regStage != 'farmRegistration'? <div className='w-6 aspect-square flex items-center justify-center rounded-full border border-[#EAECF0]'><div className=' bg-[#EAECF0] w-2 rounded-full aspect-square'></div></div> : <div className='w-6 aspect-square flex items-center justify-center shadow-[0_0_0_4px_#B4DFD4] rounded-full bg-[#E7F5F1] border border-[#0D8A6A]'><div className=' bg-[#0D8A6A] w-2 rounded-full aspect-square'></div></div>}
          </div>
          <div className=' w-full'>
          <Routes>
                <Route path="/" element= {<PersonalDetails/>}/>
                <Route path="/bankDetails" element= {<BankDetails/>}/>
                <Route path="/security" element= {<Security/>}/>
                <Route path="/farmRegistration" element= {<FarmRegistration/>}/>
            </Routes>
          </div>

        </div>
      </div>
    </div>
      
      
)}

export default SignUp