import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';

const HeroSection = () => {
  const textRef = useRef(null);
  const ctaRef = useRef(null);
  useEffect(() => {
    const words = textRef.current.textContent.split(" ");
    textRef.current.innerHTML = words
      .map(word => `<span class="inline-block overflow-hidden"><span class="inline-block translate-y-full">${word}&nbsp;</span></span>`)
      .join("");

    gsap.to(".translate-y-full", {
      y: 0,
      opacity: 1,
      duration: .5,
      stagger: 0.1,
      ease: "expo.out",
    });
    // Animate CTA buttons
    gsap.fromTo(
      ctaRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: .5, delay: 1, ease: "power2.out" }
      );
    }, []);



  return (
    <div className='h-screen flex justify-center  items-center'>
      <div className='absolute'></div>
      <div className="flex inset-0 -z-10 overflow-hidden">
        <div className="absolute -z-10 inset-0 "></div>
        <div className="absolute -z-9 top-36 right-0 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute -z-9 top-[120vh] left-5 md:top-[90vh] md:left-[30%] lg:left-4 w-52 h-52 md:w-96 md:h-96 bg-blue-600 rounded-full filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className=" hidden md:block absolute -z-9 md:top-[40%] md:left-2.5 lg:left-1/3 w-5 md:w-96 md:h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-10 animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>
      <div className=" text-center">
        <h1 className='text-6xl font-bold ' ref={textRef}>Hire Deelolade</h1>
        <p className="text-xl sm:text-2xl mt-4 text-gray-300">
          The Best Full Stack Developer
        </p>
        <p className="text-lg sm:text-xl mt-2 text-gray-400">
          Building fast, modern, and scalable web apps that get results.
        </p>
        
        {/* CTA Buttons */}
        <div ref={ctaRef} className="mt-8 flex flex-wrap gap-4 justify-center">
          <a
            href="#projects"
            className="bg-indigo-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-indigo-700 transition"
          >
            View My Work
          </a>
          <a
            href="mailto:your@email.com"
            className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-full text-lg font-medium hover:bg-indigo-600 hover:text-white transition"
          >
            Let's Talk
          </a>
        </div>
      </div>
      
    </div>
  )
}

export default HeroSection