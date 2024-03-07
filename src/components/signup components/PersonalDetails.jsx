import React, { useEffect, useState } from "react";
import Input from "../Input";
import { abujaCities, nigerianBanks } from "../../data";
import { alertCircle, passwordImg } from "../../assets";
import { useNavigate } from "react-router-dom";

const PersonalDetails = ({ childPage }) => {
  const navigate =useNavigate()
  const [file, setFile] = useState(null);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [password, setPassword] = useState("");
  const [isMatch, setIsMatch] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordLengthValid, setPasswordLengthValid] = useState(false);
  const [passwordSpecialCharValid, setPasswordSpecialCharValid] =
    useState(false);
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    setImage(event.target.files[0]);
  };
  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };
  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const passwordRequirements = {
    length: 8,
    specialChar: /[!@#$%^&*(),.?":{}|<>]/,
  };
  const validatePasswordLength = (password) =>
    password.length >= passwordRequirements.length;
  const validatePasswordSpecialChar = (password) =>
    passwordRequirements.specialChar.test(password);
  const handlePasswordChange = (event) => {
    const password = event.target.value;
    setPassword(password);
    setPasswordLengthValid(validatePasswordLength(password));
    setPasswordSpecialCharValid(validatePasswordSpecialChar(password));
  };
  const handlePasswordBlur = (event) => {
    const password = event.target.value;
    setPasswordError(
      !validatePasswordLength(password) ||
        !validatePasswordSpecialChar(password)
    );
  };
  const handlePasswordFocus = (event) => {
    setPasswordError(false);
  };
  const handleConfirmPasswordChange = (event) => {
    const confirmPassword = event.target.value;
    console.log(confirmPassword);
    console.log(password);
    if (confirmPassword == password) {
      setIsMatch(true);
    }
  };
  const handleConfirmPasswordBlur = (event) => {
    !isMatch && setConfirmPasswordError("Passwords do not match");
    console.log(isMatch);
  };
  const handleConfirmPasswordFocus = (event) => {
    setConfirmPasswordError(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('./bankDetails')
  };
  useEffect(() => {
    childPage("");
  }, []);
  return (
    <div className="w-[63%] px-1  h-full mb-6 flex flex-col gap-6">
      <div className="text-[#344054]">
        <h1 className=" font-bold text-[1.875rem]">Create Account</h1>
        <p className=" font-medium text-[1.125rem]">Personal Information</p>
      </div>
      <form action="" onSubmit={handleSubmit} className="gap-4 flex flex-col">
        <div className="flex gap-[0.375rem]">
          <div className="flex flex-col gap-2">
            <p className=" font-medium text-[0.875rem] text-[#344054]">
              First Name<sup>*</sup>
            </p>
            <div
              className={`border border-[#D0D5DD] rounded-lg py-2 px-3 flex gap-1`}
            >
              <input
                type="text"
                className="text-[1rem] w-full outline-none text-[#101828]"
                placeholder="Enter first name"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className=" font-medium text-[0.875rem] text-[#344054]">
              Last Name<sup>*</sup>
            </p>
            <div
              className={`border border-[#D0D5DD] rounded-lg py-2 px-3 flex gap-1`}
            >
              <input
                type="text"
                className="text-[1rem] w-full outline-none text-[#101828]"
                placeholder="Enter last name"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className=" font-medium text-[0.875rem] text-[#344054]">
            Phone number<sup>*</sup>
          </p>
          <div
            className={`border border-[#D0D5DD] rounded-lg py-2 px-3 flex gap-1`}
          >
            <input
              type="text"
              className="text-[1rem] w-full outline-none text-[#101828]"
              placeholder="Enter last name"
            />
          </div>
        </div>
        <Input
          type={"text"}
          label={"Email address"}
          required={false}
          placeholder={"Enter email address"}
        />
        <Input
          type={"text"}
          label={"Residential address"}
          required={true}
          placeholder={"Ex: No 21 Agaro road, Abeokuta."}
        />
        <Input
          type={"dropdown"}
          label={"Site"}
          options={abujaCities}
          placeholder={"Select Site"}
          required={true}
        />
        <Input
          type={"dropdown"}
          label={"ID Type"}
          options={[
            "National ID card (NIN)",
            "Voter’s card",
            "International Passport",
          ]}
          placeholder={"Select ID Type"}
          required={true}
        />
        <Input
          type={"text"}
          label={"ID Number"}
          required={true}
          placeholder={"Enter your ID number"}
        />
        <div className="flex flex-col gap-4">
          <p className=" font-medium text-[0.875rem] text-[#344054]">
            Upload ID document
          </p>
          <div className="flex border py-4 gap-3 px-6 rounded-xl items-center">
            <label className="text-[0.875rem] font-medium border text-[#344054] border-[#D0D5DD] rounded-lg py-2 px-[0.875rem]">
              <input
                type="file"
                className="hidden"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleChange}
              />
              Choose a file
            </label>
            {file && (
              <p
                title={file.name}
                className=" truncate w-1/2 font-normal text-[0.875rem]"
              >
                {file.name}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 flex-col justify-between">
              <p className=" font-medium text-[0.875rem] text-[#344054]">
                Create Password
              </p>
              <div
                className={`border ${
                  passwordError ? "border-[#FDA29B]" : "border-[#D0D5DD]"
                } rounded-lg py-2 px-3 flex gap-1`}
              >
                <input
                  type={showPassword ? "text" : "password"}
                  className="text-[1rem] w-full outline-none text-[#101828]"
                  placeholder="Enter password"
                  onChange={handlePasswordChange}
                  onBlur={handlePasswordBlur}
                  onFocus={handlePasswordFocus}
                />
                {passwordError ? (
                  <img src={alertCircle} />
                ) : (
                  <img
                    onClick={handleTogglePassword}
                    className=" cursor-pointer"
                    src={passwordImg}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 flex-col  justify-between">
              <p className=" font-medium text-[0.875rem] text-[#344054]">
                Confirm password
              </p>
              <div
                className={`border ${
                  confirmPasswordError ? "border-[#FDA29B]" : "border-[#D0D5DD]"
                } rounded-lg py-2 px-3 flex gap-1`}
              >
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="text-[1rem] w-full outline-none text-[#101828]"
                  placeholder="Enter password"
                  onChange={handleConfirmPasswordChange}
                  onBlur={handleConfirmPasswordBlur}
                  onFocus={handleConfirmPasswordFocus}
                />
                {confirmPasswordError ? (
                  <img src={alertCircle} />
                ) : (
                  <img
                    onClick={handleToggleConfirmPassword}
                    className=" cursor-pointer"
                    src={passwordImg}
                  />
                )}
              </div>
              {confirmPasswordError && (
                <p className="text-[#F04438] text-[0.875rem]">
                  {confirmPasswordError}
                </p>
              )}
            </div>
          </div>
        
        <div className=" flex-col flex gap-3 text-[0.875rem] font-normal text-[#475467]">
          {!password ? (
            <div className="flex gap-2 items-center">
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="20" height="20" rx="10" fill="#D0D5DD" />
                  <path
                    d="M6.25 10L8.75 12.5L13.75 7.5"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span>Must be at least 8 characters</span>
            </div>
          ) : validatePasswordLength(password) ? (
            <div className="flex gap-2 items-center">
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.24996 9.99996L8.74996 12.5L13.75 7.49996M18.3333 9.99996C18.3333 14.6023 14.6023 18.3333 9.99996 18.3333C5.39759 18.3333 1.66663 14.6023 1.66663 9.99996C1.66663 5.39759 5.39759 1.66663 9.99996 1.66663C14.6023 1.66663 18.3333 5.39759 18.3333 9.99996Z"
                    stroke="#079455"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span>Must be at least 8 characters</span>
            </div>
          ) : (
            <div className="flex gap-2 items-center text-[#F04438]">
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99996 6.66663V9.99996M9.99996 13.3333H10.0083M18.3333 9.99996C18.3333 14.6023 14.6023 18.3333 9.99996 18.3333C5.39759 18.3333 1.66663 14.6023 1.66663 9.99996C1.66663 5.39759 5.39759 1.66663 9.99996 1.66663C14.6023 1.66663 18.3333 5.39759 18.3333 9.99996Z"
                    stroke="#F04438"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span>Must be at least 8 characters</span>
            </div>
          )}
          {!password ? (
            <div className="flex gap-2 items-center">
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="20" height="20" rx="10" fill="#D0D5DD" />
                  <path
                    d="M6.25 10L8.75 12.5L13.75 7.5"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span>Must contain one special character</span>
            </div>
          ) : validatePasswordSpecialChar(password) ? (
            <div className="flex gap-2 items-center">
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.24996 9.99996L8.74996 12.5L13.75 7.49996M18.3333 9.99996C18.3333 14.6023 14.6023 18.3333 9.99996 18.3333C5.39759 18.3333 1.66663 14.6023 1.66663 9.99996C1.66663 5.39759 5.39759 1.66663 9.99996 1.66663C14.6023 1.66663 18.3333 5.39759 18.3333 9.99996Z"
                    stroke="#079455"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span>Must contain one special character</span>
            </div>
          ) : (
            <div className="flex gap-2 items-center text-[#F04438]">
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99996 6.66663V9.99996M9.99996 13.3333H10.0083M18.3333 9.99996C18.3333 14.6023 14.6023 18.3333 9.99996 18.3333C5.39759 18.3333 1.66663 14.6023 1.66663 9.99996C1.66663 5.39759 5.39759 1.66663 9.99996 1.66663C14.6023 1.66663 18.3333 5.39759 18.3333 9.99996Z"
                    stroke="#F04438"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span>Must contain one special character</span>
            </div>
          )}
        </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className=" font-medium text-[0.875rem] text-[#344054]">
            Upload Profile picture{" "}
            <span className="italic font-normal">(Optional)</span>
          </p>
          <div className="flex  gap-4 rounded-xl items-center">
            <div className="flex justify-center bg-[#F2F4F7] items-center w-14 aspect-square rounded-full overflow-clip">
              {image ? (
                <img src={URL.createObjectURL(image)} alt="Preview" />
              ) : (
                <span>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.6667 28C26.6667 26.1392 26.6667 25.2089 26.4371 24.4518C25.92 22.7473 24.5861 21.4134 22.8816 20.8963C22.1245 20.6667 21.1941 20.6667 19.3334 20.6667H12.6667C10.806 20.6667 9.87558 20.6667 9.11852 20.8963C7.41398 21.4134 6.08009 22.7473 5.56303 24.4518C5.33337 25.2089 5.33337 26.1392 5.33337 28M22 10C22 13.3137 19.3138 16 16 16C12.6863 16 10 13.3137 10 10C10 6.68629 12.6863 4 16 4C19.3138 4 22 6.68629 22 10Z"
                      stroke="#475467"
                      stroke-width="2.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              )}
            </div>
            <label className="text-[0.875rem] font-medium border text-[#344054] border-[#D0D5DD] rounded-lg py-2 px-[0.875rem] flex gap-2 items-center">
              <input
                type="file"
                className="hidden"
                accept=".jpg,.jpeg,.png"
                onChange={handleImageUpload}
              />
              <span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5 11.5V12.5C16.5 13.9001 16.5 14.6002 16.2275 15.135C15.9878 15.6054 15.6054 15.9878 15.135 16.2275C14.6002 16.5 13.9001 16.5 12.5 16.5H5.5C4.09987 16.5 3.3998 16.5 2.86502 16.2275C2.39462 15.9878 2.01217 15.6054 1.77248 15.135C1.5 14.6002 1.5 13.9001 1.5 12.5V11.5M13.1667 5.66667L9 1.5M9 1.5L4.83333 5.66667M9 1.5V11.5"
                    stroke="#344054"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span>Upload picture</span>
            </label>
          </div>
          <p className="text-[0.75rem] font-normal text-[#475467]">PNG or JPG (max. 5MB)</p>
        </div>
        <div className="flex justify-between">
          <button
            disabled={true}
            className="border disabled:text-[#D0D5DD] w-[47.78%] py-[0.625rem] text-center rounded-lg"
          >
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

export default PersonalDetails;
