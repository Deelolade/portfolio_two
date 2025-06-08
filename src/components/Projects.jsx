import React from 'react'
import BgImage from "./Background"

const Projects = () => {
    return (
        <div className='min-h-screen min-w-screen relative'>
            <div className="max-w-[1500px]  relative   h-screen mx-auto flex justify-between items-center">
                <h1 className='text-7xl font-bold text-center'>My Projects.</h1>
                <div className="  flex md:flex-row flex-col pr-40 gap-10 h-[65%] items-center overflow-x-auto scroll-smooth scrollbar-hide md:w-[65%] whitespace-nowrap transition ">
                    <div className=" bg-red-400 ">
                        <div className="card w-[35vh] h-[30vh] border border-gray-200 rounded-2xl transform transition-transform duration-300 origin-center hover:scale-y-150"> </div>
                    </div>
                    <div className=" bg-red-400 ">
                        <div className="card w-[35vh] h-[30vh] border border-gray-200 rounded-2xl transform transition-transform duration-300 origin-center hover:scale-y-150"> </div>
                    </div>
                    <div className=" bg-red-400 ">
                        <div className="card w-[35vh] h-[30vh] border border-gray-200 rounded-2xl transform transition-transform duration-300 origin-center hover:scale-y-150"> </div>
                    </div>
                    <div className=" bg-red-400 ">
                        <div className="card w-[35vh] h-[30vh] border border-gray-200 rounded-2xl transform transition-transform duration-300 origin-center hover:scale-y-150"> </div>
                    </div>
                    <div className=" bg-red-400 ">
                        <div className="card w-[35vh] h-[30vh] border border-gray-200 rounded-2xl transform transition-transform duration-300 origin-center hover:scale-y-150"> </div>
                    </div>
                    <div className="absolute right-0 top-0 h-full w-40 backdrop-blur-3xl bg-gradient-to-l  rounded-l-3xl from-indigo-200/10 to-indigo-400/0 pointer-events-none z-10" />
                </div>
            </div>
        </div>
    )
}

export default Projects