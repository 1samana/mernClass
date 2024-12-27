import React, { useState } from "react";
import bgImage from "../assets/bg.png";
import { toast } from "react-toastify";

import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function FormUI() {
  const [password, setPassword] = useState({});
  const [email, setEmail] = useState({});
  const [name, setName] = useState({});
  //console.log(name, email, password);
  const navigate = useNavigate();
  //function to register the user
  
  async function registerStudent(e) {
    e.preventDefault();
    try {
      const result = await fetch("/proxy/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      const data = await result.json();
      if (data.status === 200) {
        toast.success(data.msg);
        navigate("/login");
      } else {
        toast.error(data.msg);
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <>
      <div
        className="h-screen w-full  bg-cover flex justify-start items-center bg-no-repeat bg-center "
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <form
          onSubmit={registerStudent}
          className=" w-128 p-10 rounded-lg flex flex-col items-center ml-40 mt-16 "
        >
          <p className="text-purple-700/80 font-extrabold text-7xl mb-6 text-center">
            Register
          </p>
          <p className="text-purple-400 text-center text-sm">
            Making knowledge easier to find, share, and cherish, one book at a
            time.
          </p>
          <div className="relative w-full">
            <input
              className="p-3 pl-10 rounded-lg w-full bg-purple-300/20 mt-4 "
              type="text"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            />
            <FaUser className=" absolute left-3 top-10 transform -translate-y-1/2 text-purple-500/50" />
            <br></br>
          </div>
          <div className="relative w-full">
            <input
              className="p-3 pl-10 rounded-lg w-full bg-purple-300/20 mt-4 "
              type="text"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <FaUser className=" absolute left-3 top-10 transform -translate-y-1/2 text-purple-500/50" />
            <br></br>
          </div>
          <div className="relative w-full">
            <input
              className="p-3 pl-10 rounded-lg w-full bg-purple-300/20 mt-4 mb-4"
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500/50" />
            <br></br>
          </div>

          <button
            className="inline-block mb-3 px-10 py-2.5 bg-purple-700/80 rounded-lg text-white  hover:bg-slate-800 justify-center"
            type="submit"
            value="Login"
          >
            Register
          </button>
          <p className="text-purple-400 text-center text-sm">
            Have account?{" "}
            <a className="text-blue-500 underline" href="/login">
              Login
            </a>
          </p>
        </form>
      </div>
    </>
  );
}

export default FormUI;
