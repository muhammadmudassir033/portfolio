import React, { useState } from "react"; // Importing React and the useState hook
import { FaPlus } from "react-icons/fa"; // Importing the plus icon from react-icons

// Skill component definition
const Skill = () => {
  // State to manage the list of skills
  const [skills, setSkills] = useState([
    "HTML",
    "CSS",
    "Bootstrap",
    "Tailwind",
    "JS",
    "React.JS",
  ]);

  // State to manage the visibility of the popup
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // State to manage the input for a new skill
  const [newSkill, setNewSkill] = useState("");

  // Function to open the popup
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setIsPopupOpen(false);
    setNewSkill(""); // Clear the input field when the popup is closed
  };

  // Function to handle adding a new skill when click on card
  const handleAddSkill = () => {
    if (newSkill.trim() !== "") {
      setSkills([...skills, newSkill.trim()]); // Add the new skill to the skills array
      closePopup(); // Close the popup after adding the skill
    }
  };

  return (
    // Main container for the Skills section
    <section className="flex flex-col items-center px-6 md:px-28 py-16 bg-gray-50">
      {/* Text Section (Full Width) */}
      <div className="w-full text-center space-y-6">
        {/* Subheading */}
        <h3 className="text-lg font-semibold text-gray-600 uppercase tracking-wider">
          My Skills
        </h3>
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-teal-600 mb-4">
          I Am Expert In
        </h2>
        {/* Description Paragraph */}
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
          Experienced web developer proficient in HTML, CSS, and JavaScript,
          with a strong focus on building responsive and user-friendly
          interfaces. Skilled in React for developing dynamic and
          high-performance single-page applications (SPAs). Adept at designing
          and managing databases using SQL, ensuring efficient data storage and
          retrieval. Committed to writing clean, maintainable code and
          delivering seamless web experiences across all devices.
        </p>
      </div>

      {/* Skills Grid (Centered Inline) */}
      <div className="flex flex-wrap justify-center gap-6 mt-12 w-full">
        {/* Display existing skills */}
        {skills.map((skill, index) => (
          <div
            key={index} // Unique key for each skill
            className="flex items-center justify-center 
              w-24 h-24 
              bg-gradient-to-b from-teal-700 to-teal-900 text-white text-lg font-semibold rounded-full 
              shadow-lg border-8 border-gray-200 hover:border-gray-300 transition-all duration-300"
          >
            {skill} {/* Display the skill name */}
          </div>
        ))}

        {/* + Icon Card (to add a new skill) */}
        {/* <div
          onClick={openPopup} // Open the popup when clicked
          className="flex items-center justify-center 
            w-24 h-24 
            bg-gradient-to-b from-teal-700 to-teal-900 text-white text-lg font-semibold rounded-full 
            shadow-lg border-8 border-gray-200 hover:border-gray-300 cursor-pointer transition-all duration-300"
        >
          <FaPlus className="w-8 h-8" /> {/* Plus icon */}
        {/* </div> */} 
      </div>

      {/* Popup for Adding New Skill */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          {/* Popup Container */}
          <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 max-w-md">
            {/* Popup Heading */}
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Add New Skill
            </h2>
            {/* Input Field for New Skill */}
            <input
              type="text"
              placeholder="Enter a new skill"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)} // Update the new skill state
              className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg"
            />
            {/* Buttons Container */}
            <div className="flex justify-center gap-4">
              {/* Cancel Button */}
              {/* <button
                onClick={closePopup} // Close the popup
                className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition duration-300"
              >
                Cancel
              </button> */}
              {/* Add Skill Button */}
              {/* <button
                onClick={handleAddSkill} // Add the new skill
                className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition duration-300"
              >
                Add Skill
              </button> */}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Skill; // Exporting the Skill component