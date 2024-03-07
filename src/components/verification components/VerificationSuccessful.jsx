import React from "react";
import { checkCircle } from "../../assets";
import { useNavigate } from "react-router-dom";

const VerificationSuccessful = () => {
  const navigate = useNavigate();

  const handleDashboardBtn = () => {
    navigate("../pending/332")
  }
  
  return (
    <div className="lg:w-[73%] w-[91.47%] flex flex-col gap-6 lg:gap-10 ">
    <div className=" flex flex-col gap-3 items-center">
        <img
          src={checkCircle}
          className="border lg:p-[0.875rem] p-[0.625rem] rounded-xl border-[#DCFAE6] bg-[#F6FEF9]"
          alt=""
        />
        <div className="flex flex-col gap-3">
        <h1 className=" font-semibold lg:text-[1.875rem] text-[1.25rem] text-center"> Verification Successful</h1>
          <p className=" text-center text-[#475467] text-[0.875rem] lg:text-[1rem]">
            Your account has been verified, you can now proceed to your
            dashboard.
          </p>
        </div>
          <button onClick={handleDashboardBtn} className="border text-white text-[1rem] font-semibold rounded-lg bg-pry hover:bg-[#0A6C52] text-center py-[0.625rem] w-full">
            Go to Dashboard
          </button>
      </div>
      <div className="flex flex-col gap-3">
        <p className=" text-center text-[#475467] text-[0.875rem] lg:text-[1rem]">
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
