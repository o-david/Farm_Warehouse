import React, { useState } from "react";
import { alertCircle } from "../assets";

const Input = ({
  type,
  id,
  label,
  required,
  placeholder,
  error,
  message,
  options,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setIsOpen(false);
    setSelectedOption(option);
  };

  return (
    <div>
      {type == "text" && (
        <div className="flex flex-col gap-2">
          <p
            
            className=" font-medium text-[0.875rem] text-[#344054]"
          >
            {label}
            {required ? (
              <sup>*</sup>
            ) : (
              <span className="italic font-normal">(Optional)</span>
            )}
          </p>
          <div
            className={`border border-[#D0D5DD] rounded-lg py-2 px-3 flex gap-1 focus-within:border-[#5EBAA2] focus-within:shadow-[0_0_0_4px_#E7F5F1]`}
          >
            <input
              type="text"
              className="text-[1rem] w-full outline-none text-[#101828]"
              placeholder={placeholder}
              
            />
            {error && <img src={alertCircle} />}
          </div>
          {error ? (
            <p className="text-[#F04438] text-[0.875rem]">{error}</p>
          ) : (
            message && (
              <p className="text-[0.75rem] text-[#475467] font-normal">
                {message}
              </p>
            )
          )}
        </div>
      )}
      {type == "password" && <div></div>}
      {type == "dropdown" && (
        <div className=" text-[#101828] text-[1rem] font-medium flex flex-col gap-2">
  <p
            
            className=" font-medium text-[0.875rem] text-[#344054]"
          >
            {label}
            {required ? (
              <sup>*</sup>
            ) : (
              <span className="italic font-normal">(Optional)</span>
            )}
          </p>

          <div
            className={`border  cursor-pointer border-[#D0D5DD] rounded-lg py-2 px-3 flex items-center justify-between ${
              isOpen && "border-[#5EBAA2] shadow-[0_0_0_4px_#E7F5F1]"
            }`}
            onClick={toggleDropdown}
          >
            {selectedOption ? (
              <p>{selectedOption}</p>
            ) : (
              <p className="text-[1rem] font-normal text-[#667085]">
                {placeholder}
              </p>
            )}

            <p className={`${isOpen && "rotate-180"} transition duration-200`}>
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1.5L6 6.5L11 1.5"
                  stroke="#667085"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </p>
          </div>
          {isOpen && (
            <ul className="border border-[#D0D5DD] rounded-lg py-2 px-1 flex gap-1 flex-col shadow-[0_12_16_-4px_#E7F5F1] max-h-[9.5rem] overflow-scroll">
              {options.map((option, index) => (
                <li
                  key={index}
                  className=" cursor-pointer flex justify-between items-center group hover:bg-[#F9FAFB] px-2 py-[0.625rem] rounded-lg"
                  onClick={() => handleSelect(option)}
                >
                  <span>{option}</span>
                  <span className=" group-hover:block hidden">
                    <svg
                      width="16"
                      height="11"
                      viewBox="0 0 16 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.6668 1L5.50016 10.1667L1.3335 6"
                        stroke="#0E9874"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Input;
