import React from "react";

function NavButtons({ img, alt }) {
  return (
    <div className="group w-[35px] aspect-square bg-[#F8FEE5] flex justify-center items-center rounded-full cursor-pointer overflow-hidden">
      <div className="w-full h-full relative flex flex-col items-center justify-center transition-all duration-300 ease-in-out overflow-hidden">
        <img
          className="w-[50%] aspect-square transition-transform duration-300 ease-in-out group-hover:-translate-y-[150%] object-cover"
          src={img}
          alt={alt}
        />
        <img
          className="w-[50%] aspect-square absolute top-[150%] transition-transform duration-300 ease-in-out group-hover:-translate-y-[250%] object-cover"
          src={img}
          alt={alt}
        />
      </div>
    </div>
  );
}

export default NavButtons;
