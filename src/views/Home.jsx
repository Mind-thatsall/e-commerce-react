import React from "react";
import men from "../assets/images/men.jpg"
import women from "../assets/images/women.jpeg"
import SideBars from "../components/SideBars";

const Home = () => {
  return (
    <div className="grid items-center h-screen grid-cols-6 overflow-hidden justify-items-center md:grid-cols-8 lg:grid-cols-12 lg:grid-rows-6">
      <SideBars rotate="" side="left-0" />
      <SideBars rotate="rotate-180" side="right-0" />
      <h1
        style={{ fontFamily: "Outfit-Black" }}
        className="col-start-3 col-end-11 font-bold text-center uppercase text-[19.75vw] leading-[17vw] row-start-2 row-end-6 text-[#796B66] mix-blend-difference"
      >
        sapes avenue
      </h1>
      <img className="col-start-3 col-end-5 row-start-5 row-end-7 scale-[0.9] -rotate-6 mb-[5vh]" src={men} alt="men category" width={400} height={600} />

      <img className="col-start-9 col-end-11 row-start-3 row-end-5 scale-[0.9] rotate-6" src={women} alt="women category" width={400} height={600} />
    </div>
  );
};

export default Home;
