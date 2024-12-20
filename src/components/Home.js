import React, { useState } from 'react';

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://via.placeholder.com/1500x800/4D90B1/FFFFFF?text=Customer+Service+Image+3"
  ];

  // Function to move to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to move to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Animation */}
      <div className="bg-gradient-to-r from-indigo-300 to-indigo-500 text-white text-center py-16 animate__animated animate__fadeIn">
        <h1 className="text-4xl font-bold mb-4 animate__animated animate__fadeIn animate__delay-1s">
          Welcome to the Public Grievance Redressal System
        </h1>
        <p className="text-lg mb-6 animate__animated animate__fadeIn animate__delay-2s">
          A platform to report, resolve, and track public grievances efficiently.
        </p>
        <button className="bg-yellow-400 text-indigo-800 px-6 py-3 rounded-lg text-lg hover:bg-yellow-300 transform transition duration-500 ease-in-out hover:scale-105">
          Report a Grievance
        </button>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold text-center mb-8 animate__animated animate__fadeIn animate__delay-3s">
          WELCOME TO THE PUBLIC GRIEVANCE REDRESSAL SYSTEM
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section: Carousel and About System */}
          <div className="md:w-2/3">
            {/* Carousel Section: Customer Service Image Slider with Animation */}
            <div className="relative w-full h-64 bg-blue-100 overflow-hidden rounded-lg shadow-lg animate__animated animate__fadeIn">
              <img
                src={images[currentIndex]}
                alt={`Customer Service Image ${currentIndex + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out animate__animated animate__fadeIn"
              />
              {/* Left Arrow */}
              <div className="absolute inset-y-0 left-0 flex items-center">
                <button
                  className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-black hover:bg-opacity-70 transition duration-300 transform hover:scale-125"
                  onClick={prevImage}
                >
                  &lt;
                </button>
              </div>
              {/* Right Arrow */}
              <div className="absolute inset-y-0 right-0 flex items-center">
                <button
                  className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-black hover:bg-opacity-70 transition duration-300 transform hover:scale-125"
                  onClick={nextImage}
                >
                  &gt;
                </button>
              </div>
              {/* Image Indicator Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
                  />
                ))}
              </div>
            </div>

            {/* About System Section with Fade Animation */}
            <div className="bg-yellow-50 p-6 mt-6 rounded-lg shadow-lg animate__animated animate__fadeIn animate__delay-4s">
              <h2 className="text-xl font-semibold mb-4">About the System</h2>
              <p className="text-gray-700">
                The <strong>Online Public Grievances System</strong> is designed to provide a platform for individuals to report and resolve their grievances. This system is an essential tool for District Administrations to measure their efficiency and improve public service.
                <br /><br />
                The grievance redressal mechanism acts as a gauge to assess the effectiveness of government services. Handling public grievances is a crucial activity carried out by the District Administration, contributing to a transparent and responsive government.
              </p>
            </div>
          </div>

          {/* Right Section: Statistics */}
          <div className="md:w-1/3">
            <div className="grid grid-cols-1 gap-8">
              {/* Stats Card 1 */}
              <div className="bg-indigo-200 text-indigo-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-500 transform hover:scale-105 animate__animated animate__fadeIn animate__delay-5s">
                <h3 className="text-xl font-semibold mb-2">Total Complaints</h3>
                <p className="text-4xl font-bold">1,230</p>
              </div>

              {/* Stats Card 2 */}
              <div className="bg-green-200 text-green-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-500 transform hover:scale-105 animate__animated animate__fadeIn animate__delay-6s">
                <h3 className="text-xl font-semibold mb-2">Resolved Complaints</h3>
                <p className="text-4xl font-bold">950</p>
              </div>

              {/* Stats Card 3 */}
              <div className="bg-red-200 text-red-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-500 transform hover:scale-105 animate__animated animate__fadeIn animate__delay-7s">
                <h3 className="text-xl font-semibold mb-2">Pending Complaints</h3>
                <p className="text-4xl font-bold">280</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section with Animation */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-center mb-8 animate__animated animate__fadeIn animate__delay-8s">Features of the System</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-indigo-50 transition duration-300 transform hover:scale-105 animate__animated animate__fadeIn animate__delay-9s">
              <h3 className="text-xl font-semibold mb-4">Easy Registration</h3>
              <p className="text-gray-700">Easily register to file grievances and track their status.</p>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-indigo-50 transition duration-300 transform hover:scale-105 animate__animated animate__fadeIn animate__delay-10s">
              <h3 className="text-xl font-semibold mb-4">Real-time Tracking</h3>
              <p className="text-gray-700">Track the status of your grievance in real-time and get timely updates.</p>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-indigo-50 transition duration-300 transform hover:scale-105 animate__animated animate__fadeIn animate__delay-11s">
              <h3 className="text-xl font-semibold mb-4">Efficient Resolution</h3>
              <p className="text-gray-700">Grievances are efficiently resolved by the concerned authorities.</p>
            </div>

            {/* Feature Card 4 */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-indigo-50 transition duration-300 transform hover:scale-105 animate__animated animate__fadeIn animate__delay-12s">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-700">Our support team is available 24/7 to help resolve issues.</p>
            </div>

            {/* Feature Card 5 */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-indigo-50 transition duration-300 transform hover:scale-105 animate__animated animate__fadeIn animate__delay-13s">
              <h3 className="text-xl font-semibold mb-4">Secure Platform</h3>
              <p className="text-gray-700">Your data is secure with us. We value your privacy and trust.</p>
            </div>

            {/* Feature Card 6 */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-indigo-50 transition duration-300 transform hover:scale-105 animate__animated animate__fadeIn animate__delay-14s">
              <h3 className="text-xl font-semibold mb-4">Multi-Language Support</h3>
              <p className="text-gray-700">The platform supports multiple languages for easy accessibility.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
