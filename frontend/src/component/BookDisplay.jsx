import React, { useState, useEffect } from "react";

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
    <div>
      <table className="min-w-full table-auto border-collapse border border-gray-200">
        <thead>
          <tr className="bg-purple-500 text-white">
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Author</th>
            <th className="px-4 py-2">Publisher</th>
            <th className="px-4 py-2">Publication Date</th>
            <th className="px-4 py-2">Genre</th>
            <th className="px-4 py-2">lannguage</th>
            <th className="px-4 py-2">Image</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((book) => (
              <tr key={book._id} className="bg-white">
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
                <td className="px-4 py-2">
                  <img
                    src={`http://127.0.0.1:3000/uploads/${book.filename}`}  // Image path from the database
                    alt={book.title}
                    className="w-24 h-24 object-cover border rounded-md"
                  />
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
  );
}

export default BookDisplay;
