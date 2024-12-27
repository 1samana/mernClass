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

  const lannguage = [
    { value: "English", label: "English" },
    { value: "Nepali", label: "Nepali" },
    { value: "Hindi", label: "Hindi" },
    { value: "Spanish", label: "Spanish" },
    { value: "Japanese", label: "Japanese" },
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [langSelect, setLangSelect] = useState([]);

  const handleSelectChange = (selected) => {
    const genreValues = selected.map((option) => option.value); 
    setSelectedOptions(selected);
    setBookData((prevData) => ({
      ...prevData,
      genre: genreValues,
    }));
  };
  
  const handleLangSelect = (selected) => {
    const lannguageValues = selected.map((option) => option.value); 
    setLangSelect(selected);
    setBookData((prevData) => ({
      ...prevData,
      lannguage: lannguageValues,
    }));
  };
  const navigate = useNavigate();


  async function addBook(e) {
    e.preventDefault()
    try {
      const result = await fetch("/proxy/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookData),
      });
      const data = await result.json();
      if (data.status === 200) {
        toast.success(data.msg);
        navigate("/homee")
      } else {
        toast.error(data.msg);
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

          <form className=" top-0 flex flex-col justify-center items-center bg-purple-300/0 p-8 pt-2 w-128 space-y-4 z-0 " onSubmit={addBook}>
            <input
              type="text"
              placeholder="Title"
              className="rounded-lg bg-purple-200/30 w-full px-4 py-2 "
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
              className="rounded-lg bg-purple-200/30 w-full px-4 py-2 "
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
              className="rounded-lg bg-purple-200/30 w-full px-4 py-2 "
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
              className="rounded-lg bg-purple-200/30 w-full px-4 py-2 "
              onChange={(e) =>
                setBookData((prevData) => ({
                  ...prevData,
                  publisher: e.target.value,
                }))
              }
            />
            <input
              type="date"
              placeholder="Publication Date"
              
              className="rounded-lg bg-purple-200/30 w-full px-4 py-2 text-gray-500 "
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
                value={selectedOptions}
                isMulti={true}
                onChange={handleSelectChange}
                className=""
                placeholder="Select Genre"
                
              />
            </div>

            <div className="w-full">
              <Select
                options={lannguage}
                value={langSelect}
                onChange={handleLangSelect}
                isMulti={true}
                className="placeholder:bg-purple-200/30"
                placeholder="Select lannguage"
              />
            </div>
            <input
              type="file"
              placeholder="Book Image"
              className="rounded-lg bg-purple-200/30 w-full px-4 py-2 text-gray-500"
              
              
            />
            

            <button className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 ">
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
