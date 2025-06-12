import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import resume from "../../public/Deelolade.pdf"
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
const HeroSection = () => {
  gsap.registerPlugin(ScrollTrigger) 
  const containerRef = useRef(null);
  useGSAP(()=>{
    const tl = gsap.timeline();
    tl.from(".hero-text",{
      y: "-300",
          opacity: 0,
          filter:"blur(5px)",
          stagger: {
            each :0.2
          },
          duration: 0.7,
          ease: "power2.out",
    })
    ScrollTrigger.matchMedia({
    "(min-width: 768px)": ()=>{
      const leaveTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-text",
          start: "  top center ",   // when top of .hero-text hits center of viewport
          end: "bottom top",     // when bottom of .hero-text hits top of viewport
          scrub: true,
        }
      });
      
      leaveTl.to(".hero-text", {
        filter: "blur(5px)",
        opacity: 1,
        stagger: {
          each :0.3
        },
        duration: 0.9,
        ease: "power2.out",
          });
    }  
    })

  },{scope:containerRef})


  return (
    <div className='h-screen flex justify-center  items-center xs:px-4'>
      <div className=" text-left max-w-5xl" ref={containerRef} >
        <h1 className='hero-text xs:text-4xl text-6xl font-bold ' >Hire Deelolade.</h1>
        <p className=" hero-text xs:text-4xl text-6xl font-bold ">
          The Best Full-Stack Developer.
        </p>
        <p className="max-w-3xl xs:text-lg hero-text text-lg sm:text-xl mt-2 text-gray-400">
        I’m a freelance <b className='hover:text-black transition'>full-stack developer</b> dedicated to building modern, scalable <b  className='hover:text-black transition'>web applications</b>. <br /> I specialize in creating smooth user experiences and performance-optimized digital products for <b className='hover:text-black transition'>startups</b> and <b className='hover:text-black transition'>businesses</b> that value quality and speed.
        </p>
        
        {/* CTA Buttons */}
        
        <div  className="hero-text  mt-8 flex flex-wrap gap-4 justify-start">
          <a
            href={resume}
            className="bg-gray-700 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-black transition"
          >
            View My Work
          </a>
          <a
            href="mailto:habeeboluwanishola13@gmail.com"
            className="border border-black text-gray-700 px-6 py-3 rounded-md text-lg font-medium hover:bg-black hover:text-white transition"
          >
            Let's Talk
          </a>
        </div>
      </div>
      
    </div>
  )
}

export default HeroSection