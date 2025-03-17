import React from "react"; // Importing React
// import aboutImage from "/src/assets/image/aboutImage.jpeg"; // Importing the about image
import Hobbies from '../component/Hoobies'; // Importing the Hobbies component

// About component definition
const About = () => {
  return (
    // Main container for the About page
    <div className="min-h-screen bg-gradient-to-r from-cyan-50 to-blue-100 py-16 px-4 sm:px-6 lg:px-8">
  {/* Centered container with a maximum width */}
  <div className="max-w-7xl mx-auto">
    {/* Flex container for the layout (stacked on mobile, side-by-side on larger screens) */}
    <div className="mt-12 flex flex-col lg:flex-row items-center lg:items-start gap-12">
      {/* Image section (takes half the width on larger screens) */}
      {/* <div className="w-full lg:w-1/2">
        <img
          src={aboutImage} // Source of the image
          alt="About Me" // Alt text for accessibility
          className="w-full h-auto rounded-lg shadow-lg border-4 border-white" // Styling for the image
        />
      </div> */}

      {/* Text content section (takes half the width on larger screens) */}
      <div className="w-full space-y-8 flex flex-col justify-center items-start">
  {/* Heading section */}
  <div className="text-left w-full">
    <h5 className="text-lg font-semibold text-gray-600 mb-2">About Me</h5> {/* Subheading */}
    <h2 className="text-4xl font-bold text-cyan-700">
      I Am A Passionate Web Designer {/* Main heading */}
    </h2>
  </div>

  {/* First paragraph of text content */} 
  <div className="w-full"> 
    <p className="text-gray-700 leading-relaxed">
      I am a Web Designer and Web Developer with over 6 months of experience. I have worked on all stages of the development cycle for dynamic web projects. My focus is on creating clean, modern, and user-friendly designs that are both functional and aesthetically pleasing.
    </p>
  </div>

  {/* Second section with a heading and paragraph */}
  <div className="w-full">
    <h3 className="text-4xl font-semibold text-cyan-700 mb-4">
      Smart Work {/* Subheading */}
    </h3>
    <p className="text-gray-700 leading-relaxed">
      I have been part of a team that built the front-end for an enterprise-level web application using React-JS. My experience includes working on modern and scalable solutions that meet the needs of businesses and users alike.
    </p>
  </div>

  {/* Third section with a heading and paragraph */}
  <div className="w-full">
    <h3 className="text-4xl font-semibold text-cyan-700 mb-4">
      Modern Work {/* Subheading */}
    </h3>
    <p className="text-gray-700 leading-relaxed">
      I have worked with a wide range of technologies, including HTML, CSS, Tailwind CSS, and React-JS. I am passionate about innovation and always strive to stay updated with the latest trends and tools in web development.
    </p>
  </div>
</div>
    </div>
  </div>

  {/* Hobbies Section */}
  <Hobbies /> {/* Rendering the Hobbies component */}
</div>
  );
};

export default About; // Exporting the About component