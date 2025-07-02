import React, { useRef } from "react";

// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Data
const SocialLinks = [
  { title: "FaceBook" },
  { title: "Instagram" },
  { title: "YouTube" },
];

const PolicyLinks = [
  { title: "Terms of Service" },
  { title: "Privacy Policy" },
  { title: "Cookies Policy" },
];

function Footer() {
  const footerRef = useRef(null);
  const headingRef = useRef([]);
  const emailMobileRef = useRef(null);
  const pcLinksRef = useRef([]);
  const mobileLinksRef = useRef([]);
  const bgTextRef = useRef(null);

  useGSAP(() => {
    // Set initial states
    gsap.set(
      [
        ...headingRef.current,
        ...pcLinksRef.current,
        ...mobileLinksRef.current,
        emailMobileRef.current,
        bgTextRef.current,
      ],
      {
        opacity: 0,
        y: 60,
      }
    );

    // Animate PC heading + email together
    gsap.to(headingRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: headingRef.current[0],
        start: "top 85%",
      },
    });

    // Animate PC Social + Policy links together
    gsap.to(pcLinksRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 85%",
      },
    });

    // Animate Mobile email section
    gsap.to(emailMobileRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: emailMobileRef.current,
        start: "top 85%",
      },
    });

    // Animate Mobile Social + Policy links together
    gsap.to(mobileLinksRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 85%",
      },
    });

    // Animate Background Text
    gsap.to(bgTextRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: mobileLinksRef.current[0],
        start: "top 85%",
      },
    });
  }, []);

  return (
    <footer
      ref={footerRef}
      className="w-screen h-fit min-h-fit relative overflow-hidden"
    >
      <div className="w-full h-[570px] sm:h-[800px] md:h-[900px] lg:h-[1080px] xl:h-[630px] bg-[#2D3B36] flex flex-col justify-start gap-20 sm:gap-32 lg:gap-39 mt-[40px] xl:mt-[60px] px-6 py-16 md:px-10 md:py-20 xl:px-18 xl:py-24">
        {/* Heading & Site for Pc */}
        <div className="w-full h-fit xl:flex justify-between items-center gap-10">
          <h1
            ref={(el) => (headingRef.current[0] = el)}
            className="w-[300px] sm:w-[600px] md:w-[700px] font-['Inter_Reg'] text-[#E7E8E0] text-left text-[30px] sm:text-[50px] md:text-[60px] leading-9 sm:leading-13 md:leading-16 tracking-[-0.5px]"
          >
            Join The Skincare Community Now.
          </h1>

          <div
            ref={(el) => (headingRef.current[1] = el)}
            className="hidden w-full xl:w-fit h-fit xl:flex flex-col items-end sm:items-start justify-center leading-6 sm:leading-8 md:leading-10"
          >
            <h6 className="font-['Inter_Reg'] text-[#E7E8E0] text-[14px] sm:text-[20px] md:text-[30px] tracking-[-0.5px]">
              Get in Touch
            </h6>
            <h1 className="font-['Inter_Reg'] text-[#E7E8E0] text-[30px] sm:text-[50px] md:text-[60px] tracking-[-0.5px]">
              contact.skincare.com
            </h1>
          </div>
        </div>

        {/* That for Pc view */}
        <div className="hidden xl:flex justify-between items-center gap-10 relative z-50">
          <div className="w-fit h-fit flex items-center justify-between gap-32">
            {SocialLinks.map(({ title }, index) => (
              <div className="group w-fit h-fit cursor-pointer overflow-hidden">
                <div
                  key={index}
                  ref={(el) => (pcLinksRef.current[index] = el)}
                  className="group w-fit h-fit relative flex flex-col items-center justify-center transition-all duration-300 ease-in-out"
                >
                  <h4 className="font-['Inter_Reg'] text-[#EFF5E1] text-[14px] transition-transform duration-300 ease-in-out group-hover:-translate-y-[150%]">
                    {title}
                  </h4>
                  <h4 className="font-['Inter_Reg'] text-[#EFF5E1] text-[14px] absolute top-[150%] transition-transform duration-300 ease-in-out group-hover:-translate-y-[150%]">
                    {title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          <div className="w-fit h-fit flex items-center justify-between gap-32">
            {PolicyLinks.map(({ title }, index) => (
              <div className="group w-fit h-fit cursor-pointer overflow-hidden">
                <div
                  key={index}
                  ref={(el) =>
                    (pcLinksRef.current[index + SocialLinks.length] = el)
                  }
                  className="group w-fit h-fit relative flex flex-col items-center justify-center transition-all duration-300 ease-in-out"
                >
                  <h4 className="font-['Inter_Reg'] text-[#EFF5E1] text-[14px] transition-transform duration-300 ease-in-out group-hover:-translate-y-[150%]">
                    {title}
                  </h4>
                  <h4 className="font-['Inter_Reg'] text-[#EFF5E1] text-[14px] absolute top-[150%] transition-transform duration-300 ease-in-out group-hover:-translate-y-[150%]">
                    {title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* That for mobile view */}
        <div className="xl:hidden w-full h-fit flex items-center justify-between gap-5">
          {SocialLinks.map(({ title }, index) => (
            <div className="group w-fit h-fit cursor-pointer overflow-hidden">
              <div
                key={index}
                ref={(el) => (mobileLinksRef.current[index] = el)}
                className="group w-fit h-fit relative flex flex-col items-center justify-center transition-all duration-300 ease-in-out"
              >
                <h4 className="font-['Inter_Reg'] text-[#EFF5E1] text-[14px] transition-transform duration-300 ease-in-out group-hover:-translate-y-[150%]">
                  {title}
                </h4>
                <h4 className="font-['Inter_Reg'] text-[#EFF5E1] text-[14px] absolute top-[150%] transition-transform duration-300 ease-in-out group-hover:-translate-y-[150%]">
                  {title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* That for mobile view */}
        <div
          ref={emailMobileRef}
          className="xl:hidden w-full h-fit flex flex-col items-end sm:items-start justify-center leading-6 sm:leading-8 md:leading-10"
        >
          <h6 className="font-['Inter_Reg'] text-[#E7E8E0] text-[14px] sm:text-[20px] md:text-[30px] tracking-[-0.5px]">
            Get in Touch
          </h6>
          <h1 className="font-['Inter_Reg'] text-[#E7E8E0] text-[30px] sm:text-[50px] md:text-[60px] tracking-[-0.5px]">
            contact.skincare.com
          </h1>
        </div>

        {/* That for mobile view */}
        <div className="xl:hidden w-full h-fit flex items-center justify-between gap-5">
          {PolicyLinks.map(({ title }, index) => (
            <div className="group w-fit h-fit cursor-pointer overflow-hidden">
              <div
                key={index}
                ref={(el) =>
                  (mobileLinksRef.current[index + SocialLinks.length] = el)
                }
                className="w-fit h-fit relative flex flex-col items-center justify-center transition-all duration-300 ease-in-out"
              >
                <h4 className="font-['Inter_Reg'] text-[#EFF5E1] text-[14px] transition-transform duration-300 ease-in-out group-hover:-translate-y-[150%]">
                  {title}
                </h4>
                <h4 className="font-['Inter_Reg'] text-[#EFF5E1] text-[14px] absolute top-[150%] transition-transform duration-300 ease-in-out group-hover:-translate-y-[150%]">
                  {title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h1
        ref={bgTextRef}
        className="w-full font-['Inter_Bold'] text-[#35433E] text-[80px] sm:text-[150px] md:text-[200px] lg:text-[250px] xl:text-[310px] text-center absolute bottom-[-50px] sm:bottom-[-100px] md:bottom-[-130px] lg:bottom-[-160px] xl:bottom-[-200px] left-[-10px] sm:left-[-20px] md:left-[-30px] lg:left-[-40px] whitespace-nowrap"
      >
        SKINCARE
      </h1>
    </footer>
  );
}

export default Footer;
