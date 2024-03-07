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
    <div className='lg:w-[63%] w-full px-1 h-full gap-6 flex flex-col'>
        <div className='text-[#344054] flex gap-2 flex-col'>
            <h1 className=' font-bold text-[1.875rem]'>Create Account</h1>
            <p className=' font-medium text-[1.125rem]'>Security - Setup Fingerprint <span className=' italic font-normal'>(Optional)</span></p>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-4'>
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

          <div className='flex self-end rounded-lg  py-2 px-[0.875rem] border gap-2 font-normal text-[#344054]'>
          <img src={isChecked?CheckboxChecked:Checkboxbase} onClick={handleCheckboxChange} alt="" />
            <p>Skip for now</p>
          </div>

        </div>
        <div className='flex justify-between'>
          <button className='border w-[47.78%] py-[0.625rem] text-center rounded-lg'>Back</button>
          <button disabled={!isChecked} className='bg-[#0D8A6A] border w-[47.78%] py-[0.625rem] disabled:bg-[#90D0BF] text-center rounded-lg text-white'>Continue</button>
        </div>
    </div>
  )
}

export default Security