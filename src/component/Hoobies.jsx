import React, { useState } from 'react';
import { FaTrash, FaPlus } from 'react-icons/fa'; // Import the delete and plus icons
import { statistics, hobbies } from '../utils/Const'; // Import the data

const Hobbies = () => {
  // State to manage the list of hobbies
  const [hobbyList, setHobbyList] = useState(hobbies);

  // State to manage the visibility of the popup form
  const [showPopup, setShowPopup] = useState(false);

  // State to manage the input value for the new hobby
  const [newHobby, setNewHobby] = useState('');

  // Function to handle deleting a hobby
  const handleDelete = (index) => {
    // Filter out the hobby at the specified index
    const updatedHobbies = hobbyList.filter((_, i) => i !== index);
    // Update the state with the new list of hobbies
    setHobbyList(updatedHobbies);
  };

  // Function to handle adding a new hobby
  const handleAddHobby = () => {
    // Check if the input is not empty
    if (newHobby.trim() !== '') {
      // Add the new hobby to the list
      setHobbyList([...hobbyList, newHobby]);
      // Clear the input field
      setNewHobby('');
      // Close the popup
      setShowPopup(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Statistics Section */}
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold   text-gray-800 mb-8">My Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Map through the statistics data and render each statistic */}
          {statistics.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-4xl font-bold text-blue-600">{stat.value}</p>
              <p className="text-lg text-gray-600 mt-2">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Hobbies Section */}
      <div className="max-w-7xl mx-auto mt-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Hobbies
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          Things I Love To Do
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Map through the hobbyList and render each hobby card */}
          {hobbyList.map((hobby, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-lg shadow-lg text-center hover:bg-cyan-700 hover:text-white hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Delete Icon - Visible on Hover */}
              <button
                onClick={() => handleDelete(index)} // Call handleDelete when clicked
                className="absolute top-2 right-2 text-white hover:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <FaTrash className="w-5 h-5" /> {/* Delete icon */}
              </button>

              {/* Hobby Name */}
              <p className="text-xl font-semibold text-cyan-800 group-hover:text-white transition-colors duration-300">
                {hobby}
              </p>
            </div>
          ))}

          {/* Add Hobby Card */}  
          {/* <div
            className="group bg-white p-6 rounded-lg shadow-lg text-center hover:bg-cyan-700 hover:text-white hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={() => setShowPopup(true)} // Show the popup when clicked
          >
            {/* Plus Icon */}
            {/* <FaPlus className="w-8 h-8 mx-auto text-cyan-800 group-hover:text-white transition-colors duration-300" /> */}
            {/* Add Hobby Text */}
            {/* <p className="text-xl font-semibold text-cyan-800 group-hover:text-white transition-colors duration-300 mt-2">
              Add Hobby
            </p> */}
          {/* </div> */} 
        </div>
      </div>

      {/* Popup Form for Adding a New Hobby */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Hobby</h2>
            {/* Input field for the new hobby */}
            <input
              type="text"
              value={newHobby}
              onChange={(e) => setNewHobby(e.target.value)} // Update the newHobby state
              className="w-full p-2 border border-gray-300 rounded-lg mb-4"
              placeholder="Enter a new hobby"
            />
            <div className="flex justify-end">
              {/* Cancel Button */}
              <button
                onClick={() => setShowPopup(false)} // Close the popup
                className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-gray-600"
              >
                Cancel
              </button>
              {/* Add Button */}
              <button
                onClick={handleAddHobby} // Call handleAddHobby when clicked
                className="bg-cyan-700 text-white px-4 py-2 rounded-lg hover:bg-cyan-800"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hobbies;