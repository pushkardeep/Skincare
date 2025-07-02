import React, { useRef } from "react";

// Components
import BigButton from "../Common/BigButton";
import SmIconCard from "../Common/SmIconCard";

// Gsap for animations
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Data
const BestCare = [
  {
    title: "Bio Ingredients",
    description:
      "Get naturally beautiful and transform with our bio ingredients creams for healthy, radiant skin.",
  },
  {
    title: "Everything Natural",
    description:
      "Pure ingredients for pure skin. The Perfect solution for your skin care needs.",
  },
  {
    title: "All Handmade",
    description:
      "Made with love and care. Just for you. Give your skin the tender loving care it deserves.",
  },
];

function Part_2() {
  const section2HeadingRef = useRef(null);
  const mobileImgCardRef = useRef(null);
  const section2ParaRef = useRef(null);
  const featureItemRefs = useRef([]);
  const imgCardRef = useRef(null);
  const imgTextRef = useRef(null);
  const bigBtnRef = useRef(null);

  useGSAP(() => {
    const words = document.querySelectorAll(".word");

    // Set initial styles
    gsap.set(section2HeadingRef.current, { y: 50, opacity: 0 });
    gsap.set(mobileImgCardRef.current, { y: 100, opacity: 0 });
    gsap.set(imgCardRef.current, { scale: 1.05, opacity: 0 });
    gsap.set(section2ParaRef.current, { x: -50, opacity: 0 });
    gsap.set(featureItemRefs.current, { y: 40, opacity: 0 });
    gsap.set(imgTextRef.current, { y: 20, opacity: 0 });
    gsap.set(bigBtnRef.current, { y: 20, opacity: 0 });

    // Button
    gsap.to(bigBtnRef.current, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: bigBtnRef.current,
        start: "top 85%",
      },
    });

    // Heading
    gsap.to(section2HeadingRef.current, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section2HeadingRef.current,
        start: "top 85%",
      },
    });

    // Paragraph
    gsap.to(section2ParaRef.current, {
      x: 0,
      opacity: 1,
      duration: 1.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section2ParaRef.current,
        start: "top 85%",
      },
    });

    // Feature Items (staggered)
    gsap.to(featureItemRefs.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: featureItemRefs.current[0],
        start: "top 90%",
      },
    });

    // Image card
    gsap.to(imgCardRef.current, {
      scale: 1,
      opacity: 1,
      duration: 1.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: imgCardRef.current,
        start: "top 85%",
      },
    });

    // Mobile Image card
    gsap.to(mobileImgCardRef.current, {
      y: 0,
      opacity: 1,
      duration: 1.3,
      ease: "power4.out",
      scrollTrigger: {
        trigger: mobileImgCardRef.current,
        start: "top bottom",
      },
    });

    // Text below image
    gsap.to(imgTextRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: imgTextRef.current,
        start: "top 90%",
      },
    });

    // Create scroll-triggered timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".word-container",
        start: "top 85%",
        end: "bottom 20%",
        scrub: true,
      },
    });

    // Animate all words with staggered color change
    tl.to(words, {
      color: "#2D3B36",
      ease: "power2.out",
      stagger: 0.05,
    });
  }, []);

  return (
    <div className="w-screen h-fit relative overflow-hidden">
      {/* Section_1  */}
      <p className="word-container w-full h-fit font-['Inter_Reg'] text-[20px] sm:text-[30px] md:text-[50px] tracking-[-0.5px] md:tracking-[-0.7px] leading-7.5 sm:leading-10 md:leading-16.5 px-6 sm:px-8 md:px-10 lg:px-16 xl:px-20 mt-[40px] sm:mt-0">
        {`Experience the ultimate in skincare with our expertly formulated products, crafted to nourish, protect, and rejuvenate your skin. Combining the finest natural ingredients with advanced science, our collection ensures every skin type can achieve a radiant, healthy glow. Embrace your beauty with confidence every day.`
          .split(" ")
          .map((word, index) => (
            <span
              key={index}
              className="word text-[#2D3B364D] inline-block mr-2"
            >
              {word}
            </span>
          ))}
      </p>

      {/* Section_2  */}
      <div className="w-full h-fit xl:flex justify-between items-center mt-[60px] px-6 sm:px-8 md:px-10 lg:px-16 xl:px-20">
        <div className="w-full xl:w-fit h-fit relative overflow-hidden ">
          {/* Button */}
          <BigButton ref={bigBtnRef} label={"Why Our Products"} />

          {/* Heading */}
          <h1
            ref={section2HeadingRef}
            className="w-fit font-['Inter_Reg'] text-[#2D3B36] text-left text-[30px] sm:text-[50px] md:text-[60px] leading-9 sm:leading-13 md:leading-16 mt-[40px] tracking-[-0.5px] whitespace-nowrap"
          >
            YOUR SKIN DESERVES <br /> THE BEST CARE.
          </h1>

          {/* Paragraph */}
          <p
            ref={section2ParaRef}
            className="w-full max-w-[600px] h-fit text-[#525349] font-['Inter_Reg'] text-[16px] sm:text-[18px] mt-[20px] tracking-[-0.3px] sm:tracking-[-0.5px] leading-5.5 sm:leading-6"
          >
            Discover a curated collection of skincare products designed to
            rejuvenate, protect, and pamper your skin. Explore our rage crafted
            with love backed by science, and inspired by nature.
          </p>

          <div className="w-full h-fit flex flex-col gap-[20px] mt-[40px]">
            {BestCare.map(({ title, description }, index) => (
              <div
                key={index}
                ref={(el) => (featureItemRefs.current[index] = el)}
                className="w-full h-fit flex justify-center items-start gap-5"
              >
                <h1 className="bg-gradient-to-b from-[#293330] to-[#FEFFF4] font-['Inter_Reg'] text-[35px] sm:text-[50px] bg-clip-text text-transparent tracking-[-0.5px]">
                  0{index + 1}
                </h1>

                <div className="w-full h-fit flex flex-col justify-center items-start gap-[4px] sm:gap-[20px] relative overflow-hidden">
                  <h1 className="font-['Inter_Reg'] text-[35px] sm:text-[50px] text-[#2D3B36] tracking-[-0.5px] whitespace-nowrap">
                    {title}
                  </h1>
                  <p className="w-full max-w-[400px] h-fit text-[#525349] font-['Inter_Reg'] text-[16px] sm:text-[18px] tracking-[-0.3px] sm:tracking-[-0.5px] leading-5.5 sm:leading-6">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Img Card and Text  */}
        <div className="hidden w-[600px] h-[820px] xl:flex flex-col-reverse gap-3">
          {/* Text  */}
          <div
            ref={imgTextRef}
            className="w-full h-fit flex justify-between items-center"
          >
            <h1 className="font-['Inter_Reg'] text-[16px] text-[#2D3B36] tracking-[-0.5px]">
              Since 2001
            </h1>
            <h1 className="font-['Inter_Reg'] text-[16px] text-[#2D3B36] tracking-[-0.5px]">
              LEARN MORE
            </h1>
          </div>

          {/* Img Crad  */}
          <div
            ref={imgCardRef}
            className="w-full flex-1 rounded-[30px] relative overflow-hidden"
          >
            <img
              className="w-full h-full object-cover"
              src="/Images/img_3.png"
              alt="Models"
            />

            {/* Bar  */}
            <SmIconCard
              img={"/Images/Icons/lock.png"}
              alt={"Lock"}
              text={"Best Skin Care Product Award Wining"}
              styles={"w-[330px] absolute left-1/2 -translate-x-1/2 bottom-7"}
            />
          </div>
        </div>
      </div>

      {/* Img Card and Text (Part of Section_2)  */}
      <div className="xl:hidden w-screen h-[500px] sm:h-[947px] md:h-[1080px] mt-[90px] flex flex-col-reverse gap-2 sm:gap-3">
        {/* Text  */}
        <div
          ref={imgTextRef}
          className="w-full h-fit flex justify-between items-center px-5"
        >
          <h1 className="font-['Inter_Reg'] text-[16px] text-[#2D3B36] tracking-[-0.5px]">
            Since 2001
          </h1>
          <h1 className="font-['Inter_Reg'] text-[16px] text-[#2D3B36] tracking-[-0.5px]">
            LEARN MORE
          </h1>
        </div>
        {/* Img Crad  */}
        <div
          ref={mobileImgCardRef}
          className="w-full flex-1 relative overflow-hidden"
        >
          <img
            className="w-full h-full object-cover"
            src="/Images/img_3.png"
            alt="Models"
          />

          {/* Bar  */}
          <SmIconCard
            img={"/Images/Icons/lock.png"}
            alt={"Lock"}
            text={"Best Skin Care Product Award Wining"}
            styles={"w-[330px] absolute left-1/2 -translate-x-1/2 bottom-7"}
          />
        </div>
      </div>
    </div>
  );
}

export default Part_2;
