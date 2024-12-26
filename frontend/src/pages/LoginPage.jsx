import React, { useState } from "react";
import bgImage from "../assets/bg.png";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


function LoginPage () {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    name: "",
    email: "",
    password: "",
  });
  async function loginStudent(e) {
    e.preventDefault();
    try {
      const result = await fetch("/proxy/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
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
      <div
        className="h-screen w-full  bg-cover flex justify-start items-center bg-no-repeat bg-center "
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <form
          onSubmit={loginStudent}
          className=" w-128 p-10 rounded-lg flex flex-col items-center ml-40 mt-16"
        >
          <p className="text-purple-700/80 font-extrabold text-7xl mb-6 text-center">
            Login
          </p>
          <p className="text-purple-400 text-center text-sm">
            Making knowledge easier to find, share, and cherish, one book at a
            time.
          </p>
          <div className="relative w-full ">
            <input
              className="p-3 pl-10 rounded-lg w-full bg-purple-300/20 mt-4 mb-4"
              type="text"
              placeholder="Enter your email"
              onChange={(e) =>
                setLoginData((prevData) => ({
                  ...prevData,
                  email: e.target.value,
                }))
              }
            />
            <FaUser className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500/50" />
            <br></br>
          </div>
          <div className="relative w-full ">
          <input
            className="p-3 pl-10 rounded-lg w-full bg-purple-300/20"
            type="password"
            placeholder="Enter your password"
            onChange={(e) =>
              setLoginData((prevData) => ({
                ...prevData,
                password: e.target.value,
              }))
            }
          />
          <FaLock className=" absolute left-3 top-8 transform -translate-y-full text-purple-500/50" />
          </div>
          <br></br>
          <button
            className="inline-block mb-3 px-10 py-2.5 bg-purple-700/80 rounded-lg text-white  hover:bg-slate-800 justify-center"
            type="submit"
            value="Login"
          >
            Login
          </button>
          <p className="text-purple-400 text-center text-sm">
            Don't have account?{" "}
            <a className="text-blue-500 underline" href="/register">
              Register
            </a>
          </p>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
