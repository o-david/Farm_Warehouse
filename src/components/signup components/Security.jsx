import React, { useEffect, useState } from 'react'
import { CheckboxChecked, Checkboxbase, alertCircle, index, thumb, thumbImg } from '../../assets'

const Security = ({childPage}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  useEffect(() => {
    childPage('security')
  }, [])
  return (
    <div className='w-[63%] overflow-y-scroll no-scrollbar border h-full'>
        <div className='text-[#344054]'>
            <h1 className=' font-bold text-[1.875rem]'>Create Account</h1>
            <p className=' font-medium text-[1.125rem]'>Security - Setup Fingerprint <span className=' italic font-normal'>(Optional)</span></p>
        </div>
        <div className='flex flex-col'>
          <div>
            <p>Capture Fingerprint (Your L-R Index fingers)</p>
            <div className=' flex text-[0.875rem] text-[#344054] font-normal justify-between w-[95.5%]'>
              <div className=' flex flex-col items-center'>
                <div className='p-1 rounded-full border bg-[#F6FFFC] border-[#E7F5F1]'>
                  <img src={thumb} alt="" />
                </div>
                <p>Left thumb</p>
              </div>
              <div className=' flex flex-col items-center'>
                <div className='p-1 rounded-full border bg-[#F6FFFC] border-[#E7F5F1]'>
                  <img src={index} alt="" />
                </div>
                <p>Left Index</p>
              </div>
              <div className=' flex flex-col items-center'>
                <div className='p-1 rounded-full border bg-[#F6FFFC] border-[#E7F5F1]'>
                  <img src={thumb} alt="" />
                </div>
                <p>Right thumb</p>
              </div>
              <div className=' flex flex-col items-center'>
                <div className='p-1 rounded-full border bg-[#F6FFFC] border-[#E7F5F1]'>
                  <img src={index} alt="" />
                </div>
                <p>Right Index</p>
              </div>
            </div>
          </div>
          <div className='bg-[#FFFCF5] p-2 gap-1 rounded-lg text-[#B54708] text-[0.75rem] flex items-start border-[#FEF0C7] border '>
            <img src={alertCircle} alt="" />
            <p>Place your finger on the fingerprint scanner to capture your fingerprint. Ensure your finger covers the entire scanner.</p>
          </div>

          <div className='flex self-end rounded-lg  py-2 px-[0.875rem] border'>
          <img src={isChecked?CheckboxChecked:Checkboxbase} onClick={handleCheckboxChange} alt="" />
            <p>Skip for now</p>
          </div>

        </div>
        <div className='flex justify-between'>
          <span className='border w-[47.78%] py-[0.625rem] text-center rounded-lg'>Back</span>
          <span className='bg-[#0D8A6A] border w-[47.78%] py-[0.625rem] text-center rounded-lg text-white'>Continue</span>
        </div>
    </div>
  )
}

export default Security