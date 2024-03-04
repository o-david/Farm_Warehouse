import React from "react";
import { checkCircle } from "../../assets";

const VerificationSuccessful = () => {
  return (
    <div className="w-[73%] flex flex-col gap-10 ">
      <div className=" flex flex-col gap-3 items-center">
        <img
          src={checkCircle}
          className="border p-[0.875rem] rounded-xl border-[#DCFAE6] bg-[#F6FEF9]"
          alt=""
        />
        <div className="flex flex-col gap-3">
        <h1 className=" font-semibold text-[30px] text-center"> Verification Successful</h1>
          <p className=" text-center text-[#475467]">
            Your account has been verified, you can now proceed to your
            dashboard.
          </p>
        </div>
          <button className="border text-white text-[1rem] font-semibold rounded-lg bg-pry hover:bg-[#0A6C52] text-center py-[0.625rem] w-full">
            Go to Dashboard
          </button>
      </div>
      <div className="flex flex-col gap-3">
        <p className=" text-center text-[#475467]">
          You can explore different products in FWH Marketplace
        </p>
        <button className="border text-black rounded-lg bg-white text-[1rem] font-semibold text-center py-[0.625rem] w-full">
          Go to Marketplace
        </button>
      </div>
    </div>
  );
};

export default VerificationSuccessful;
