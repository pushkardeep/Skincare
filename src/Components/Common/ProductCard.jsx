import React, { forwardRef } from "react";

// Icons
import { ShoppingCart } from "lucide-react";

const ProductCard = forwardRef(({ img, name, price }, ref) => {
  return (
    <div
      ref={ref}
      className="w-full min-w-[330px] h-[470px] xl:h-[600px] rounded-[20px] relative overflow-hidden"
    >
      <img className="w-full h-full object-cover" src={img} alt="Spray" />

      <div className="w-[90%] h-fit bg-[#FEFFF4] rounded-[10px] flex justify-between items-center absolute left-1/2 -translate-x-1/2 bottom-4 px-4 pr-2 py-2">
        <div className="w-fit h-fit flex flex-col justify-center items-start gap-3">
          <h1 className="font-['Inter_Reg'] text-[#2D3B36] text-[14px]">
            {name}
          </h1>
          <h6 className="font-['Inter_Reg'] text-[#2D3B36]/50 text-[12px]">
            FROM ${price}
          </h6>
        </div>

        <div className="group w-[50px] aspect-square bg-[#2D3B361A] rounded-[5px] flex justify-center items-center cursor-pointer">
          <div className="w-fit h-fit relative transition-all duration-300 ease-in-out  overflow-hidden">
            <ShoppingCart
              size={24}
              color="#2D3B36"
              className="transition-transform duration-300 ease-in-out group-hover:-translate-y-[150%]"
            />
            <ShoppingCart
              size={24}
              color="#2D3B36"
              className="absolute top-[150%] transition-transform duration-300 ease-in-out group-hover:-translate-y-[150%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default ProductCard;
