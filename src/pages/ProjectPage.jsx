import Projects from '../components/Project'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ProjectPage = () => {
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
        <h1 className='hero-text xxs:text-3xl xs:text-4xl text-6xl font-bold text-gray-400 hover:text-black'>My Projects</h1>
        <div className="mt-4">
          <p className='text-gray-400'>Just me, building stuff.</p>
        <p className='text-gray-400'>Here are a few things I’ve created. Always learning, always improving.</p>
        </div>
      </div>
      <Projects/>
    </div>
  )
}

export default ProjectPage