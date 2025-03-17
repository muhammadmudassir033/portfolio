import React, { useState } from 'react'; // Importing React and the useState hook
import logo from "/src/assets/image/logo.png"; // Importing the logo image

// Navbar component definition
const Navbar = () => {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggles the state between true and false
  };

  return (
    <nav className="bg-white shadow-lg">
      {/* Container for the navbar content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-28">
        {/* Flex container to align items horizontally */}
        <div className="flex items-center justify-between h-16">
          {/* Logo image section  */}
          <div className="flex-shrink-0">
            <a href="/">
              <img src={logo} alt="" className="h-32 w-auto" /> 
            </a>
          </div>  

          {/* Navigation links for larger screens (hidden on mobile) */}
          <div className="hidden lg:flex flex-1 justify-center space-x-8">
            <a href="/" className="text-teal-700 font-bold text-md  hover:text-black">Home</a>
            <a href="/about" className="text-teal-700 font-bold text-md  hover:text-black">About Us</a>
            <a href="/services" className="text-teal-700 font-bold text-md  hover:text-black">Services</a>
            <a href="/skill" className="text-teal-700 font-bold text-md  hover:text-black">Skill</a>
            <a href="/work" className="text-teal-700 font-bold text-md  hover:text-black">Work</a>
            {/* <a href="/contact" className="text-teal-700  font-bold text-md  hover:text-black">Contact</a> */}
          </div>

          {/* LET'S TALK button for larger screens (hidden on mobile) */}
          <div className="hidden lg:flex">
            <a
              href="/contact"
              className="bg-teal-900 text-white px-5 py-2 rounded-full hover:bg-teal-700 transition duration-300"
            >
              LET'S TALK
            </a>
          </div>

          {/* Mobile menu button (hidden on larger screens) */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu} // Calls toggleMenu function when clicked
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              {/* SVG icon for the menu button (changes based on menu state) */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  // Close icon (X) when menu is open
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  // Hamburger icon when menu is closed
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu (hidden on larger screens) */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3"> 
            {/* Mobile navigation links */}
            <a href="/" className="block text-teal-700 hover:text-black">Home</a>
            <a href="/about" className="block text-teal-700 hover:text-black">About Us</a>
            <a href="/services" className="block text-teal-700 hover:text-black">Services</a>
            <a href="/skill" className="block text-teal-700 hover:text-black">Skill</a>
            <a href="/work" className="block text-teal-700 hover:text-black">Work</a>
            <a href="/testimonial" className="block text-teal-700 hover:text-black">Contact</a>
            {/* "LET'S TALK" button for mobile */}
            <a
              href="/contact"
              className="block bg-teal-900 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition duration-300"
            >
              LET'S TALK
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; // Exporting the Navbar component 