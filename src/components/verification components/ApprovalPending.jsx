import React from 'react'
import { pendingCircle } from '../../assets'

const ApprovalPending = () => {
  return (
    <div className="w-[73%] flex flex-col gap-10 ">
      <div className=" flex flex-col gap-3 items-center">
        <img
          src={pendingCircle}
          className="border p-[0.875rem] rounded-xl border-[#FEF0C7] bg-[#FFFCF5]"
          alt=""
        />
        <h1 className=" font-semibold text-[30px] text-center"> Approval Pending</h1>
          <p className=" text-center text-[#475467]">
          You will gain full access to dashboard upon successful approval.
          </p>
        </div>
          <button className="border text-white text-[1rem] font-semibold rounded-lg bg-pry hover:bg-[#0A6C52] text-center py-[0.625rem] w-full">
          Go to Marketplace
          </button>
      </div>
  )
}

export default ApprovalPending