import { useState } from "react";
import React from "react";
import Select from "react-select";
import Navbar from "../component/Navbar";
import GirlOne from "../assets/girl-03.png";
import GirlTwo from "../assets/girl-02.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AddBook() {
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    genre: "",
    description: "",
    lannguage: "",
    publisher: "",
    publicationDate: "",
    bookCover: null,
  });

  const genres = [
    { value: "fiction", label: "Fiction" },
    { value: "non-fiction", label: "Non-Fiction" },
    { value: "mystery", label: "Mystery" },
    { value: "fantasy", label: "Fantasy" },
    { value: "romance", label: "Romance" },
    { value: "thriller", label: "Thriller" },
    { value: "science-fiction", label: "Science Fiction" },
    { value: "biography", label: "Biography" },
    { value: "historical-fiction", label: "Historical Fiction" },
    { value: "self-help", label: "Self-Help" },
  ];

  const lannguages = [
    { value: "English", label: "English" },
    { value: "Nepali", label: "Nepali" },
    { value: "Hindi", label: "Hindi" },
    { value: "Spanish", label: "Spanish" },
    { value: "Japanese", label: "Japanese" },
    { value: "Chinese", label: "Chinese" },
    { value: "Portuguese", label: "Portuguese" },
    { value: "Russian", label: "Russian" },
  ];

  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedlannguages, setSelectedlannguages] = useState([]);
  const navigate = useNavigate();

  const handleSelectChange = (selected) => {
    const genreValues = selected.map((option) => option.value);
    setSelectedGenres(selected);
    setBookData((prevData) => ({
      ...prevData,
      genre: genreValues,
    }));
  };

  const handleLangSelect = (selected) => {
    const lannguageValues = selected.map((option) => option.value);
    setSelectedlannguages(selected);
    setBookData((prevData) => ({
      ...prevData,
      lannguage: lannguageValues,
    }));
  };

  async function addBook(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", bookData.title);
    formData.append("author", bookData.author);
    formData.append("genre", bookData.genre); 
    formData.append("description", bookData.description);
    formData.append("lannguage", bookData.lannguage); 
    formData.append("publisher", bookData.publisher);
    formData.append("publicationDate", bookData.publicationDate);
    if (bookData.bookCover) {
      formData.append("bookCover", bookData.bookCover);
    }

    try {
      const result = await fetch("/proxy/book", {
        method: "POST",
        body: formData, // Use FormData
      });

      const data = await result.json();
      if (data.status === 200) {
        toast.success(data.msg);
        navigate("/homee");
      } else {
        toast.error(data.error);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <>
      <div className="">
        <div className="h-5 bg-white"></div>
        <Navbar className="absolute top-0 left-0 right-0 z-10" />
        <p className="text-purple-700/80 font-extrabold text-4xl text-center mt-3 pt-1">
          Add Book
        </p>
        <div className="flex justify-center items-center min-h-fit pt-1">
          <img
            src={GirlOne}
            alt="girlOne"
            className="absolute bottom-0 left-0 w-128 h-128 object-contain"
          />
          <form
            encType="multipart/form-data"
            className="top-0 flex flex-col justify-center items-center bg-purple-300/0 p-8 pt-2 w-128 space-y-4 z-0"
            onSubmit={addBook}
          >
            <input
              type="text"
              placeholder="Title"
              className="rounded-lg bg-purple-200/30 w-full px-4 py-2"
              onChange={(e) =>
                setBookData((prevData) => ({
                  ...prevData,
                  title: e.target.value,
                }))
              }
            />
            <textarea
              type="text"
              placeholder="Description"
              className="rounded-lg bg-purple-200/30 w-full px-4 py-2"
              onChange={(e) =>
                setBookData((prevData) => ({
                  ...prevData,
                  description: e.target.value,
                }))
              }
            />
            <input
              type="text"
              placeholder="Author"
              className="rounded-lg bg-purple-200/30 w-full px-4 py-2"
              onChange={(e) =>
                setBookData((prevData) => ({
                  ...prevData,
                  author: e.target.value,
                }))
              }
            />
            <input
              type="text"
              placeholder="Publisher"
              className="rounded-lg bg-purple-200/30 w-full px-4 py-2"
              onChange={(e) =>
                setBookData((prevData) => ({
                  ...prevData,
                  publisher: e.target.value,
                }))
              }
            />
            <input
              type="date"
              className="rounded-lg bg-purple-200/30 w-full px-4 py-2 text-gray-500"
              onChange={(e) =>
                setBookData((prevData) => ({
                  ...prevData,
                  publicationDate: e.target.value,
                }))
              }
            />
            <div className="w-full">
              <Select
                options={genres}
                value={selectedGenres}
                isMulti
                onChange={handleSelectChange}
                placeholder="Select Genre"
              />
            </div>
            <div className="w-full">
              <Select
                options={lannguages}
                value={selectedlannguages}
                isMulti
                onChange={handleLangSelect}
                placeholder="Select lannguage"
              />
            </div>
            <input
              type="file"
              className="rounded-lg bg-purple-200/30 w-full px-4 py-2 text-gray-500"
              onChange={(e) => {
                setBookData((prevData) => ({
                  ...prevData,
                  bookCover: e.target.files[0],
                }));
              }}
            />
            <button className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
              Add Book
            </button>
          </form>
          <img
            src={GirlTwo}
            alt="girlTwo"
            className="absolute bottom-0 right-0 w-128 h-128 object-contain"
          />
        </div>
      </div>
    </>
  );
}

export default AddBook;
