import React from 'react'
import {FaBook, FaDoorOpen, FaHome, FaShoppingBag, FaUser} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function AdminNavbar() {

    const navigate = useNavigate()

  return (
    <>
    <nav className='w-64 bg-purple-200 h-screen'>
        <ul className='space-y-4'>
            <li className='p-5 mx-3 rounded-lg hover:bg-purple-400 transition-all duration-700 flex items-center'  ><FaHome className='mr-2 text-purple-900'/>Dashboard</li>
            <li className='p-5 mx-3 rounded-lg hover:bg-purple-400 transition-all duration-700 flex items-center'><FaUser className='mr-2 text-purple-900' />Users</li>
            <Link to='/admin/books' className='p-5 mx-3 rounded-lg hover:bg-purple-400 transition-all duration-700 flex items-center'><FaBook className='mr-2 text-purple-900'/>Books</Link>
            <li className='p-5 mx-3 rounded-lg hover:bg-purple-400 transition-all duration-700 flex items-center'><FaShoppingBag className='mr-2 text-purple-900'/>Orders</li>
            <li className='p-5 mx-3 rounded-lg hover:bg-purple-400 transition-all duration-700 flex items-center'><FaDoorOpen className='mr-2 text-purple-900'/>Logout</li>
        </ul>

    </nav>
    
    </>
  )
}

export default AdminNavbar
