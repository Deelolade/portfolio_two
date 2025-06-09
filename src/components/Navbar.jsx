import { useState, useEffect, useRef } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";
import { Link } from "react-router-dom";
import resume from "../../public/Deelolade.pdf";
import { GiHamburgerMenu } from "react-icons/gi";
import gsap from "gsap";


const Navbar = () => {
    const [showDropDown, setShowDropDown] = useState(false);
    const headingsRef = useRef(null);
  const buttonsRef = useRef([]);
  useEffect(() => {
    if (showDropDown) {
      gsap.from(headingsRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out",
      });

      gsap.from(buttonsRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        delay: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    }
  }, [showDropDown]);
    return (
        <div className="w-full bg-white border-b border-gray-200 fixed z-50">
            <nav className="flex justify-between items-center h-[8vh] max-w-6xl w-[100vw] mx-auto px-5 md:px-0   ">
                <div className="logo font-semibold text-xl text-gray-700 hover:text-black cursor-pointer">
                    Deelolade
                </div>

                <ul className="nav-links w-[40%] md:flex justify-between items-center text-[16px] hidden ">
                    <Link className="font-semibold rounded-lg text-gray-700 hover:text-black px-4 py-2 hover:bg-gray-100 " ref={headingsRef}>
                        Home
                    </Link>
                    <Link className="font-semibold rounded-lg text-gray-700 hover:text-black px-4 py-2 hover:bg-gray-100">
                        About
                    </Link>
                    <Link className="font-semibold rounded-lg text-gray-700 hover:text-black px-4 py-2 hover:bg-gray-100">
                        Projects
                    </Link>
                    <Link className="font-semibold rounded-lg text-gray-700 hover:text-black px-4 py-2 hover:bg-gray-100">
                        Contact
                    </Link>
                </ul>
                <div className="toggle-resume hidden md:flex space-x-5 items-center">
                    <div className="relative group  p-2 border border-gray-200 rounded-full">
                        <a href={resume} className="" target="_blank">
                            <FaExternalLinkAlt className=" text-lg " />
                        </a>
                        <div className="absolute left-1/2 -translate-x-1/2 mt-4 w-max bg-gray-800 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                            View My Resume
                        </div>
                    </div>
                    <div className="relative group  p-2 border border-gray-200 rounded-full">
                        <a
                            href="https://github.com/Deelolade/"
                            className=""
                            target="_blank"
                        >
                            <VscGithubInverted className=" text-xl " />
                        </a>
                        <div className="absolute left-1/2 -translate-x-1/2 mt-4 w-max bg-gray-800 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                            GitHub
                        </div>
                    </div>
                </div>
                <div className="flex md:hidden">
                    <button onClick={() => setShowDropDown(!showDropDown)}>
                        <GiHamburgerMenu className="text-xl" />
                    </button>
                </div>
                {showDropDown && (
                    <div className="dropdown-menu flex flex-col  justify-start fixed top-[8vh] right-0 bg-gray-100 w-[100vw] h-[92vh]  backdrop-blur-3xl transition-transform ">
                        <div className="mt-8 flex  flex-col justify-between items-center text-center h-[50%] ">
                            <h1 className="text-5xl font-bold text-gray-700 ">Home</h1>
                            <h1 className="text-5xl font-bold text-gray-700">About Me </h1>
                            <h1 className="text-5xl font-bold text-gray-700">Projects</h1>
                            <h1 className="text-5xl font-bold text-gray-700">Contact</h1>
                        </div>
                        <div className="mt-8 flex flex-wrap gap-4 justify-center">
                            <a
                                href="https://github.com/Deelolade/"
                                className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-full text-lg font-medium hover:bg-indigo-600 hover:text-white transition"
                                target="_blank"
                            >
                                My GitHub
                            </a>
                            <a
                                href="mailto:your@email.com"
                                className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-full text-lg font-medium hover:bg-indigo-600 hover:text-white transition"
                            >
                                View Resume
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;
