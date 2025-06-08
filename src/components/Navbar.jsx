import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='w-full bg-white border-b border-gray-200 fixed z-50'>
            <nav className='flex justify-between items-center h-[8vh] max-w-6xl w-[100vw] mx-auto    '>
                <div className="logo font-semibold text-xl text-gray-700 hover:text-black cursor-pointer">
                    Deelolade
                </div>

                <ul className="nav-links w-[40%] flex justify-between items-center text-[16px]">
                    <Link className='font-semibold rounded-lg text-gray-700 hover:text-black px-4 py-2 hover:bg-gray-100 '>Home</Link>
                    <Link className='font-semibold rounded-lg text-gray-700 hover:text-black px-4 py-2 hover:bg-gray-100'>About</Link>
                    <Link className='font-semibold rounded-lg text-gray-700 hover:text-black px-4 py-2 hover:bg-gray-100'>Projects</Link>
                    <Link className='font-semibold rounded-lg text-gray-700 hover:text-black px-4 py-2 hover:bg-gray-100'>Contact</Link>
                </ul>
                <div className="toggle-resume flex space-x-5 items-center">
                    <button className='p-2 border border-gray-200 rounded-full'>
                        < FaExternalLinkAlt className=' text-lg ' />
                    </button>
                    <button className='p-2 border border-gray-200 rounded-full'>
                        < VscGithubInverted className=' text-xl ' />
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar