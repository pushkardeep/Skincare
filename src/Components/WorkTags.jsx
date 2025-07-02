import React, { forwardRef } from "react";

const WorkTags = forwardRef(({ label, selected = false, styles = "" }, ref) => {
  return (
    <button
      ref={ref}
      className={`group w-fit h-fit flex justify-center items-center rounded-full px-4 py-3 overflow-hidden cursor-pointer ${
        selected ? "bg-[#2D3B36]" : "bg-transparent border border-[#2D3B36]"
      } ${styles}`}
    >
      <div className="w-fit h-fit relative flex flex-col items-center justify-center transition-all duration-300 ease-in-out">
        <span
          className={`block font-['Inter_Reg'] text-[12px] relative transition-transform duration-300 ease-in-out group-hover:-translate-y-[150%] ${
            selected ? "text-[#EFF5E1]" : "text-[#2D3B36]"
          }`}
        >
          {label}
        </span>

        <span
          className={`block font-['Inter_Reg'] text-[12px] absolute top-[150%] transition-transform duration-300 ease-in-out group-hover:-translate-y-[150%] ${
            selected ? "text-[#EFF5E1]" : "text-[#2D3B36]"
          }`}
        >
          {label}
        </span>
      </div>
    </button>
  );
});

export default WorkTags;
