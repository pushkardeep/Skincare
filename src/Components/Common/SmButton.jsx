import React, { forwardRef } from "react";

const SmButton = forwardRef(({ label, blackTheme = true, styles = "" }, ref) => {
  return (
    <button
      ref={ref}
      className={`group w-fit h-fit flex justify-center items-center rounded-full px-12 py-3 cursor-pointer ${
        blackTheme ? "bg-[#2D3B36]" : "bg-[#FEFFF4]"
      } ${styles}`}
    >
      <div className="w-fit h-fit relative flex flex-col items-center justify-center transition-all duration-300 ease-in-out">
        {/* Top label (normal) */}
        <span
          className={`block font-['Inter_Reg'] text-[12px] relative transition-transform duration-300 ease-in-out group-hover:-translate-y-[150%] ${
            blackTheme ? "text-[#EFF5E1]" : "text-[#2D3B36]"
          }`}
        >
          {label}
        </span>

        {/* Bottom label (on hover) */}
        <span
          className={`block font-['Inter_Reg'] text-[12px] absolute top-[150%] transition-transform duration-300 ease-in-out group-hover:-translate-y-[150%] ${
            blackTheme ? "text-[#EFF5E1]" : "text-[#2D3B36]"
          }`}
        >
          {label}
        </span>
      </div>
    </button>
  );
});

export default SmButton;
