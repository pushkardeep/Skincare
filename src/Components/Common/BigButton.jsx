import React, { forwardRef } from "react";

const BigButton = forwardRef(({ label, styles = "" }, ref) => {
  return (
    <button
      ref={ref}
      className={`group w-fit h-fit border border-[#2D3B36] flex justify-center items-center gap-4 rounded-full px-4 py-3 pr-4.5 cursor-pointer overflow-hidden relative bg-transparent ${styles}`}
    >
      {/* Circle Icon */}
      <div className="w-[20px] aspect-square bg-[#2D3B36] rounded-full transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:translate-x-1"></div>

      {/* Label */}
      <span className="font-['Inter_Reg'] text-[#2D3B36] text-[14px] transition-all duration-300 ease-in-out group-hover:tracking-[0.5px] group-hover:text-[#1c251f]">
        {label}
      </span>
    </button>
  );
});

export default BigButton;
