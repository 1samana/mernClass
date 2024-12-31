import React from 'react'
import AdminNavbar from './AdminNavbar'

function AdminDashboard() {
  return (
    <>
   <div className='flex'>
    <div>
    <AdminNavbar/>
    </div>
    <div className='flex-1 justify-center items-center bg-purple-500'>
      <h1>Admin Dashboard</h1>
    </div>
    </div>
    </>
  )
}

export default AdminDashboard
