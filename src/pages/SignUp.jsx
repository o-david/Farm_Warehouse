import React, { useState } from 'react'
import { bankDetailsImg, darkLogo, farmRegImg, greenTick, leftArrow, logoImg, personalDetailsImg, securityDetailsImg } from '../assets'
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
    <div className="w-[48.61%] hidden lg:flex items-center justify-center bg-[#F5F0EC] p-[4rem]">
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
    <div className="lg:pl-[4rem] lg:py-[3rem] w-full lg:w-[51.39%] flex flex-col gap-4 lg:gap-14">
        <div className=" lg:w-[78.51%] w-full flex flex-col gap-[5vh]">
        <div className="lg:flex hidden justify-between text-[#475467] text-[14px] font-medium">
            <Link to={'/'} className="flex gap-1 cursor-pointer">
              <img src={leftArrow} alt="" />
              <p>Back home</p>
            </Link>
            <p className=" font-normal">
              Already have an account? <Link className=" font-semibold text-pry" to={"/login"}>Log in</Link>{" "}
            </p>
          </div>
          <div className="flex items-center lg:hidden p-4 justify-between text-[#475467] text-[14px] font-medium shadow ">
            <Link to={"/"} className="flex gap-1 cursor-pointer">
              <img src={darkLogo} alt="" />
            </Link>
            <Link to={"/"} className=" font-normal items-center flex gap-1">
              <span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.81859 1.30345C9.52582 1.07574 9.37943 0.961888 9.21779 0.918123C9.07516 0.879506 8.92484 0.879506 8.78221 0.918123C8.62057 0.961888 8.47418 1.07574 8.18141 1.30345L2.52949 5.69939C2.15168 5.99324 1.96278 6.14017 1.82669 6.32417C1.70614 6.48716 1.61633 6.67077 1.56169 6.866C1.5 7.08639 1.5 7.3257 1.5 7.80433V13.8334C1.5 14.7669 1.5 15.2336 1.68166 15.5901C1.84144 15.9037 2.09641 16.1587 2.41002 16.3185C2.76654 16.5001 3.23325 16.5001 4.16667 16.5001H5.83333C6.06669 16.5001 6.18337 16.5001 6.2725 16.4547C6.3509 16.4147 6.41464 16.351 6.45459 16.2726C6.5 16.1835 6.5 16.0668 6.5 15.8334V10.3334C6.5 9.86673 6.5 9.63338 6.59083 9.45512C6.67072 9.29831 6.79821 9.17083 6.95501 9.09094C7.13327 9.00011 7.36662 9.00011 7.83333 9.00011H10.1667C10.6334 9.00011 10.8667 9.00011 11.045 9.09094C11.2018 9.17083 11.3293 9.29831 11.4092 9.45512C11.5 9.63338 11.5 9.86673 11.5 10.3334V15.8334C11.5 16.0668 11.5 16.1835 11.5454 16.2726C11.5854 16.351 11.6491 16.4147 11.7275 16.4547C11.8166 16.5001 11.9333 16.5001 12.1667 16.5001H13.8333C14.7668 16.5001 15.2335 16.5001 15.59 16.3185C15.9036 16.1587 16.1586 15.9037 16.3183 15.5901C16.5 15.2336 16.5 14.7669 16.5 13.8334V7.80433C16.5 7.3257 16.5 7.08639 16.4383 6.866C16.3837 6.67077 16.2939 6.48716 16.1733 6.32417C16.0372 6.14017 15.8483 5.99324 15.4705 5.69939L9.81859 1.30345Z"
                    stroke="#475467"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span>Back home</span>
            </Link>
          </div>
        </div>
        <div className=' flex flex-col lg:flex-row gap-6 lg:gap-14 items-center lg:items-start h-full overflow-clip lg:p-2 '>
          <div className='flex flex-row lg:flex-col items-center p-1'>
            {regStage == ''? <div className='w-6 aspect-square flex items-center justify-center shadow-[0_0_0_4px_#B4DFD4] rounded-full bg-[#E7F5F1] border border-[#0D8A6A]'><div className=' bg-[#0D8A6A] w-2 rounded-full aspect-square'></div></div> :<div className='w-6 aspect-square flex items-center justify-center rounded-full bg-[#E7F5F1] border border-[#0D8A6A]'><img src={greenTick} alt="" /></div>}
            {regStage == ''? <div className='bg-[#EAECF0] lg:h-20 w-[35px] h-[1.5px]  lg:w-[0.125rem]'></div> :<div className='bg-[#0E9874] lg:h-20 w-[35px] h-[1.5px]  lg:w-[0.125rem]'></div>}
            {regStage == ''? <div className='w-6 aspect-square flex items-center justify-center rounded-full border border-[#EAECF0]'><div className=' bg-[#EAECF0] w-2 rounded-full aspect-square'></div></div> :regStage == 'bankDetails'? <div className='w-6 aspect-square flex items-center justify-center shadow-[0_0_0_4px_#B4DFD4] rounded-full bg-[#E7F5F1] border border-[#0D8A6A]'><div className=' bg-[#0D8A6A] w-2 rounded-full aspect-square'></div></div> :<div className='w-6 aspect-square flex items-center justify-center rounded-full bg-[#E7F5F1] border border-[#0D8A6A]'><img src={greenTick} alt="" /></div>}
            {regStage == ''? <div className='bg-[#EAECF0] lg:h-20 w-[35px] h-[1.5px]  lg:w-[0.125rem]'></div>:regStage == 'bankDetails'? <div className='bg-[#EAECF0] lg:h-20 w-[35px] h-[1.5px]  lg:w-[0.125rem]'></div> :<div className='bg-[#0E9874] lg:h-20 w-[35px] h-[1.5px]  lg:w-[0.125rem]'></div>}
            {regStage == 'security'? <div className='w-6 aspect-square flex items-center justify-center shadow-[0_0_0_4px_#B4DFD4] rounded-full bg-[#E7F5F1] border border-[#0D8A6A]'><div className=' bg-[#0D8A6A] w-2 rounded-full aspect-square'></div></div>  :regStage == 'farmRegistration'?<div className='w-6 aspect-square flex items-center justify-center rounded-full bg-[#E7F5F1] border border-[#0D8A6A]'><img src={greenTick} alt="" /></div>:<div className='w-6 aspect-square flex items-center justify-center rounded-full border border-[#EAECF0]'><div className=' bg-[#EAECF0] w-2 rounded-full aspect-square'></div></div>}
            {regStage == 'security'? <div className='bg-[#EAECF0] lg:h-20 w-[35px] h-[1.5px]  lg:w-[0.125rem]'></div>:regStage != 'farmRegistration'? <div className='bg-[#EAECF0] lg:h-20 w-[35px] h-[1.5px]  lg:w-[0.125rem]'></div> :<div className='bg-[#0E9874] lg:h-20 w-[35px] h-[1.5px]  lg:w-[0.125rem]'></div>}
            {regStage != 'farmRegistration'? <div className='w-6 aspect-square flex items-center justify-center rounded-full border border-[#EAECF0]'><div className=' bg-[#EAECF0] w-2 rounded-full aspect-square'></div></div> : <div className='w-6 aspect-square flex items-center justify-center shadow-[0_0_0_4px_#B4DFD4] rounded-full bg-[#E7F5F1] border border-[#0D8A6A]'><div className=' bg-[#0D8A6A] w-2 rounded-full aspect-square'></div></div>}
          </div>
          <div className=' w-[91.47%] lg:w-full h-full overflow-y-scroll  no-scrollbar '>
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