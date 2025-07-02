import React, { useRef } from "react";

// Components
import BigButton from "../Common/BigButton";
import SmIconCard from "../Common/SmIconCard";
import Faq from "../Faq";

// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Data
const Faqs = [
  {
    title: "Are your products safe for sensitive skin?",
    description:
      "Yes, all our products are dermatologically tested and formulated with gentle, non-irritating ingredients suitable for sensitive skin types.",
  },
  {
    title: "Are your products cruelty-free?",
    description:
      "Absolutely. We are 100% cruelty-free and never test our products or ingredients on animals at any stage of development.",
  },
  {
    title: "What’s your return policy?",
    description:
      "We offer a 30-day return window. If you're not satisfied, you can return the product in its original condition for a full refund.",
  },
  {
    title: "Do you ship internationally?",
    description:
      "Yes, we ship to most countries worldwide. Shipping times and fees vary depending on your location.",
  },
  {
    title: "How do I choose the right product?",
    description:
      "You can use our product quiz or consult with our skincare experts through live chat to find the products best suited to your skin type and goals.",
  },
];

function Part_6() {
  const faqRefs = useRef([]);
  const bigBtnRef = useRef(null);
  const headingRef = useRef(null);
  const pcImgCardRef = useRef(null);
  const mobileImgCardRef = useRef(null);

  useGSAP(() => {
    gsap.set(bigBtnRef.current, { y: 20, opacity: 0 });
    gsap.set(headingRef.current, { y: 80, opacity: 0 });
    gsap.set(pcImgCardRef.current, { scale: 1.05, opacity: 0 });
    gsap.set(mobileImgCardRef.current, { y: 100, opacity: 0 });

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
    gsap.to(headingRef.current, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 90%",
      },
    });

    // Faqs
    faqRefs.current.forEach((el, i) => {
      gsap.set(el, { y: 60, opacity: 0 });
      gsap.to(el, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
        },
      });
    });

    // Pc Img Card
    gsap.to(pcImgCardRef.current, {
      scale: 1,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: pcImgCardRef.current,
        start: "top 90%",
        end: "top 60%",
        scrub: 1,
      },
    });

    // Mobile Img Crad
    gsap.to(mobileImgCardRef.current, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: mobileImgCardRef.current,
        start: "top 90%",
        end: "top 60%",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className="w-screen h-fit relative overflow-hidden">
      <div className="w-full h-fit mt-[40px] xl:mt-[60px] flex flex-col xl:flex-row-reverse xl:justify-between xl:items-center lg:gap-10 px-6 sm:px-8 md:px-10 lg:px-16 xl:px-20">
        <div className="w-full xl:w-fit h-fit relative overflow-hidden">
          <BigButton ref={bigBtnRef} label={"Best Selling Products"} />
          <h1
            ref={headingRef}
            className="w-[300px] sm:w-[600px] md:w-[700px] font-['Inter_Reg'] text-[#2D3B36] text-left text-[30px] sm:text-[50px] md:text-[60px] leading-9 sm:leading-13 md:leading-16 mt-[40px] tracking-[-0.5px]"
          >
            Answers to Your Skincare Questions, All in One Place.
          </h1>
          <div className="w-full h-fit flex flex-col gap-2 mt-[40px] xl:mt-[60px] relative overflow-hidden">
            {Faqs.map(({ title, description }, index) => (
              <Faq
                key={index}
                title={title}
                description={description}
                ref={(el) => (faqRefs.current[index] = el)}
              />
            ))}
          </div>
        </div>

        {/* PC Image Card */}
        <div
          ref={pcImgCardRef}
          className="hidden xl:block w-[600px] h-[605px] rounded-[30px] relative overflow-hidden"
        >
          <img
            className="w-full h-full object-cover"
            src="/Images/img_2.jpg"
            alt="Models"
          />
          <SmIconCard
            img={"/Images/Icons/headphones.png"}
            alt={"Headphones"}
            text={"24/7 We're Here to Help You"}
            styles={"w-[220px] absolute left-1/2 -translate-x-1/2 bottom-7"}
          />
        </div>
      </div>

      {/* Mobile Image Card */}
      <div
        ref={mobileImgCardRef}
        className="w-full h-[440px] sm:hidden mt-[40px] relative overflow-hidden"
      >
        <img
          className="w-full h-full object-cover"
          src="/Images/img_2.jpg"
          alt="Models"
        />
        <SmIconCard
          img={"/Images/Icons/headphones.png"}
          alt={"Headphones"}
          text={"24/7 We're Here to Help You"}
          styles={"w-[220px] absolute left-1/2 -translate-x-1/2 bottom-7"}
        />
      </div>
    </div>
  );
}

export default Part_6;
