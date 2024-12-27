import React from "react";
import bgImage from "../assets/homebg.png";

const DashboardPage = () => {
  return (
    <>
      <div
        className="w-screen h-128 flex flex-col items-start justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="ml-32 mb-16">
          <h1 className="text-purple-600 text-5xl w-160 text-center">
            Welcome to <strong>ReadHive</strong>
          </h1>
          <p className="text-sm text-purple-500 w-160 text-center mt-5">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae a quos
            eveniet labore officia consectetur veritatis, repellendus molestiae
            dolorem similique numquam omnis quas unde. Magnam dicta iste
            doloribus aspernatur fugiat!Lorem Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Expedita qui eveniet quam eum,
            blanditiis nulla eaque explicabo hic repudiandae recusandae quidem
            perferendis culpa! Earum et omnis sint quasi ratione explicabo.
          </p>
        </div>
      </div>
      <div className="h-14 bg-purple-300  list-none flex justify-center items-center space-x-48 text-2xl font-bold text-white">
        <li className="hover:bg-gradient-to-r hover:from-purple-950 hover:via-pink-950 hover:to-pink-400 hover:bg-clip-text hover:text-transparent transition-all ">
          All Books
        </li>
        <li className="hover:bg-gradient-to-r hover:from-purple-950 hover:via-pink-950 hover:to-pink-400 hover:bg-clip-text hover:text-transparent transition-all">
          {" "}
          Trending Books
        </li>
        <li className="hover:bg-gradient-to-r hover:from-purple-950 hover:via-pink-950 hover:to-pink-400 hover:bg-clip-text hover:text-transparent transition-all">
          {" "}
          Featured Books
        </li>
        <li className="hover:bg-gradient-to-r hover:from-purple-950 hover:via-pink-950 hover:to-pink-400 hover:bg-clip-text hover:text-transparent transition-all">
          {" "}
          Most Popular Books
        </li>
      </div>
    </>
  );
};

export default DashboardPage;
