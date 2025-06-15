import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const About = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".hero-text", {
      y: "-300",
      opacity: 0,
      filter: "blur(5px)",
      stagger: { each: 0.2 },
      duration: 0.7,
      ease: "power2.out",
    });
    tl.from(".para", {
      filter: "blur(5px)",
      stagger: { each: 0.2 },
      duration: 0.7,
      ease: "power2.out",
    });
  });
  return (
    <div className="2xl:py-20 xs:py-10 px-2">
      <div className=" text-center my-10">
        <h1 className="hero-text xxs:text-3xl xs:text-4xl text-6xl font-bold text-gray-400 hover:text-black">
          About Me
        </h1>
      </div>
      <div className="border  border-gray-200 p-8 xs:p-4 max-w-6xl mx-auto rounded-2xl bg-white shadow-md">
  <p className="para text-gray-800 mb-6 text-[18px] leading-relaxed text-center">
    Hey, I’m <span className="font-semibold text-black">Oluwanishola Habeeb</span>, but most people just call me <span className="font-semibold text-black">Deelolade</span>. I’m a <span className="font-semibold text-black">full-stack developer</span> who loves building clean, fast, and user-friendly web apps.
    My tech journey started at <span className="font-semibold text-black">New Horizons Nigeria</span>, where I got my first real exposure to programming and web development. Since then, I’ve been diving deep into tools like <span className="font-semibold text-black">React.js</span>, <span className="font-semibold text-black">Next.js</span>, <span className="font-semibold text-black">Node.js</span>, <span className="font-semibold text-black">MongoDB</span>, and <span className="font-semibold text-black">Tailwind CSS</span>.
  </p>

  <p className="para text-gray-800 mb-6 text-[18px] leading-relaxed text-center">
    What really drives me is the balance of clean design and solid engineering. I aim to write code that’s efficient, maintainable, and built with the user in mind. Whether I’m building dashboards, integrating APIs, or designing responsive interfaces, I bring a mix of curiosity, care, and creativity to every line of code.
  </p>

  <p className="para text-gray-800 mb-6 text-[18px] leading-relaxed text-center">
    Outside of tech, I enjoy <span className="font-semibold text-black">sewing</span>  it’s my creative outlet. There’s something deeply satisfying about sketching an idea and bringing it to life. That mindset flows into my approach to development too: whether it’s fabric or code, I love crafting things that are thoughtful, beautiful, and useful.
  </p>

  <p className="para text-gray-800 text-[18px] leading-relaxed text-center">
    I’m always open to <span className="font-semibold text-black">collaborations</span>, new challenges, and opportunities that push me to grow. If you’re working on something exciting and need a dev who <span className="font-semibold text-black">genuinely cares about the details</span>. let’s connect.
  </p>
</div>

    </div>
  );
};

export default About;
