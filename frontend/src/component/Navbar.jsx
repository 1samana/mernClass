import React from 'react'

function Navbar() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 h-14 w-full flex justify-between items-center">
        <div>
            <p className='text-2xl font-bold text-blue-600 p-3 ml-4'>Logo</p>
            

        </div>
        <div className="flex space-x-4 items-center justify-center font-semibold p-3 list-none mr-4">
            <li className='hover:text-blue-600 '>Home</li>
            <li className='hover:text-blue-600'>About</li>
            <li className='hover:text-blue-600'>Services</li>
        </div>
        </nav>
  )
}

export default Navbar
