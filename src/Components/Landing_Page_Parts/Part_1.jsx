import React, { useRef } from "react";

// Components
import Nav from "../Nav";
import SmImgCard from "../Common/SmImgCard";
import SmButton from "../Common/SmButton";

// Gsap for animations
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Part_1() {
  const imgRef = useRef(null);
  const paragraphRef = useRef(null);
  const mobileImageRef = useRef(null);
  const skincareTextRef = useRef(null);
  const skincareImageRef = useRef(null);
  const glowTextMobileRef = useRef([]);
  const desktopHeadingRef = useRef(null);

  useGSAP(() => {
    const delay = 0.5;

    // 🛠️ Set initial styles for all elements
    gsap.set(imgRef.current, { scale: 1.1, opacity: 0 });
    gsap.set(paragraphRef.current, { x: -50, opacity: 0 });
    gsap.set(mobileImageRef.current, { opacity: 0, y: 80 });
    gsap.set(skincareTextRef.current, { opacity: 0, y: 100 });
    gsap.set(skincareImageRef.current, { opacity: 0, y: 100 });
    gsap.set(glowTextMobileRef.current, { y: 40, opacity: 0 });
    gsap.set(desktopHeadingRef.current, { y: 100, opacity: 0 });

    // 🕐 Delay all animations after loader
    gsap.delayedCall(delay, () => {
      // Mobile heading
      gsap.to(glowTextMobileRef.current, {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: glowTextMobileRef.current[0],
          start: "top 90%",
        },
      });

      // Paragraph
      gsap.to(paragraphRef.current, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top 85%",
        },
      });

      // Desktop heading
      gsap.to(desktopHeadingRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: desktopHeadingRef.current,
          start: "top 90%",
        },
      });

      // Product image
      gsap.to(imgRef.current, {
        scale: 1,
        opacity: 1,
        duration: 1.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 85%",
        },
      });

      // SkinCare image scroll trigger
      gsap.to(skincareImageRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: skincareImageRef.current,
          start: "top 90%",
        },
      });

      // SKINCARE text scroll trigger
      gsap.to(skincareTextRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: skincareTextRef.current,
          start: "top 85%",
        },
      });

      // Mobile image (below SKINCARE) scroll trigger
      gsap.to(mobileImageRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: mobileImageRef.current,
          start: "top 90%",
        },
      });
    });
  }, []);

  return (
    <div className="w-screen h-fit relative overflow-hidden">
      <Nav />

      {/* Section_1  */}
      <div className="w-full h-fit flex flex-col sm:flex-col-reverse gap-[20px] sm:gap-0 mt-[50px] lg:mt-[20px] relative">
        {/* Headings for Mobile & Tablets  */}
        <div className="lg:hidden w-full h-fit -ml-3 sm:-ml-5 sm:mt-[-102px] mx-auto leading-15 sm:leading-27 relative z-50">
          <h1
            ref={(el) => (glowTextMobileRef.current[0] = el)}
            className="w-full font-['Inter_Black'] text-[#2D3B36] text-center text-[75px] sm:text-[135px] whitespace-nowrap"
          >
            GLOWWWWW
          </h1>
          <h1
            ref={(el) => (glowTextMobileRef.current[1] = el)}
            className="w-full font-['Inter_Black'] text-[#2D3B36] text-center text-[75px] sm:text-[135px] whitespace-nowrap"
          >
            NATURALLYYY
          </h1>
        </div>

        <div className="w-full h-fit sm:flex justify-evenly items-center relative">
          <p
            ref={paragraphRef}
            className="w-full max-w-[380px] sm:max-w-[254px] font-['Inter_Reg'] text-[#2D3B36] text-[16px] mx-auto sm:mx-0 px-[20px] sm:p-0 leading-5 tracking-[-0.8px]"
          >
            <span className="inline sm:block sm:text-right">
              Transform your skincare
            </span>

            <span className="inline sm:block sm:text-left sm:pl-[13.5px]">
              routine with premium products that restore, protect, and enhance
              your natural glow every day.
            </span>
          </p>

          {/* Heading for Pc  */}
          <span
            ref={desktopHeadingRef}
            className="hidden lg:block font-['Inter_Bold'] text-[#2D3B36] text-[75px] leading-15.5 tracking-[-3px] whitespace-nowrap"
          >
            GLOW <br />
            NATUR- <br /> ALLY
          </span>

          <img
            ref={imgRef}
            className="hidden sm:block w-[335px] lg:w-[220px] aspect-square lg:rounded-[20px] object-cover"
            src="/Images/img_2.jpg"
            alt="Cream"
          />
        </div>
      </div>

      {/* Section_2  */}
      <div className="w-screen h-fit sm:mt-[80px] relative">
        <div className="w-full h-fit flex justify-evenly items-center relative z-50 overflow-hidden">
          {/* Img Crad  */}
          <div
            ref={skincareImageRef}
            className="w-full sm:w-[360px] h-[440px] md:w-[400px] md:h-[500px] lg:w-[450px] lg:h-[550px] mt-[50px] sm:mt-0 md:rounded-[30px] relative overflow-hidden"
          >
            <img
              className="w-full h-full object-cover"
              src="/Images/img_1.png"
              alt="Models"
            />

            {/* Bar */}
            <SmImgCard
              img={"/Images/img_2.jpg"}
              alt={"Cream"}
              text={"While giving you an invigorating cleansing experience."}
              styles={"w-[330px] absolute left-1/2 -translate-x-1/2 bottom-7"}
            />
          </div>

          <SmButton
            label={"Shop Now"}
            styles="hidden sm:block md:absolute left-10 xl:left-28 top-1/2 -translate-y-1/2 sm:px-8 sm:py-2.5"
          />
        </div>

        <h1
          ref={skincareTextRef}
          className="w-full font-['Inter_Bold'] sm:font-['Inter_Black'] text-[#2D3B36] text-[80px] sm:text-[140px] md:text-[200px] lg:text-[300px] text-center -ml-3 sm:-ml-5 md:-ml-6 lg:-ml-7 xl:-ml-5 mt-[-40px] sm:mt-[-120px] md:mt-[-200px] lg:mt-[-310px] relative z-10 whitespace-nowrap"
        >
          SKINCARE
        </h1>

        <img
          ref={mobileImageRef}
          className="w-full sm:hidden h-[400px] mt-[-42px] relative z-50 object-cover"
          src="/Images/img_2.jpg"
          alt="Cream"
        />
        <SmButton label={"Shop Now"} styles="mx-auto mt-[40px] sm:hidden" />
      </div>
    </div>
  );
}

export default Part_1;
