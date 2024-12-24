import React from 'react';
import bgImage from "../assets/hero.jpeg";

const DahboardPage = () => {
  return (
    <>
    
    <div>
    <div  className="w-full  bg-cover bg-center   max-h-96 bg-no-repeat" 
            style={{ backgroundImage: `url(${bgImage})` }}>
        <div className=' w-full flex flex-col justify-center items-start h-96 bg-gradient-to-r from-blue-950/80 to-transparent'>
        <p className='ml-32 text-white text-start'>The worst University of the world</p>
        <h1 className='ml-32 text-white text-5xl font-bold'>Tribhuvan University</h1>
        </div>
    </div>
    <div className="w-auto h-24 absolute top-92 left-32 right-32 transform -translate-y-1/2 bg-white rounded-md shadow-md shadow-slate-950 flex flex-col justify-center items-center">
    <p className="text-black px-5">
            Tribhuvan University (TU) is the oldest and largest university in Nepal, established in 1959 with the goal of providing quality education to students from diverse backgrounds. TU offers a wide range of undergraduate, graduate, and doctoral programs across various fields of study, including science, arts, management, and engineering.
        </p> 
        <a href="" className=" text-blue-500 underline px-5 mb-3">Learn More About Tribhuvan University</a>
    </div>
    </div>

    </>
  )
}

export default DahboardPage
