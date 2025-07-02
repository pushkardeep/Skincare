import React, { useRef } from "react";

// Components
import ProductCard from "../Common/ProductCard";
import ArrowButtons from "../Common/ArrowButtons";
import BigButton from "../Common/BigButton";

// Gsap for animations
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Data
const Products = [
  { name: "ALYA SKIN CLEANSER.", price: "29.99", src: "/Images/img_4.jpg" },
  { name: "RITUAL OF SAKURA.", price: "27.99", src: "/Images/img_5.jpg" },
  { name: "THE BODY LOTION.", price: "19.99", src: "/Images/img_6.jpg" },
];

function Part_3() {
  const arrowRef = useRef(null);
  const bigBtnRef = useRef(null);
  const headingRef = useRef(null);
  const productRefs = useRef([]);
  const arrowMobileRef = useRef(null);
  const scrollContainerRef = useRef(null);

  // Scroll logic for arrows
  const scrollByCard = (direction) => {
    const container = scrollContainerRef.current;
    if (!container || !productRefs.current.length) return;

    const card = productRefs.current[0];
    const cardWidth = card?.offsetWidth || 300; // Fallback if card not measured
    const gap = 16; // Tailwind's gap-4 = 16px

    container.scrollBy({
      left: direction === "right" ? cardWidth + gap : -(cardWidth + gap),
      behavior: "smooth",
    });
  };

  useGSAP(() => {
    gsap.set(
      [
        bigBtnRef.current,
        headingRef.current,
        arrowRef.current,
        arrowMobileRef.current,
      ],
      {
        y: 60,
        opacity: 0,
      }
    );

    gsap.set(productRefs.current, {
      y: 50,
      opacity: 0,
    });

    gsap.to(bigBtnRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 90%",
      },
    });

    gsap.to(headingRef.current, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 90%",
      },
    });

    gsap.to(arrowRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.9,
      ease: "power2.out",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 90%",
      },
    });

    gsap.to(productRefs.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: productRefs.current[0],
        start: "top 75%",
        end: "top 30%",
      },
    });

    gsap.to(arrowMobileRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: arrowMobileRef.current,
        start: "top 90%",
      },
    });
  }, []);

  return (
    <div className="w-screen h-fit relative overflow-hidden">
      <div className="w-full h-fit mt-[40px] xl:mt-[60px] px-6 sm:px-8 md:px-10 lg:px-16 xl:px-20">
        {/* Button & Headings & ArrowButtons */}
        <div className="w-full h-fit xl:flex justify-between items-center">
          <BigButton ref={bigBtnRef} label={"Best Selling Products"} />
          <h1
            ref={headingRef}
            className="w-[300px] sm:w-[600px] md:w-[700px] font-['Inter_Reg'] text-[#2D3B36] text-left xl:text-center text-[30px] sm:text-[50px] md:text-[60px] leading-9 sm:leading-13 md:leading-16 mt-[40px] tracking-[-0.5px]"
          >
            Skincare That Brings Out Your Natural Radiance
          </h1>

          {/* ✅ Arrow Buttons Desktop */}
          <ArrowButtons
            ref={arrowRef}
            styles={"hidden xl:flex"}
            onLeftClick={() => scrollByCard("left")}
            onRightClick={() => scrollByCard("right")}
          />
        </div>

        {/* ✅ Product Cards */}
        <div
          ref={scrollContainerRef}
          className="w-full h-fit overflow-x-auto scroll-smooth"
        >
          <div className="w-fit lg:w-full h-fit flex items-center gap-4 mt-[40px] xl:mt-[60px]">
            {Products.map(({ name, price, src }, index) => (
              <ProductCard
                ref={(el) => (productRefs.current[index] = el)}
                key={index}
                img={src}
                name={name}
                price={price}
              />
            ))}
          </div>
        </div>

        {/* ✅ Arrow Buttons Mobile */}
        <ArrowButtons
          ref={arrowMobileRef}
          styles={"mt-[40px] xl:mt-[60px] xl:hidden mx-auto"}
          onLeftClick={() => scrollByCard("left")}
          onRightClick={() => scrollByCard("right")}
        />
      </div>
    </div>
  );
}

export default Part_3;
