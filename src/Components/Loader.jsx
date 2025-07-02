import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Loader({ setDisableLoader, setActiveContent }) {
  const containerRef = useRef(null);
  const numberRef = useRef(null);
  const [count, setCount] = useState(0);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Count up from 0 to 100
    tl.to(
      {},
      {
        duration: 5,
        onUpdate: function () {
          const progress = Math.round(this.progress() * 100);
          setCount(progress);
        },
      }
    );

    // Slide up loader after count reaches 100
    tl.to(containerRef.current, {
      y: "-100%",
      duration: 0.8,
      ease: "power2.inOut",
      onStart: () => setActiveContent(true),
      onComplete: () => {
        setTimeout(() => {
          setDisableLoader(true);
        }, 500);
      },
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-screen h-screen min-h-fit bg-[#EFF5E1] absolute top-0 left-0 z-50 overflow-hidden"
    >
      <h1
        ref={numberRef}
        className="w-fit font-['Inter_Reg'] text-[#2D3B36] text-[90px] sm:text-[140px] relative top-[100%] -translate-y-[100%] ml-auto mr-[40px] sm:mr-[55px] tracking-[-5px]"
      >
        {count}
      </h1>
    </div>
  );
}

export default Loader;
