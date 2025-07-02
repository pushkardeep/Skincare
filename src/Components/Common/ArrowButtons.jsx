import React, { forwardRef } from "react";

const ArrowButtons = forwardRef(({ styles }, ref) => {
  return (
    <div
      ref={ref}
      className={`w-fit h-fit flex justify-center items-center gap-10 ${styles}`}
    >
      <img
        className="w-[40px] md:w-[50px] aspect-square object-cover"
        src="/Images/Icons/left_arrow.png"
        alt="Left_Arrow"
      />
      <img
        className="w-[40px] md:w-[50px] aspect-square object-cover"
        src="/Images/Icons/right_arrow.png"
        alt="Right_Arrow"
      />
    </div>
  );
});

export default ArrowButtons;
