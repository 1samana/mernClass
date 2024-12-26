import React from "react";
import bgImage from "../assets/indexbg.png";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="h-screen w-full  bg-cover flex justify-center items-center bg-no-repeat bg-center "
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl text-purple-700 font-extrabold">
            Welcome to ReadHive
          </h1>
          <p className="text-sm w-160 text-center mt-4 text-purple-400">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum
            similique assumenda, tempora dolores labore mollitia accusamus hic
            quas asperiores nemo earum accusantium autem praesentium pariatur
            quae cumque incidunt voluptate.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Recusandae cumque similique non
            laborum, quaerat voluptatibus porro sequi! Ab necessitatibus est
            itaque expedita minima, natus cumque. Soluta eos omnis quisquam
            ipsam!
          </p>

          <div className="flex space-x-4 items-center justify-center font-semibold p-3 list-none ">
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg mt-4"onClick={()=>navigate("/login")}>
            Login
          </button>
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg mt-4"onClick={()=>navigate("/register")}>
            Register
          </button></div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
