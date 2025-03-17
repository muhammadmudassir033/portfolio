import React, { useState } from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  // Function to toggle popup
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  // Function to handle form submission and redirect to WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the WhatsApp URL
    const phoneNumber = "+923180447716"; // Replace with your WhatsApp number
    const whatsappMessage = encodeURIComponent(
      `Name: ${name}\nMessage: ${message}`
    );
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${whatsappMessage}`;

    // Open WhatsApp in a new tab
    window.open(url, "_blank");

    // Reset form fields
    setName('');
    setMessage('');
  };

  return (
    <section className="bg-blue-50 dark:bg-slate-800 relative">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        {/* 50-50 Grid Layout for Contact Form and Location Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Location Details */}
          <div className="h-full pr-6">
            <ul className="mb-6 md:mb-0">
              <li className="flex">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                  </svg>
                </div>
                <div className="ml-4 mb-4">
                  <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                    Our Address
                  </h3>
                  <p className="text-gray-600 dark:text-slate-400">
                    Xeven Solution Johar-Town
                  </p>
                  <p className="text-gray-600 dark:text-slate-400">
                    Lahore, Pakistan
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                    <path d="M15 7a2 2 0 0 1 2 2"></path>
                    <path d="M15 3a6 6 0 0 1 6 6"></path>
                  </svg>
                </div>
                <div className="ml-4 mb-4">
                  <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                    Contact
                  </h3>
                  <p className="text-gray-600 dark:text-slate-400">
                    Mobile: 03180447716
                  </p>
                  <p className="text-gray-600 dark:text-slate-400"> 
                    Gmail: m.mudasir4610@gmail.com
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50"> 
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                    <path d="M12 7v5l3 3"></path>
                  </svg>
                </div>
                <div className="ml-4 mb-4">
                  <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                    Working hours
                  </h3>
                  <p className="text-gray-600 dark:text-slate-400">
                    Monday - Friday: 10:00 am - 19:00 pm
                  </p>
                  <p className="text-gray-600 dark:text-slate-400">
                    Saturday &amp; Sunday: 08:00 - 12:00
                  </p>
                </div>
              </li>
            </ul>

            {/* Social Media Icons under Working Hours */}
            <div className="flex justify-start space-x-8 mt-8">
              <a
                href="https://www.instagram.com/muhammadmudassirjan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-600 transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-600 transition-colors"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-mudassir-6521a0271/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-800 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/muhammadmudassir033"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
            <h2 className="mb-4 text-2xl font-bold dark:text-white">
              Ready to Get Started?
            </h2>
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="mb-6">
                <div className="mx-0 mb-1 sm:mb-4">
                  <input
                    type="text"
                    id="name"
                    autoComplete="given-name"
                    placeholder="Your name"
                    className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                    name="name"
                  />
                </div>
                <div className="mx-0 mb-1 sm:mb-4">
                  <input
                    type="email"
                    id="email"
                    autoComplete="email"
                    placeholder="Your email address"
                    className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                    name="email"
                  />
                </div>
                <div className="mx-0 mb-1 sm:mb-4">
                  <textarea
                    id="textarea"
                    name="textarea"
                    cols="30"
                    rows="5"
                    placeholder="Write your message..."
                    className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                  ></textarea>
                </div>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Copyright Text - Full Width */}
        <div className="w-full mt-8">
          <p className="text-base leading-6 text-center font-medium text-gray-200">
            © 2021 Xeven Solution, Inc. All rights reserved.
          </p>
        </div>
      </div>

      {/* WhatsApp Icon */}
      <div
        className="fixed bottom-6 right-6 bg-green-500 p-3 rounded-full cursor-pointer shadow-lg hover:bg-green-600 transition-colors z-50"
        onClick={togglePopup}
      >
        <FaWhatsapp size={32} className="text-white" />
      </div>

      {/* Popup Modal */}
      {isPopupOpen && (
        <>
          {/* Background Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={togglePopup}  
          ></div>

          {/* Popup Content */} 
          <div className="fixed bottom-20 right-6 bg-white p-6 rounded-lg shadow-lg w-96 z-50">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"  
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Message"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-gray-600"
                  onClick={togglePopup}
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </section>
  );
};

export default Footer;