import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const PrimaryButton = () => {
  return (
    <div>
      <div className="flex items-center group">
        <button className="text-white bg-primary px-3 py-2 h-[40px]">
          Choose Your Meal
        </button>
        <FaArrowRight className="inline-block group-hover:!translate-x-2 duration-300 p-2 text-base h-[40px] w-[40px] bg-primaryDark text-white" />
      </div>
    </div>
  );
};

export default PrimaryButton;
