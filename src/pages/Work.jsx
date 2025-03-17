import React, { useState } from "react"; // Importing React and the useState hook
import { FaTrash } from "react-icons/fa"; // Importing the delete icon from react-icons
import react1 from "../assets/image/react2.jpg"; // Importing image 1
import react2 from "../assets/image/react1.jpg"; // Importing image 2
import react3 from "../assets/image/react3.jpg"; // Importing image 3
import react4 from "../assets/image/react4.jpeg"; // Importing image 4
import pro1 from "../assets/image/pro1.png"; // Importing image 5

// Work component definition
const Work = () => {
  // State to manage the list of portfolio images
  const [portfolioImages, setPortfolioImages] = useState([react1, react2, react3, react4, pro1]);

  // State to manage the visibility of the popup
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Function to open the popup for adding a new image
  const handleAddImage = () => {
    setIsPopupOpen(true);
  };

  // Function to handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader(); // Create a FileReader to read the file
      reader.onload = (event) => {
        // Add the new image to the portfolioImages array
        setPortfolioImages([...portfolioImages, event.target.result]);
        setIsPopupOpen(false); // Close the popup after uploading
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    } else {
      alert("Please upload a valid image file."); // Show an error for invalid files
    }
  };

  // Function to handle deleting an image  
  const handleDeleteImage = (index) => {
    // Filter out the image at the specified index
    const updatedImages = portfolioImages.filter((_, i) => i !== index);
    setPortfolioImages(updatedImages); // Update the portfolioImages state
  };

  return ( 
    // Main container for the Work section
    <section className="px-6 md:px-16 py-16 bg-gray-50 text-center">
      {/* Heading Section */}
      <h3 className="text-lg font-semibold text-gray-700">Portfolio</h3> {/* Subheading */}
      <h2 className="text-2xl md:text-4xl font-bold text-teal-600 mt-2">
        We Offer Great Affordable Premium Prices {/* Main Heading */}
      </h2>
      <p className="text-gray-600 mt-3 max-w-2xl font-medium text-xl mx-auto text-sm md:text-base">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. {/* Description */}
      </p>

      {/* Portfolio Images Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 px-12">
        {/* Display existing portfolio images */}
        {portfolioImages.map((image, index) => (
          <div
            key={index} // Unique key for each image
            className="group relative w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            {/* Image */}
            <img
              src={image} // Source of the image
              alt={`Portfolio ${index + 1}`} // Alt text for accessibility
              className="w-full h-auto rounded-lg" // Styling for the image
            />

            {/* Delete Icon - Visible on Hover */}
            <button
              onClick={() => handleDeleteImage(index)} // Call handleDeleteImage when clicked
              className="absolute top-2 right-2 text-red-400 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Delete image" // Accessibility label
            >
              <FaTrash className="w-6 h-6" /> {/* Delete icon */}
            </button>
          </div>
        ))}

        {/* Plus Card to add any project in the future */}
        <div
          className="flex items-center justify-center w-full h-48 bg-gray-200 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
          onClick={handleAddImage} // Open the popup when clicked
        >
          <span className="text-4xl text-gray-600">+</span> {/* Plus icon */}
        </div>
      </div>

      {/* Popup to upload a new image */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          {/* Popup Container */}
          <div className="bg-white p-8 rounded-lg w-96">
            <h2 className="text-2xl font-bold text-teal-700 mb-4">Upload Image</h2> {/* Popup Heading */}
            {/* File Input Field */}
            <input
              type="file"
              accept="image/*" // Accept only image files
              onChange={handleImageUpload} // Call handleImageUpload when a file is selected
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
            {/* Cancel Button */}
            <div className="flex justify-end mt-4">
              <button
                type="button"
                onClick={() => setIsPopupOpen(false)} // Close the popup
                className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work; // Exporting the Work component