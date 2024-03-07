import React, { useEffect, useRef, useState } from "react";
import { infoCircle } from "../../assets";
const VerificationRequired = () => {
  const [digits, setDigits] = useState(["", "", "", "", ""]);
  const [timer, setTimer] = useState(120);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const inputRefs = useRef([]);


  const handleInputChange = (index, value) => {
    if (/^\d$/.test(value) || value === "") {
      const newDigits = [...digits];
      newDigits[index] = value;
      setDigits(newDigits);
      if (index < 4 && value !== "") {
        inputRefs.current[index + 1].focus();
      }
    }
  }
  useEffect(() => {
    let interval;
    
    if (timer > 0 && isResendDisabled) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      clearInterval(interval);
      setIsResendDisabled(false);
    }

    return () => clearInterval(interval);
}, [digits,timer, isResendDisabled]);

const isAllFieldsFilled = digits.every((digit) => digit !== '');
  const handleResendClick = () => {
    setTimer(120); 
    setIsResendDisabled(true);
  };
    return (
      <div className="lg:w-[73%] w-[91.47%] flex flex-col gap-6 lg:gap-10 ">
            <div className=" flex flex-col gap-3 items-center">

      <img src={infoCircle} className="border border-[#EAECF0] p-[0.875rem] rounded-xl" alt="" />
              
              <h1 className=" font-semibold text-[30px] text-center">Verification required</h1>
              <p className=" text-center text-[#475467]">
                A 5 digit verification code has been sent to
                <br /> <span className=" font-semibold"> +2348136801222</span>
              </p>
              </div>
              <form action="" className="flex flex-col gap-10 ">
              <div className="flex flex-col gap-4">
                <p className=" text-center font-bold text-[#475467]">Enter code</p>
                <div className="flex justify-between">
                  {digits.map((digit, index) => (
                    <input
                      className="w-[15.56%] border focus:border-[#5EBAA2] outline-none focus:shadow-[0_0_0_4px_#E7F5F1] rounded-lg aspect-square text-center"
                      key={index}
                      type="text"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                      ref={(ref) => (inputRefs.current[index] = ref)}
                    />
                  ))}
                </div>
              </div>
                <button disabled={!isAllFieldsFilled} className="border text-white text-[1rem] font-semibold rounded-lg bg-pry hover:bg-[#0A6C52] text-center py-[0.625rem] w-full disabled:bg-[#90D0BF]">Continue</button>
                </form>
                <div className="flex gap-1">
                    <span className="text-[0.875rem] font-normal text-[#475467]">Didn’t receive the code?</span>
                    {isResendDisabled?<span className="text-[0.875rem] font-semibold text-[#344054]">Resend in <span className="text-[#EF4444]">{`${Math.floor(timer / 60)}:${timer % 60}`}</span></span>:<span onClick={handleResendClick} className="cursor-pointer font-semibold text-[0.875rem] text-[#D0D5DD]">Click to resend</span>}
                </div>
            </div>
  )
}

export default VerificationRequired