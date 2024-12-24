import React, { useState } from "react";
import bgImage from "../assets/Imagebg.jpg";

const LoginPage = () => {
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
        alert(data.msg);
        window.location.href = "/dashboard";
      } else {
        alert(data.msg);
      }
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      <div
        className="h-screen w-full  bg-cover flex justify-center items-center bg-no-repeat bg-center "
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <form onSubmit={loginStudent} className="bg-slate-800/30 w-96 p-10 rounded-lg flex flex-col items-center">
          <p className="text-white text-3xl mb-6 text-center animate-pulse">
            Login
          </p>
          <input
            className="-mb-0.5 p-3 w-full rounded-lg"
            type="text"
            placeholder="Enter your email"
            onChange={(e) =>
                setLoginData((prevData) => ({ ...prevData, email: e.target.value }))
              }
          />
          <br></br>
          <input
            className="mb-auto p-3 w-full rounded-lg"
            type="password"
            placeholder="Enter your password"
            onChange={(e) =>
                setLoginData((prevData) => ({ ...prevData, password: e.target.value }))
              }
          />
          <br></br>
          <button
            className="inline-block mb-3 px-10 py-2.5 bg-black rounded-lg text-white  hover:bg-slate-800 justify-center"
            type="submit"
            value="Login"
          >
            Login
          </button>
          <p className="text-white text-center text-sm">
            
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
