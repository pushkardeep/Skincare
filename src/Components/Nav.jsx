import React from "react";

// Components
import NavButtons from "./NavButtons";

function Nav() {
  return (
    <nav className="nav w-screen h-fit flex justify-between items-center gap-5 px-[30px] py-[37px] md:p-[40px] lg:py-[50px] lg:px-[100px]">
      <span className="font-['Inter_ExBold'] text-[#2D3B36] text-[20px] whitespace-nowrap cursor-pointer">
        SKINCARE
      </span>

      <div className="hidden w-fit h-fit md:flex justify-center items-center gap-8 relative">
        {["All Products", "Serum", "Susscreen", "Bundle"].map((elem, i) => (
          <div key={i} className="group w-fit h-fit relative flex flex-col items-center justify-center transition-all duration-300 ease-in-out overflow-hidden">
            <span
              className="font-['Inter_Reg'] text-[#2D3B36] text-[12px] transition-transform duration-300 ease-in-out group-hover:-translate-y-[150%] whitespace-nowrap cursor-pointer"
            >
              {elem}
            </span>

            <span
              key={i}
              className="font-['Inter_Reg'] text-[#2D3B36] text-[12px] absolute top-[150%] transition-transform duration-300 ease-in-out group-hover:-translate-y-[150%] whitespace-nowrap cursor-pointer"
            >
              {elem}
            </span>
          </div>
        ))}
      </div>

      <div className="w-fit h-fit flex justify-center items-center gap-3 relative">
        <NavButtons img={"/Images/Icons/bag.png"} alt={"Bag"} />
        <NavButtons img={"/Images/Icons/heart.png"} alt={"Heart"} />
        <NavButtons img={"/Images/Icons/profile.png"} alt={"Cart"} />
      </div>
    </nav>
  );
}

export default Nav;
