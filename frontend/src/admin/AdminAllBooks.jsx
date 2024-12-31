import React, { useState, useEffect } from "react";
import AdminNavbar from "./AdminNavbar";
import { toast } from "react-toastify";

function AdminAllBooks() {
  const [data, setData] = useState([]);
  async function deleteBook(id) {
      try {
        const response = await fetch(`/proxy/bookdelete/${id}`, {
          method: "DELETE",
        });
    
        const result = await response.json();
        toast.success(result.msg);
        //fetchBooks();
        setData(data.filter((book) => book._id !== id));
      } catch (error) {
        toast.error(error.message || "An error occurred");
      }
    }

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
    <div className='flex'>
    <div>
    <AdminNavbar/>
    </div>
    <div className='flex-1 flex-col justify-center items-center '>
          <h1 className='text-5xl text-purple-700 font-extrabold text-center my-5'>All Books</h1>
          <span>Total Books: {data.length}</span>
          <div className='mr-10 ml-10'>
         
      <table className="min-w-full table-auto border-collapse border border-gray-200">
        <thead>
          <tr className="bg-purple-500 text-white">
            
          <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Author</th>
            <th className="px-4 py-2">Publisher</th>
            <th className="px-4 py-2 text-nowrap">Publication Date</th>
            <th className="px-4 py-2">Genre</th>
            <th className="px-4 py-2">lannguage</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((book) => (
              <tr key={book._id} className="bg-white">
                <td className="px-4 py-2">
                  <img
                    src={`http://127.0.0.1:3000/uploads/${book.filename}`}  
                    alt={book.title}
                    className="w-24 h-24 object-cover border rounded-md"
                  />
                </td>
                <td className="px-4 py-2">{book.title}</td>
                <td className="px-4 py-2">{book.description}</td>
                <td className="px-4 py-2">{book.author}</td>
                <td className="px-4 py-2">{book.publisher}</td>
                <td className="px-4 py-2">
                  {new Date(book.publicationDate).toLocaleDateString()}
                </td>
                <td className="px-4 py-2">
                  {book.genre && book.genre.length > 0
                    ? book.genre.join(", ")
                    : "N/A"}
                </td>
                <td className="px-4 py-2">
                  {book.lannguage && book.lannguage.length > 0
                    ? book.lannguage.join(", ")
                    : "N/A"}
                </td>
                
                <td className="px-4 py-2 flex items-center justify-center mt-6 ">
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => deleteBook(book._id)}>
                    Delete
                  </button>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
                    Edit
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center py-4">
                No books available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    </div>
    </div>
  );
}

export default AdminAllBooks;
