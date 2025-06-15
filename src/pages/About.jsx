import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const About = () => {
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
       },
  );
  return (
    <div className='pt-20'>
      <div className=" text-center my-10">
        <h1 className='hero-text xxs:text-3xl xs:text-4xl text-6xl font-bold text-gray-400 hover:text-black'>About Me</h1>
      </div>
    </div>
  )
}

export default About