import { useState } from "react";
import React from "react";
import Select from "react-select";
import Navbar from "../component/Navbar";
import GirlOne from "../assets/girl-03.png";
import GirlTwo from "../assets/girl-02.png";

function AddBook() {
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

  const language = [
    { value: "English", label: "English" },
    { value: "Nepali", label: "Nepali" },
    { value: "Hindi", label: "Hindi" },
    { value: "Spanish", label: "Spanish" },
    { value: "Japanese", label: "Japanese" },
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [langSelect, setLangSelect] = useState([]);

  const handleSelectChange = (selected) => {
    setSelectedOptions(selected);
  };

  const handleLangSelect = (selected) => {
    setLangSelect(selected);
  };

  return (
    <>
      <div className="relative">
        <div className="h-5 bg-white"></div>
        <div className="">
          <Navbar className="absolute top-0 left-0 right-0 z-10" />
        </div>
        <p className="text-purple-700/80 font-extrabold text-4xl text-center mt-10 pt-1">
          Add Book
        </p>
        <div className="flex justify-center items-center bg-white min-h-fit pt-2">
          <img
            src={GirlOne}
            alt="girlOne"
            className="absolute bottom-0 left-0 w-128 h-128 object-contain"
          />

          <form className=" top-10 flex flex-col justify-center items-center bg-purple-300/0 p-8 w-128 space-y-4 z-0 mb-10">
            <input
              type="text"
              placeholder="Title"
              className="rounded-lg bg-purple-200/30 w-full px-4 py-2 "
            />
            <textarea
              type="text"
              placeholder="Description"
              className="rounded-lg bg-purple-200/30 w-full px-4 py-2 "
            />
            <input
              type="text"
              placeholder="Author"
              className="rounded-lg bg-purple-200/30 w-full px-4 py-2 "
            />
            <input
              type="text"
              placeholder="Publisher"
              className="rounded-lg bg-purple-200/30 w-full px-4 py-2 "
            />
            <input
              type="date"
              placeholder="Publication Date"
              className="rounded-lg bg-purple-200/30 w-full px-4 py-2 "
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
                options={language}
                value={langSelect}
                onChange={handleLangSelect}
                isMulti={true}
                className=""
                placeholder="Select Language"
              />
            </div>

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
