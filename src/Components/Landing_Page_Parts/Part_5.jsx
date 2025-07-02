import React, { useRef } from "react";

// Components
import ArrowButtons from "../Common/ArrowButtons";
import ProductCard from "../Common/ProductCard";
import WorkTags from "../WorkTags";

// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Data
const FunctionTags = [
  "NEW ARRIVAL",
  "CLEANSING",
  "ACNE FIGHTER",
  "ANTI AGGING",
];

const Products = [
  { name: "ALYA SKIN CLEANSER.", price: "29.99", src: "/Images/img_4.jpg" },
  { name: "RITUAL OF SAKURA.", price: "27.99", src: "/Images/img_5.jpg" },
  { name: "THE BODY LOTION.", price: "19.99", src: "/Images/img_6.jpg" },
];

function Part_5() {
  const headingRef = useRef(null);
  const tagsRef = useRef([]);
  const cardsRef = useRef([]);
  const arrowsRef = useRef(null);

  useGSAP(() => {
    gsap.set(
      [
        headingRef.current,
        ...tagsRef.current,
        ...cardsRef.current,
        arrowsRef.current,
      ],
      {
        opacity: 0,
        y: 60,
      }
    );

    gsap.to(headingRef.current, {
      opacity: 1,
      y: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
        end: "top 50%",
      },
    });

    gsap.to(tagsRef.current, {
      opacity: 1,
      y: 0,
      ease: "power3.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: tagsRef.current[0],
        start: "top 70%",
        end: "top 30%",
      },
    });

    gsap.to(cardsRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: cardsRef.current[0],
        start: "top 75%",
        end: "top 30%",
      },
    });

    gsap.to(arrowsRef.current, {
      opacity: 1,
      y: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: arrowsRef.current,
        start: "top 90%",
        end: "top 50%",
      },
    });
  }, []);

  return (
    <div className="w-screen h-fit relative overflow-hidden">
      <div className="w-full h-fit mt-[40px] lg:mt-0 flex flex-col gap-[40px] xl:gap-[60px] px-6 sm:px-8 md:px-10 lg:px-16 xl:px-20">
        {/* Heading */}
        <h1
          ref={headingRef}
          className="w-[300px] sm:w-[600px] md:w-[700px] xl:mx-auto font-['Inter_Reg'] text-[#2D3B36] text-left xl:text-center text-[30px] sm:text-[50px] md:text-[60px] leading-9 sm:leading-13 md:leading-16 tracking-[-0.5px]"
        >
          Feel Beautiful Inside and Out with Every Product.
        </h1>

        {/* Tags */}
        <div className="w-fit md:mx-auto flex flex-wrap items-center gap-2">
          {FunctionTags.map((tag, i) => (
            <WorkTags
              key={i}
              label={tag}
              selected={i === 0}
              ref={(el) => (tagsRef.current[i] = el)}
            />
          ))}
        </div>

        {/* Product Cards */}
        <div className="w-full h-fit relative overflow-x-auto">
          <div className="w-fit lg:w-full h-fit flex items-center gap-4">
            {Products.map(({ name, price, src }, i) => (
              <ProductCard
                key={i}
                name={name}
                price={price}
                img={src}
                ref={(el) => (cardsRef.current[i] = el)}
              />
            ))}
          </div>
        </div>

        {/* Arrows */}
        <div ref={arrowsRef}>
          <ArrowButtons styles={"md:hidden mx-auto"} />
        </div>
      </div>
    </div>
  );
}

export default Part_5;
