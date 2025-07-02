import React, { forwardRef } from "react";

// Icons
import { MoveRight, MoveLeft } from "lucide-react";

const ArrowButtons = forwardRef(({ styles }, ref) => {
  return (
    <div
      ref={ref}
      className={`w-fit h-fit flex justify-center items-center gap-10 ${styles}`}
    >
      {/* Left Arrow */}
      <div className="group w-[40px] md:w-[50px] aspect-square border border-[#2D3B36] flex justify-end items-center rounded-full transition-all duration-300 hover:border-[#1B1F1C] cursor-pointer">
        <MoveLeft
          size={20}
          color="#2D3B36"
          className="transition-all duration-300 group-hover:-translate-x-1"
        />
      </div>

      {/* Right Arrow */}
      <div className="group w-[40px] md:w-[50px] aspect-square bg-[#2D3B36] flex justify-start items-center rounded-full transition-all duration-300 hover:bg-[#1B1F1C] cursor-pointer">
        <MoveRight
          size={20}
          color="#FEFFF4"
          className="transition-all duration-300 group-hover:translate-x-1"
        />
      </div>
    </div>
  );
});

export default ArrowButtons;
