import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Form from "../components/Form"
const Contact = () => {
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
    <div className='py-20 xs:px-2 xs:py-10'>
      <div className=" text-center my-10">
        <h1 className='hero-text xxs:text-3xl xs:text-4xl text-6xl font-bold text-gray-400 hover:text-black'>Contact</h1>
        <div className="hero-text mt-4">
          <p className="text-gray-400">Have an idea, job, or collab in mind?</p>
        <p className="text-gray-400">Send a message and let’s make it happen.</p>
        </div>
      </div>
      <Form/>
    </div>
  )
}

export default Contact