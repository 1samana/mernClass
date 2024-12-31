import React, { useState, useEffect } from "react";
import bgImage from "../assets/addbg.png";

function BookDisplay() {
  const [data, setData] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await fetch("/proxy/booklist", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      if (result.status === 200 && result.data) {
        setData(result.data);
      } else {
        console.error("Unexpected response format:", result);
      }
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
    <div className="flex-col justify-center items-center bg-purple-200" style={{ backgroundImage: `url(${bgImage})` }}>
    <p className="text-purple-700/80 font-extrabold text-4xl text-center pt-1">
          All Books
        </p>
    
    <div className="px-10 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 p-4">
    {data.length>0 && data.map((book) => (
   <div
   key={book._id}
   className="bg-purple-300 shadow-lg rounded-lg overflow-hidden border border-gray-200 p-4" 
 >
   <img
     src={`http://127.0.0.1:3000/uploads/${book.filename}`} 
     alt={book.title}
     className="w-full h-48 object-cover"
   />
   <div className="p-4">
     <h2 className="text-lg font-semibold text-purple-700 text-center">
       {book.title}
     </h2>
     <p className="text-gray-700 text-sm mb-2 text-center">
        {book.author}
     </p>
     <div className="items-center text-center mt-3">
     <button className="bg-purple-700 text-white px-4 py-2 rounded text-sm">
      View
     </button>
     <button className="bg-purple-700 text-white px-4 py-2 ml-2 rounded text-sm">
     Edit
     </button>
     </div>
   </div>
 </div>
))}
     </div>
     </div>
    </>
  )}

export default BookDisplay;
