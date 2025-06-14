import imageupload from "../images/image-upload.png";
import quickGig from "../images/quick-gig.png";
import qrCode from "../images/qrcode-light.png";
import konga from "../images/konga.png";
import animation from "../images/animation-portfolio.png";
import { PiGoogleChromeLogo } from "react-icons/pi";
import { RiArrowRightUpLine } from "react-icons/ri";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Project = ({
  header,
  description,
  buttonOne,
  buttonTwo,
  image,
  learnMore,
  chromelink,
  ref
}) => {
   gsap.registerPlugin(ScrollTrigger);
  const containerRef =useRef(null)
useGSAP(()=>{
  const tl = gsap.timeline({
    scrollTrigger:{
      trigger:".project",
      start: "top 90%",
      // end:"10% 10%", end 
      // scrub: true auto-play
    }
  })
  tl.from(".project",{
    scale:0.9,
    duration:0.4,
    filter: "blur(5px)",
    ease:"power2.out"
  }) 
},{scope:containerRef})
  return (
    <>
      <section ref={containerRef} className=" mb-12 max-w-5xl xs:mx-3 md:mx-8 mx-auto border border-3 border-gray-300 rounded-2xl xs:p-4 p-8 pb-0">
        <div className=" project flex items-center flex-col">
          <h1 className="text-4xl xs:text-2xl xxs:text-2xl font-bold text-center mb-4">{header}</h1>
          <p className=" max-w-2xl text-center xxs:text-[13px] xs:text-[15px] text-lg text-gray-700">
            {description}{" "}
          </p>
          <div className=" flex gap-3 mt-4 mb-8">
            <a
              href={learnMore}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 bg-black font-semibold text-sm text-white rounded-lg space-x-3  flex items-center"
            >
              {buttonOne}
              <RiArrowRightUpLine className="scale-110 ms-1" />
            </a>
            <a
              href={chromelink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 group py-2 border font-semibold text-sm text-gray-700 rounded-lg flex items-center space-x-2"
            >
              <PiGoogleChromeLogo className="scale-110 me-1" />
              {buttonTwo}
            </a>
          </div>
        </div>
        <a
          href={chromelink}
          target="_blank"
          rel="noopener noreferrer"
          className="h-[50%] group "
        >
          <div className="w-full h-8  group bg-accent rounded-t-lg border border-b-0 text-sm">
            <div className="flex gap-2 p-2">
              <span className="size-3 rounded-full bg-gray-300 group-hover:bg-red-500  "></span>
              <span className="size-3 rounded-full bg-gray-300 group-hover:bg-yellow-500 "></span>
              <span className="size-3 rounded-full bg-gray-300 group-hover:bg-green-500 "></span>
            </div>
          </div>
          <div className="border-border bg-background  border border-r-0 border-b-0 border-l-0">
            <img
              src={image}
              className=" xs:h-[250px] lg:h-[350px] h-[400px] w-[1024px] z-1 mx-auto  max-w-full grayscale group-hover:grayscale-0 sm:block"
              alt=""
            />
          </div>
        </a>
      </section>
    </>
  );
};

const Projects = () => {


  return (
    <div className="min-h-screen min-w-screen relative  py-12">
      <Project
        header="QuickGig Freelance Marketplace"
        description={
          <>
            <b>QuickGig</b> is a mordern <b>freelance marketplace </b> MVP
            designed to streamline short-term gig hiring. Built for speed and
            usability. It connects <b>clients</b> with <b>Freelancers</b> in
            realtime.
          </>
        }
        buttonOne="Learn More"
        buttonTwo="Live Demo"
        image={quickGig}
        learnMore="https://github.com/Deelolade/quick-gig-mvp"
        chromelink="https://quick-gig-mvp.vercel.app/"
      />
      <Project
        header="Image management app"
        description={
          <>
            This image management app lets users <b>upload</b>, <b>view</b>, <b>rename</b>, and <b>delete images</b>. It’s built with the <b className="underline">MERN</b> stack, uses <b className="underline">Cloudinary</b> for file storage, and is deployed as a <b>monorepo</b> on Railway. My first time using <b>Railway</b> for hosting and I actually love it!
          </>
        }
        buttonOne="Learn More"
        buttonTwo="Live Demo"
        image={imageupload}
        learnMore="https://github.com/Deelolade/file-image-crud-app"
        chromelink="https://file-image-crud-app-production.up.railway.app/"
      />
      <Project
        header="QR Code Scanner & Generator"
        description={<>
        My handy <b>QR Code Scanner & Generator</b> lets you do both scan codes in a flash or create your own with ease. Whether you're sharing links, contact info, or just having fun, this tool has you covered. Built to be <b>fast</b>, <b>simple</b>, and a little bit <b>fun</b> too!

        </>}
        buttonOne="Learn More"
        buttonTwo="Live Demo"
        image={qrCode}
        learnMore="https://github.com/Deelolade/Qr-code-scanner"
        chromelink="https://qr-code-scanner-generator.vercel.app/"
      />
      <Project
        header="E-Commerce Website"
        description={<>
        I implemented key pages including the <b>Home page</b>, <b>Single Product page</b>, <b>Search Results page</b>, Shopping Cart, and Login all with proper routing. I used the <b className="underline">Context API</b> to manage state across components, and added features like <b className="underline">order tracking</b> and <b className="underline">dynamic price summaries</b> when items are incremented or decremented in the cart.

        </>}
        buttonOne="Learn More"
        buttonTwo="Live Demo"
        image={konga}
        learnMore="https://github.com/Deelolade/KongaProject"
        chromelink="https://konga-clone-two.vercel.app/"
      />
      <Project
        header="Random Animation"
        description="A fun little animation site I built while learning, just me playing around and bringing ideas to life!"
        buttonOne="Learn More"
        buttonTwo="Live Demo"
        image={animation}
        learnMore="https://github.com/Deelolade/animation-port"
        chromelink="http://animations-portfolio.vercel.app/"
      />
    </div>
  );
};

export default Projects;
