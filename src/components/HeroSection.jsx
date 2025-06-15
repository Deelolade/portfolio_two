import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

const HeroSection = () => {
  // gsap.registerPlugin(ScrollTrigger);
  const containerRef = useRef(null);
  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from(".hero-text", {
        y: "-300",
        opacity: 0,
        filter: "blur(5px)",
        stagger: {each: 0.2},
        duration: 0.7,
        ease: "power2.out",
      });
      // ScrollTrigger.matchMedia({
      // "(min-width: 768px)": ()=>{
      //   const leaveTl = gsap.timeline({
      //   scrollTrigger: {
      //   trigger: ".hero-text",
      //   start: "bottom",
      //   end: "top center",
      //   scrub: true,
      //   markers: true, // Uncomment to debug
      //     }
      //   });

      //   leaveTl.to(".hero-text", {
      //     filter: "blur(5px)",
      //     stagger: {
      //       each :0.3
      //     },
      //     duration: 0.9,
      //     ease: "power2.out",
      //       });
      // }
      // })
    },
    { scope: containerRef }
  );
  const resume = "/Deelolade.pdf"
  return (
    <div className="min-h-screen flex justify-center  items-center md:px-4">
      <div className=" text-left max-w-5xl xxs:mt-16" ref={containerRef}>
        <h1 className="hero-text xxs:text-3xl xs:text-4xl text-6xl font-bold text-gray-700 ">
          Hire Deelolade.
        </h1>
        <p className=" hero-text xxs:text-3xl xs:text-4xl text-6xl font-bold text-gray-700">
          The Best Full-Stack Developer.
        </p>
        <p className="max-w-3xl xxs:text-[15px] xxs:text-left xs:text-lg hero-text text-lg sm:text-xl xs:mt-2 2xl:mt-4 text-gray-400">
          I build fast, scalable <b className="underline">web applications</b>{" "}
          using <b className="">React</b>,<b className="">Next.js</b>,{" "}
          <b className="">Node.js</b>,<b className=""> MongoDB</b>, and{" "}
          <b className="">Tailwind CSS</b>. I trained at{" "}
          <b className="underline">New Horizons Nigeria</b>, where I developed a
          strong foundation in web development and started building real
          solutions for <b>startups</b> and <b>small businesses</b>.
        </p>
        {/* CTA Buttons */}
        <div className="hero-text  mt-8 flex flex-wrap 2xl:gap-4 xs:justify-center justify-start">
          <a
            href={resume}
            className="bg-gray-700 text-white xxs:px-3 xs:py-2 px-6 py-2 rounded-md text-lg font-medium hover:bg-black transition"
          >
           Let’s Build
          </a>
          
          <a
            href="mailto:habeeboluwanishola13@gmail.com"
            className="border border-black text-gray-700 px-6 xs:py-2 py-2 rounded-md text-lg font-medium hover:bg-black hover:text-white transition"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
