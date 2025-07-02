import React, { forwardRef, useRef, useState, useEffect } from "react";

// Icons
import { Minus, Plus } from "lucide-react";

const Faq = forwardRef(({ title, description }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  return (
    <div
      ref={ref}
      onClick={() => setIsOpen(!isOpen)}
      className="w-full max-w-[600px] border border-[#2D3B36] rounded-[5px] p-3 cursor-pointer "
    >
      <div className="w-full h-fit transition-all duration-300">
        <div className="w-full flex justify-between items-center">
          <h4 className="font-['Inter_Reg'] text-[#2D3B36] text-[14px]">
            {title}
          </h4>
          {isOpen ? (
            <Minus size={20} color="#2D3B36" />
          ) : (
            <Plus size={20} color="#2D3B36" />
          )}
        </div>

        {/* Animated Description */}
        <div
          ref={contentRef}
          style={{
            height,
            transition: "height 0.4s ease, opacity 0.4s ease",
            opacity: isOpen ? 1 : 0,
            overflow: "hidden",
          }}
          className="pr-[10px]"
        >
          <p className="mt-2 font-['Inter_Reg'] text-[#525349] text-[12px] tracking-[-0.5px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
});

export default Faq;
