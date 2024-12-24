import React, { useState } from "react";
import bgImage from "../assets/Imagebg.jpg";
import { toast } from "react-toastify";
function FormUI() {
  const [password, setPassword] = useState({});
  const [email, setEmail] = useState({});
  const [name, setName] = useState({});
  //console.log(name, email, password);
  //function to register the user
  async function registerStudent(e) {
    e.preventDefault()
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
      if(data.status === 200){
        toast.success(data.msg);
      }
      else{
        toast.error(data.msg)
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <>
      <div
        className="w-full  bg-cover bg-center flex justify-center items-center h-screen bg-no-repeat  "
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <form onSubmit={registerStudent} className="flex flex-col gap-4 bg-slate-500/10 p-10 w-96 mx-auto mt-10 rounded-lg shadow-lg ">
          <p className="text-2xl text-white self-center animate-bounce">
            {" "}
            Form
          </p>
          <input
            className="border border-black mb-auto  rounded-xl p-3"
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="border border-black mb-auto  rounded-xl p-3"
            type="text"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="border border-black mb-auto rounded-xl p-3"
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-black text-white p-2 rounded-xl hover:bg-pink-600 transition-all duration-700"
            type="submit"
          >
            Register
          </button>
          <p className="text-white text-center text-sm">
            
            Have account?{" "}
            <a className="text-blue-500 underline" href="/">
              Login
            </a>
          </p>
        </form>
      </div>
    </>
  );
}

export default FormUI;
