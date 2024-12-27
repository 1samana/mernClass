import React from 'react';
import bgImage from "../assets/hero.jpeg";
import Navbar from '../component/Navbar';
import DashboardPage from '../component/DahboardPage';

function HomePage() {
  return (
    <>
    
    <div className='h-5 bg-purple-200'></div>
      <div className='bg-purple-200'>

        <Navbar className="absolute top-0 left-0 right-0 z-10" />
       </div>
     <div className='h-screen w-full'>
     <DashboardPage/>
     </div>
    
    </>
  )
}

export default HomePage
