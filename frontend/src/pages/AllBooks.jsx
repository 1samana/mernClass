import React from 'react'
import Navbar from '../component/Navbar'
import BookDisplay from '../component/BookDisplay'

function AllBooks() {
  return (
    <>
    <div className="h-5 bg-purple-200"></div>
    <div className="bg-purple-200">
        <Navbar className="absolute top-0 left-0 right-0 z-10" />
      </div>
      <BookDisplay/>
      </>
    
  )
}

export default AllBooks
