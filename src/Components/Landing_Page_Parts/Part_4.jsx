import React, { useRef } from "react";

// Components
import SmButton from "../Common/SmButton";

// Gsap
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Part_4() {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const btnRef = useRef(null);

  useGSAP(() => {
    // Set initial state for container, heading and button
    gsap.set(containerRef.current, {
      scale: 1.05,
      opacity: 0,
    });

    gsap.set(headingRef.current, {
      y: 100,
      opacity: 0,
    });

    gsap.set(btnRef.current, {
      y: 60,
      opacity: 0,
    });

    // Container
    gsap.to(containerRef.current, {
      scale: 1,
      opacity: 1,
      duration: 1.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%", // triggers after full viewport
        end: "top 60%",
      },
    });

    // Animate heading and button with stagger
    gsap.to([headingRef.current, btnRef.current], {
      y: 0,
      opacity: 1,
      duration: 1.4,
      ease: "power3.out",
      stagger: 0.3, // stagger between heading and button
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 85%",
        end: "top 40%",
      },
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="hidden w-screen h-screen min-h-fit lg:block px-16 xl:px-20 my-[100px] relative overflow-hidden"
    >
      <div className="w-full h-full rounded-[30px] relative overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="/Images/img_7.png"
          alt="Models"
        />
        <div className="w-full h-fit absolute bottom-10 left-0 z-50">
          <h1
            ref={headingRef}
            className="w-full font-['Inter_Reg'] text-[#FEFFF4] text-center text-[60px] leading-16 tracking-[-0.5px]"
          >
            Feel Beautiful Inside and Out <br /> with Every Product.
          </h1>
          <SmButton
            ref={btnRef}
            label={"Shop Now"}
            blackTheme={false}
            styles="mx-auto mt-[40px]"
          />
        </div>
        <div className="w-full h-[200px] bg-gradient-to-b from-[#00000000] to-[#293330] absolute bottom-0 left-0 z-0"></div>
      </div>
    </div>
  );
}

export default Part_4;
