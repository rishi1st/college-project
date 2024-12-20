import React from "react";

const Home = () => (
  <div className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 min-h-screen flex items-center justify-center">
    <div className="max-w-4xl w-full px-6 py-8 text-center text-white">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
        Welcome to the College Event Management Portal
      </h1>
      <p className="text-xl md:text-2xl mb-8">
        Explore upcoming events, register your participation, and track event updates.
      </p>

      {/* Event Cards Section */}
      <div className="flex flex-wrap justify-center gap-8">
        <div className="bg-white text-gray-700 p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <h2 className="text-2xl font-semibold mb-4">Tech Conference 2024</h2>
          <p className="text-lg mb-4">Join us for an exciting tech conference featuring industry leaders and innovators.</p>
          <a
            href="/event/tech-conference"
            className="inline-block bg-gradient-to-r from-teal-400 to-green-400 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:from-teal-500 hover:to-green-500 transition"
          >
            View Event Details
          </a>
        </div>

        <div className="bg-white text-gray-700 p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <h2 className="text-2xl font-semibold mb-4">Cultural Fest 2024</h2>
          <p className="text-lg mb-4">Be part of the biggest cultural event of the year. Performances, competitions, and more!</p>
          <a
            href="/event/cultural-fest"
            className="inline-block bg-gradient-to-r from-teal-400 to-green-400 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:from-teal-500 hover:to-green-500 transition"
          >
            View Event Details
          </a>
        </div>

        <div className="bg-white text-gray-700 p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <h2 className="text-2xl font-semibold mb-4">Sports Day 2024</h2>
          <p className="text-lg mb-4">Get ready to cheer for your favorite teams and participate in exciting sports events!</p>
          <a
            href="/event/sports-day"
            className="inline-block bg-gradient-to-r from-teal-400 to-green-400 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:from-teal-500 hover:to-green-500 transition"
          >
            View Event Details
          </a>
        </div>
      </div>
      
      {/* Event Registration Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-semibold text-white mb-6">Want to Register for an Event?</h2>
        <p className="text-lg text-white mb-8">
          Click below to start your registration process for upcoming events and get all the latest updates.
        </p>
        <a
          href="/register"
          className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 px-8 rounded-lg text-xl font-semibold hover:from-yellow-500 hover:to-orange-600 transition"
        >
          Register Now
        </a>
      </div>
    </div>
  </div>
);

export default Home;
