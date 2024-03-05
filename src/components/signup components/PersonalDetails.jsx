import React, { useEffect } from 'react'

const PersonalDetails = ({childPage}) => {
  useEffect(() => {
    childPage('')
  }, [])
  return (
    <div className='w-[63%] overflow-y-scroll no-scrollbar border h-full'>
        <div className='text-[#344054]'>
            <h1 className=' font-bold text-[1.875rem]'>Create Account</h1>
            <p className=' font-medium text-[1.125rem]'>Personal Information</p>
        </div>
        <form action="">
            <div className='flex gap-[0.375rem]'>
            <div className="flex flex-col gap-2">
                  <p className=" font-medium text-[0.875rem] text-[#344054]">First Name<sup>*</sup></p>
                  <div className={`border border-[#D0D5DD] rounded-lg py-2 px-3 flex gap-1`}>
                    <input
                      type="text"
                      className="text-[1rem] w-full outline-none text-[#101828]"
                      placeholder="Enter first name"
                    />
                  </div>
                  
                </div>   
            <div className="flex flex-col gap-2">
                  <p className=" font-medium text-[0.875rem] text-[#344054]">Last Name<sup>*</sup></p>
                  <div className={`border border-[#D0D5DD] rounded-lg py-2 px-3 flex gap-1`}>
                    <input
                      type="text"
                      className="text-[1rem] w-full outline-none text-[#101828]"
                      placeholder="Enter last name"
                    />
                  </div>
                  
                </div>   
            </div>
            <div className="flex flex-col gap-2">
                  <p className=" font-medium text-[0.875rem] text-[#344054]">Phone number<sup>*</sup></p>
                  <div className={`border border-[#D0D5DD] rounded-lg py-2 px-3 flex gap-1`}>
                    <input
                      type="text"
                      className="text-[1rem] w-full outline-none text-[#101828]"
                      placeholder="Enter last name"
                    />
                  </div>
                  
                </div>   
            

        </form>
    </div>
  )
}

export default PersonalDetails