import React, { useEffect, useRef, useState } from "react";
import { infoCircle } from "../../assets";
const VerificationRequired = () => {
    const [digits, setDigits] = useState(["", "", "", "", ""]);
  const [timer, setTimer] = useState(10); // 5 minutes in seconds
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const inputRefs = useRef([]);


  const handleInputChange = (index, value) => {
    // Ensure input is a single digit and update the corresponding index
    if (/^\d$/.test(value) || value === "") {
      const newDigits = [...digits];
      newDigits[index] = value;
      setDigits(newDigits);
    }
    if (index < 4 && value !== "") {
      inputRefs.current[index + 1].focus();
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
    setTimer(10); // Reset the timer to 5 minutes
    setIsResendDisabled(true);
    // Add logic to resend verification code
  };
    return (
    <div className="w-3/5 flex flex-col items-center">
              <img src={infoCircle} className="border p-2 rounded" alt="" />
              <h1>Verification required</h1>
              <p className=" text-center">
                A 5 digit verification code has been sent to
                <br /> +2348136801222
              </p>
              <div>
                <p>Enter code</p>
                <div className="flex justify-between">
                  {digits.map((digit, index) => (
                    <input
                      className="w-[18%] border aspect-square text-center"
                      key={index}
                      type="text"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                      ref={(ref) => (inputRefs.current[index] = ref)}
                    />
                  ))}
                </div>
                <button disabled={!isAllFieldsFilled} className="border text-white rounded bg-green-700 text-center py-1 w-full disabled:bg-[#90D0BF]">Continue</button>
                <div>
                    <span>Didn’t receive the code?</span>
                    {isResendDisabled?<span>Resend in {`(${Math.floor(timer / 60)}:${timer % 60})`}</span>:<span onClick={handleResendClick} className="cursor-pointer">Click to resend</span>}
                </div>
              </div>
            </div>
  )
}

export default VerificationRequired