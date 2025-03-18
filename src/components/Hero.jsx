import React from "react";
import { FaSearch } from "react-icons/fa";
import heroImg from "/src/assets/heroImg.png";
import reactIcon from "/src/assets/backgroundImages/react.png";
import globeIcon from "/src/assets/backgroundImages/globe.png";
import vaccumIcon from "/src/assets/backgroundImages/vaccum.png";
import triangleIcon from "/src/assets/backgroundImages/triangle.png";
import scaleIcon from "/src/assets/backgroundImages/scale.png";
import bulbsketchIcon from "/src/assets/backgroundImages/bulbsketch.png";
import pcIcon from "/src/assets/backgroundImages/pc.png";

function Hero() {
  return (
    <section
      id="home"
      className="bg-[#FDF8EE] py-16 md:px-20 px-8 flex flex-col md:flex-row items-center justify-between relative"
    >
      {/* Background Images*/}
      <img
        src={reactIcon}
        alt=""
        className="w-10 lg:w-16 absolute right-2 lg:right-8 top-10 lg:top-10"
      />
      <img
        src={globeIcon}
        alt=""
        className="w-10 lg:w-16 absolute right-1 lg:right-8 bottom-60 lg:bottom-20"
      />
      <img
        src={vaccumIcon}
        alt=""
        className="w-10 lg:w-12 absolute left-1 lg:left-20 bottom-60 lg:bottom-12"
      />
      <img
        src={triangleIcon}
        alt=""
        className=" w-12 lg:w-16 absolute left-1 lg:left-80 bottom-24 lg:bottom-12"
      />
      <img
        src={scaleIcon}
        alt=""
        className="w-10 lg:w-14 absolute left-1 lg:left-96 top-1 lg:top-16"
      />
      <img
        src={bulbsketchIcon}
        alt=""
        className="hidden sm:block w-12 md:w-16 absolute right-24 md:right-64 top-12 md:top-1"
      />
      <img
        src={pcIcon}
        alt=""
        className="hidden md:block w-12 sm:w-16 absolute right-32 md:right-96 top-12 md:top-8"
      />

      {/* Hero Content */}
      <div className="max-w-lg">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
          The{" "}
          <span className="text-orange-500">
            Smart <br />
          </span>{" "}
          Choice For <span className="text-orange-500">Future</span>
        </h1>
        <p className="mt-4 text-gray-600">
          Elearn is a global training provider based across the UK that
          specialises in accredited and bespoke training courses.
        </p>
        <div className="mt-6 flex items-center bg-white p-2 rounded-full shadow-md w-full max-w-sm">
          <FaSearch className="text-gray-500 ml-3" />
          <input
            type="text"
            placeholder="Search for a location..."
            className="flex-grow px-4 py-2 text-sm outline-none text-gray-700 w-full"
          />
          <button className="bg-[#4D2C5E] text-white px-6 py-2 rounded-full hover:bg-purple-800 transition">
            Continue
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center">
        <img
          src={heroImg}
          alt="learning Picture"
          className="max-w-full h-auto"
        />
      </div>
    </section>
  );
}

export default Hero;
