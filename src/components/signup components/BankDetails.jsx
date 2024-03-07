import React, { useEffect, useState } from "react";
import { nigerianBanks } from "../../data";
import Input from "../Input";

const BankDetails = ({ childPage }) => {
  const [hasSmartPhone, setHasSmartPhone] = useState(false);
  const [hasBankAccount, setHasBankAccount] = useState(false);

  useEffect(() => {
    childPage("bankDetails");
  }, []);
  return (
    <div className='lg:w-[63%] w-full px-1 h-full gap-6 flex flex-col'>
      <div className="text-[#344054] flex gap-2 flex-col">
        <h1 className=" font-bold text-[1.875rem]">Create Account</h1>
        <p className=" font-medium text-[1.125rem]">Bank Details</p>
      </div>
      <form className=" text-[#344054] text-[0.875rem] font-medium flex flex-col gap-8" action="">
        <div className="flex flex-col gap-2">
          <p>Do you have a Smartphone?</p>
          <div className="flex gap-5">
            <div onClick={()=> setHasSmartPhone(true)} className="flex gap-2 items-center">
              {hasSmartPhone?<div className=" bg-[#E7F5F1] w-4 h-4 rounded-full flex justify-center items-center border border-[#0D8A6A]"><div className="rounded bg-[#0D8A6A] w-[0.375rem] aspect-square"></div></div>:<div className=" w-4 h-4 rounded-full flex justify-center items-center border border-[#D0D5DD]"></div>}
              <label htmlFor="">Yes</label>
            </div>
            <div onClick={() =>setHasSmartPhone(false)} className="flex gap-2 items-center">
              {!hasSmartPhone?<div className=" bg-[#E7F5F1] w-4 h-4 rounded-full flex justify-center items-center border border-[#0D8A6A]"><div className="rounded bg-[#0D8A6A] w-[0.375rem] aspect-square"></div></div>:<div className=" w-4 h-4 rounded-full flex justify-center items-center border border-[#D0D5DD]"></div>}
              <label htmlFor="">No</label>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <p>Do you have a Bank Account?</p>
          <div className="flex gap-5">
            <div onClick={()=> setHasBankAccount(true)} className="flex gap-2 items-center">
              {hasBankAccount?<div className=" bg-[#E7F5F1] w-4 h-4 rounded-full flex justify-center items-center border border-[#0D8A6A]"><div className="rounded bg-[#0D8A6A] w-[0.375rem] aspect-square"></div></div>:<div className=" w-4 h-4 rounded-full flex justify-center items-center border border-[#D0D5DD]"></div>}
              <label htmlFor="">Yes</label>
            </div>
            <div onClick={() =>setHasBankAccount(false)} className="flex gap-2 items-center">
              {!hasBankAccount?<div className=" bg-[#E7F5F1] w-4 h-4 rounded-full flex justify-center items-center border border-[#0D8A6A]"><div className="rounded bg-[#0D8A6A] w-[0.375rem] aspect-square"></div></div>:<div className=" w-4 h-4 rounded-full flex justify-center items-center border border-[#D0D5DD]"></div>}
              <label htmlFor="">No</label>
            </div>
          </div>
        
        {hasBankAccount && 
        <div className="flex flex-col gap-6 px-1">
          <Input
          type={"dropdown"}
          label={"Bank Name"}
          options={nigerianBanks}
          placeholder={"Select your Bank"}
          required={true}
        />
        <Input
          type={"text"}
          label={"Personal Bank Account Number"}
          required={true}
          placeholder={"Enter your bank account number"}
        />
        </div>
        }
        </div>
        </div>
        <div className="flex justify-between">
          <button className="border w-[47.78%] py-[0.625rem] text-center rounded-lg">
            Back
          </button>
          <button className="bg-[#0D8A6A] border w-[47.78%] py-[0.625rem] disabled:bg-[#90D0BF] text-center rounded-lg text-white">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default BankDetails;
