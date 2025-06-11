import { useState, useEffect, useRef } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";
import { Link } from "react-router-dom";
import resume from "/Deelolade.pdf";
import { GiHamburgerMenu } from "react-icons/gi";
import gsap from "gsap";

const Navbar = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const navRefs = useRef([]);
  const dropdownRefs = useRef([]);
  navRefs.current = [];
  dropdownRefs.current = [];
  const navlinks = ["Home", "About", "Projects", "Contact"];

  const addToRefs = (element) => {
    if (element && !navRefs.current.includes(element)) {
      navRefs.current.push(element);
    }
  };
  const addToDropDownRefs = (element) => {
    if (element && !dropdownRefs.current.includes(element)) {
        dropdownRefs.current.push(element);
    }
  };
  useEffect(()=>{
    if (showDropDown && dropdownRefs.current.length > 0) {
        gsap.from(dropdownRefs.current, {
          y: -100,
          opacity: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "back",
        });
      }
    }, [showDropDown]);
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(navRefs.current, {
      y: -100,
      opacity: 1,
      stagger: 0.1,
      duration: 0.3,
      ease: "power2.out",
    });
    tl.to(navRefs.current, {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 0.3,
      ease: "power2.out",
    });
  }, []);
  return (
    <div className="w-full bg-white border-b border-gray-200 fixed z-50">
      <nav className="flex justify-between items-center h-[8vh] max-w-6xl w-[100vw] mx-auto px-6 lg:px-7 xl:px-0   ">
        <div className="logo font-semibold text-xl text-gray-700 hover:text-black cursor-pointer">
          Deelolade
        </div>
        <ul className="nav-links w-[40%] md:flex justify-between items-center text-[16px] sm:hidden ">
          {navlinks.map((item) => (
            <Link
              key={item}
              ref={addToRefs}
              className="font-semibold rounded-lg text-gray-700 hover:text-black px-4 py-2 hover:bg-gray-100"
            >
              {item}{" "}
            </Link>
          ))}
        </ul>
        <div className="toggle-resume sm:hidden 2xl:flex space-x-5 items-center">
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
        <div className="sm:flex 2xl:hidden">
          <button className=" px-2 py-2 hover:bg-gray-200 rounded-lg" onClick={() => setShowDropDown((prev) => !prev)}>
            <GiHamburgerMenu className="text-xl" />
          </button>
        </div>
        {showDropDown && (
          <div  className="dropdown-menu flex flex-col  justify-start fixed top-[8vh] right-0  w-[100vw] h-[92vh]  backdrop-blur-3xl transition-transform ">
            <div className="mt-8 flex  flex-col justify-between items-center text-center  ">
                {
                    navlinks.map((item)=>(
                        <Link key={item} ref={addToDropDownRefs} to={`/${item.toLowerCase()}`} className="text-6xl font-black text-black mb-12 ">{item}</Link>

                    ))
                }
            </div>
            <div className="mt-8 flex xs:flex-col gap-4 justify-center">
              <a
                href="https://github.com/Deelolade/"
                className="border text-center flex justify-center items-center border-indigo-600 text-indigo-600 px-6 py-3 rounded-full text-lg font-medium hover:bg-indigo-600 hover:text-white transition"
                target="_blank"
              >
                <VscGithubInverted/>
              </a>
              <a
                href={resume}
                target="_blank"
                className=" flex justify-center items-center gap-3 border border-indigo-600 text-indigo-600 px-6 py-3 rounded-full text-lg font-medium hover:bg-indigo-600 hover:text-white transition"
              >
                View Resume <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
