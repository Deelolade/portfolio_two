const Project =({header, description, buttonOne, buttonTwo})=>{
    return(
        <>
            <section className=' mb-12 max-w-5xl mx-auto border border-3 border-gray-300 rounded-xl p-8'>
                <div className=" flex items-center flex-col">
                    <h1 className="text-4xl font-bold text-center mb-4">{header}</h1>
                    <p className=" max-w-2xl text-center text-lg text-gray-700">{description} </p>
                    <div className=" flex  gap-3 mt-4">
                        <button className='px-3 py-2 bg-black font-semibold text-sm text-white rounded-lg'>{buttonOne}</button>
                        <button className='px-3 py-2 border font-semibold text-sm text-gray-700 rounded-lg'>{buttonTwo}</button>
                    </div>
                </div>
                <div className="">

                </div>
            </section>
        </>
    )
}

const Projects = () => {
  return (
    <div className='min-h-screen min-w-screen relative  py-12'>
        <Project header="QuickGig Freelance Marketplace"
        description='QuickGig is a mordern freelance marketplace MVP designed to streamline short-term gig hiring. Built for speed and usability. It connects clients with Freelancers in realtime.'
        buttonOne="Learn More"
        buttonTwo="Live Demo"
        />
        <Project header="QuickGig Freelance Marketplace"
        description='QuickGig is a mordern freelance marketplace MVP designed to streamline short-term gig hiring. Built for speed and usability. It connects clients with Freelancers in realtime.'
        buttonOne="Learn More"
        buttonTwo="Live Demo"
        /><Project header="QuickGig Freelance Marketplace"
        description='QuickGig is a mordern freelance marketplace MVP designed to streamline short-term gig hiring. Built for speed and usability. It connects clients with Freelancers in realtime.'
        buttonOne="Learn More"
        buttonTwo="Live Demo"
        /><Project header="QuickGig Freelance Marketplace"
        description='QuickGig is a mordern freelance marketplace MVP designed to streamline short-term gig hiring. Built for speed and usability. It connects clients with Freelancers in realtime.'
        buttonOne="Learn More"
        buttonTwo="Live Demo"
        />
    </div>
  )
}

export default Projects