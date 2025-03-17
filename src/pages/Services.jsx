import React, { useState } from "react"; // Importing React and the useState hook
import { FaCode, FaShieldAlt, FaCamera, FaPaintBrush, FaMobileAlt, FaSearch, FaCubes, FaPencilRuler, FaPlus } from "react-icons/fa"; // Importing icons from react-icons

// Services component definition
const Services = () => {
  // State to manage the list of services
  const [services, setServices] = useState([
    { icon: <FaCubes />, title: "Web Design" },
    { icon: <FaSearch />, title: "SEO Specialist" },
    // { icon: <FaShieldAlt />, title: "Security Expert" },
    { icon: <FaCode />, title: "Web Development" },
    { icon: <FaPencilRuler />, title: "UI/UX Design" },
    { icon: <FaCamera />, title: "Photography" },
    // { icon: <FaMobileAlt />, title: "IOS App Development" },
    { icon: <FaPaintBrush />, title: "Graphic Designer" },
  ]);

  // State to manage the visibility of the popup
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // State to manage the input for a new service
  const [newService, setNewService] = useState({ icon: "", title: "" });

  // Function to open the popup for adding a new service
  const handleAddService = () => {
    setIsPopupOpen(true);
  };

  // Function to handle form submission for adding a new service
  const handleSubmit = (e) => {
    e.preventDefault();
    setServices([...services, newService]); // Add the new service to the services array
    setIsPopupOpen(false); // Close the popup
    setNewService({ icon: "", title: "" }); // Clear the input fields
  };

  // Function to handle input changes in the popup form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewService({ ...newService, [name]: value }); // Update the newService state
  };

  return (
    // Main container for the Services section
    <section className="py-16 bg-white">
      {/* Heading Section */}
      <div className="text-center">
        <h2 className="text-sm font-bold uppercase text-gray-600">Services</h2> {/* Subheading */}
        <h3 className="text-3xl font-bold text-teal-600 mt-2">What Do I Offer</h3> {/* Main Heading */}
        <p className="mt-4 text-gray-600 text-xl mx-auto">
          It is a long established fact that a reader will be distracted by the next content of a page when
          <p className="tracking-tight">looking at its layout. The point of all a using the best of all the places.</p> {/* Description */}
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 px-6 md:px-28">
        {/* Display existing services */}
        {services.map((service, index) => (  
          <div                                 
            key={index} // Unique key for each service
            className="bg-[#f1f8f8] p-8 border border-gray-300 rounded-md flex flex-col items-center text-center transition transform hover:scale-105"
          >
            {/* Icon Container */}
            <div className="bg-teal-700 text-white p-4 rounded-full text-3xl">
              {service.icon} {/* Display the service icon */}
            </div>
            {/* Service Title */}
            <h4 className="text-lg font-bold text-teal-700 mt-4">{service.title}</h4>
          </div>
        ))}

        {/* Plus Card (to add a new service) */}
        {/* <div
          className="bg-[#f1f8f8] p-8 border border-gray-300 rounded-md flex flex-col items-center text-center transition transform hover:scale-105 cursor-pointer"
          onClick={handleAddService} // Open the popup when clicked
        >
          {/* Plus Icon Container */}
          {/* <div className="bg-teal-700 text-white p-4 rounded-full text-3xl">
            <FaPlus /> {/* Plus icon */}
          {/* </div> */} 
          {/* Add Service Text */}
          {/* <h4 className="text-lg font-bold text-teal-700 mt-4">Add Service</h4> */}
        {/* </div> */} 
      </div>

      {/* Popup Form for Adding New Service */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          {/* Popup Container */}
          <div className="bg-white p-8 rounded-lg w-96">
            {/* Popup Heading */}
            <h2 className="text-2xl font-bold text-teal-700 mb-4">Add New Service</h2>
            {/* Form for Adding New Service */}
            <form onSubmit={handleSubmit}>
              {/* Icon Input Field */}
              <div className="mb-4">
                <label className="block text-gray-700">Icon (React Icon Component)</label>
                <input
                  type="text"
                  name="icon"
                  value={newService.icon}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  placeholder="e.g., <FaCode />"
                />
              </div>
              {/* Title Input Field */}
              <div className="mb-4">
                <label className="block text-gray-700">Title</label>
                <input
                  type="text"
                  name="title"
                  value={newService.title}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  placeholder="e.g., Web Development"
                />
              </div>
              {/* Buttons Container */}
              <div className="flex justify-end">
                {/* Cancel Button */}
                <button
                  type="button"
                  onClick={() => setIsPopupOpen(false)} // Close the popup
                  className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                >
                  Cancel
                </button>
                {/* Add Button */}
                <button
                  type="submit"
                  className="bg-teal-700 text-white px-4 py-2 rounded"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services; // Exporting the Services component