import React from "react";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  const footerLinks = ["Home", "About", "Projects", "Contact"];
  const footerIcons = [
  { id: "email", icon: <MdEmail />, add:"mailto:habeeboluwanishola13@gmail.com" },
  { id: "twitter", icon: <BsTwitterX />, add:"https://x.com/deelolade" },
  { id: "linkedin", icon: <FaLinkedin />, add:"https://www.linkedin.com/in/deelolade/" },
  { id: "instagram", icon: <FaInstagram />, add:"https://www.instagram.com/deelolade/" },
  ];
  const time = new Date().getFullYear();
  return (
    <div className="w-full border-t border-gray-200">
      <footer className="lg:h-auto 2xl:h-[30vh] py-4  flex flex-col  justify-center  items-center max-w-6xl mx-auto ">
        <div className="">
          {footerLinks.map((item) => (
            <Link
              key={item}
              to={
                item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()} `
              }
              className={`relative inline-block hover-underline xs:text-[13px]  font-semibold rounded-lg text-gray-400 hover:text-black px-4 py-2 hover:bg-gray-10`}
            >
              {item}
            </Link>
          ))}
        </div>
        <div className=" mt-6">
          {footerIcons.map(({icon, id, add}) => (
            <a
              href={add}
              key={id}
              className={`1relative inline-block font-semibold scale-150 rounded-sm text-gray-400  px-1 mx-4 py-1 hover:bg-gray-100 hover:text-gray-500`}
            >
              {icon}{" "}
            </a>
          ))}
        </div>
        <div className=" mt-6 xs:px-2">
          <p className="text-center mb-3 text-gray-400">&copy; {time}</p>
          <p className="text-center max-w-3xl text-gray-400 xs:text-[13px]">
            Built with <b className="">ReactJS</b>, <b>Tailwind CSS</b>, and <b>GSAP</b> for
            smooth animations. Routing handled by <b>React Router DOM</b>. All
            pages are handcrafted and responsive.Deployed with <b>Vercel</b>.{" "}
            <br /> Code available on{" "}
            <a href="https://github.com/Deelolade/">
              <b>GitHub</b>
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
