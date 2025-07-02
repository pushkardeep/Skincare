import React, { useEffect } from "react";

// Components
import Part_1 from "../Components/Landing_Page_Parts/Part_1";
import Part_2 from "../Components/Landing_Page_Parts/Part_2";
import Part_3 from "../Components/Landing_Page_Parts/Part_3";
import Part_4 from "../Components/Landing_Page_Parts/Part_4";
import Part_5 from "../Components/Landing_Page_Parts/Part_5";
import Part_6 from "../Components/Landing_Page_Parts/Part_6";
import Footer from "../Components/Footer";

// Gsap for animations
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Lenis for Smooth Scroll
import ReactLenis, { useLenis } from "lenis/react";

function Landing() {
  const lenis = useLenis();

  // Updates ScrollTrigger on every Lenis scroll
  useEffect(() => {
    lenis?.on("scroll", () => ScrollTrigger.update());

    return () => {
      lenis?.off();
    };
  }, [lenis]);

  // Refreshes ScrollTrigger on every window resize
  useEffect(() => {
    const resize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [lenis]);

  return (
    <>
      <ReactLenis root />
      <div className="main w-screen h-fit relative overflow-hidden">
        <Part_1 />
        <Part_2 />
        <Part_3 />
        <Part_4 />
        <Part_5 />
        <Part_6 />
        <Footer />
      </div>
    </>
  );
}

export default Landing;
