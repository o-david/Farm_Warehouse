import React, { useState } from 'react'
import { bankDetailsImg, farmRegImg, greenTick, leftArrow, logoImg, personalDetailsImg, securityDetailsImg } from '../assets'
import { Link, Route, Routes, useParams } from 'react-router-dom'
import PersonalDetails from '../components/signup components/PersonalDetails';
import BankDetails from '../components/signup components/BankDetails';
import Security from '../components/signup components/Security';
import FarmRegistration from '../components/signup components/FarmRegistration';

const SignUp = () => {
  const [regStage, setRegStage] = useState('');

  const handletopage = (data) => {
    setRegStage(data);
  };

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
    <div className="pl-[4rem] pt-[2.25rem] w-[51.39%] flex flex-col gap-14 h-full">
        <div className=" w-[78.51%] flex flex-col gap-[5vh]">
          <div className="flex justify-between text-[#475467] text-[14px] font-medium">
            <Link to={'/'} className="flex gap-1 cursor-pointer">
              <img src={leftArrow} alt="" />
              <p>Back home</p>
            </Link>
            <p className=" font-normal">
              Already have an account? <Link className=" font-semibold text-pry" to={"/login"}>Log in</Link>{" "}
            </p>
          </div>
        </div>
        <div className=' flex gap-14 items-start h-full overflow-clip p-2'>
          <div className='flex flex-col items-center'>
            {regStage == ''? <div className='w-6 aspect-square flex items-center justify-center shadow-[0_0_0_4px_#B4DFD4] rounded-full bg-[#E7F5F1] border border-[#0D8A6A]'><div className=' bg-[#0D8A6A] w-2 rounded-full aspect-square'></div></div> :<div className='w-6 aspect-square flex items-center justify-center rounded-full bg-[#E7F5F1] border border-[#0D8A6A]'><img src={greenTick} alt="" /></div>}
            {regStage == ''? <div className='bg-[#EAECF0] h-20 w-[0.125rem]'></div> :<div className='bg-[#0E9874] h-20 w-[0.125rem]'></div>}
            {regStage == ''? <div className='w-6 aspect-square flex items-center justify-center rounded-full border border-[#EAECF0]'><div className=' bg-[#EAECF0] w-2 rounded-full aspect-square'></div></div> :regStage == 'bankDetails'? <div className='w-6 aspect-square flex items-center justify-center shadow-[0_0_0_4px_#B4DFD4] rounded-full bg-[#E7F5F1] border border-[#0D8A6A]'><div className=' bg-[#0D8A6A] w-2 rounded-full aspect-square'></div></div> :<div className='w-6 aspect-square flex items-center justify-center rounded-full bg-[#E7F5F1] border border-[#0D8A6A]'><img src={greenTick} alt="" /></div>}
            {regStage == ''? <div className='bg-[#EAECF0] h-20 w-[0.125rem]'></div>:regStage == 'bankDetails'? <div className='bg-[#EAECF0] h-20 w-[0.125rem]'></div> :<div className='bg-[#0E9874] h-20 w-[0.125rem]'></div>}
            {regStage == 'security'? <div className='w-6 aspect-square flex items-center justify-center shadow-[0_0_0_4px_#B4DFD4] rounded-full bg-[#E7F5F1] border border-[#0D8A6A]'><div className=' bg-[#0D8A6A] w-2 rounded-full aspect-square'></div></div>  :regStage == 'farmRegistration'?<div className='w-6 aspect-square flex items-center justify-center rounded-full bg-[#E7F5F1] border border-[#0D8A6A]'><img src={greenTick} alt="" /></div>:<div className='w-6 aspect-square flex items-center justify-center rounded-full border border-[#EAECF0]'><div className=' bg-[#EAECF0] w-2 rounded-full aspect-square'></div></div>}
            {regStage == 'security'? <div className='bg-[#EAECF0] h-20 w-[0.125rem]'></div>:regStage != 'farmRegistration'? <div className='bg-[#EAECF0] h-20 w-[0.125rem]'></div> :<div className='bg-[#0E9874] h-20 w-[0.125rem]'></div>}
            {regStage != 'farmRegistration'? <div className='w-6 aspect-square flex items-center justify-center rounded-full border border-[#EAECF0]'><div className=' bg-[#EAECF0] w-2 rounded-full aspect-square'></div></div> : <div className='w-6 aspect-square flex items-center justify-center shadow-[0_0_0_4px_#B4DFD4] rounded-full bg-[#E7F5F1] border border-[#0D8A6A]'><div className=' bg-[#0D8A6A] w-2 rounded-full aspect-square'></div></div>}
          </div>
          <div className=' w-full h-full overflow-y-scroll  no-scrollbar '>
          <Routes>
                <Route path="/" element= {<PersonalDetails childPage={handletopage}/>}/>
                <Route path="/bankDetails" element= {<BankDetails childPage={handletopage}/>}/>
                <Route path="/security" element= {<Security childPage={handletopage}/>}/>
                <Route path="/farmRegistration" element= {<FarmRegistration childPage={handletopage}/>}/>
            </Routes>
          </div>

        </div>
      </div>
    </div>
      
      
)}

export default SignUp