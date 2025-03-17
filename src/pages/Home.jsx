import React from "react"; // Importing React
import Md from "/src/assets/image/md.jpeg"; // Importing the developer image

// Home component definition
const Home = () => {
  return (
    // Main container for the Home page
    <div className="min-h-screen ">
      {/* Container for the content with a white background, rounded corners, and shadow */}
      <div className="w-full px-6 bg-white rounded-lg  overflow-hidden md:flex md:items-center">
        {/* Image section (takes half the width on medium and larger screens) */}
        <div className="md:w-1/2">
          <img
            src={Md} // Source of the image
            alt="Web Developer" // Alt text for accessibility
            className="w-[550px] rounded-full h-auto object-cover" // Styling for the image   
          /> 
        </div>

        {/* Text and button section (takes half the width on medium and larger screens) */}
        <div className="p-8 md:w-1/2">
          {/* Main heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Hey! I am Muhammad Mudassir {/* Greeting and name */}
          </h1>

          {/* Description paragraph */}
          <p className="text-lg text-gray-600 mb-8">
            I am a Web Developer with extensive experience of over 6 months. My
            expertise is in creating & designing websites, Web-App, and
            Desktop Applications. {/* Description of skills and experience */}
          </p>

          {/* Button container (stacked on mobile, side-by-side on medium and larger screens) */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* "LEARN MORE" button */}
            <button className="bg-cyan-700 text-white px-6 py-2 rounded-full hover:bg-cyan-600 transition duration-300">
              LEARN MORE {/* Button text */}
            </button>

            {/* "HIRE ME" button */}
            <button className="bg-cyan-950 text-white px-6 py-2 rounded-full hover:bg-cyan-700 transition duration-300">
              HIRE ME {/* Button text  */}
            </button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Home; // Exporting the Home component