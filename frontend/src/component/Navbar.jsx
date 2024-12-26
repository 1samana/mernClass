import React from 'react';
import Logo from "../assets/logo_GO.png";
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  return (
    <>
    
      <nav className="w-320 rounded-full mx-auto h-14 flex justify-between items-center px-4 bg-purple-300 ">
        <div>
          <img src={Logo} alt='logo' className='h-16 w-25 pl-1' />
        </div>
        <div className="flex space-x-8 items-center font-semibold list-none ">
          <li className='text-white hover:text-purple-600 'onClick={()=>navigate("/homee")}>Home</li>
          <li className='text-white hover:text-purple-600 ml-10'>About</li>
          <li className='text-white hover:text-purple-600 ml-4'>Services</li>
          <li className='text-white hover:text-purple-600 ml-4 pr-9' onClick={()=>navigate("/addbook")}>Add Book</li>
        </div>
        <div className="flex space-x-8 items-center pr-3 ">
          <FaUserCircle className="w-6 h-6 text-white "/>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
