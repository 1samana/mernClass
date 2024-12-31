import React from 'react'
import AdminNavbar from './AdminNavbar'
import { Route, Routes } from 'react-router-dom'
import AdminAllBooks from './AdminAllBooks'


function AdminDashboard() {
  return (
    <>
   <div className='flex'>
    <div>
    <AdminNavbar/>
    </div>
    <div className='flex-1 justify-center items-center bg-purple-500'>
      <Routes>
        <Route path="/admin/books" element={<AdminAllBooks />} />

      </Routes>
      
    </div>
    </div>
    </>
  )
}

export default AdminDashboard
