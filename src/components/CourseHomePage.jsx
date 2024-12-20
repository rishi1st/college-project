import React from "react";
import { useParams, Link } from "react-router-dom";
import MainNav from "./MainNav";

const CourseHomePage = () => {
  const { id } = useParams(); // Get the course ID from the URL

  return (
    <>
      <MainNav />

      <div className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 min-h-screen flex flex-col items-center justify-center text-white py-16">
        <div className="max-w-4xl w-full text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Welcome to the <span className="text-yellow-300">{id}</span> Course
          </h1>
          <p className="text-lg md:text-xl mb-6">
            This is the official page for the <span className="font-semibold">{id}</span> course. Stay updated with events, important announcements, and more!
          </p>

          {/* Course Details */}
          <div className="bg-white text-gray-700 p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Course Details</h2>
            <p className="text-lg mb-4">
              The <strong>{id}</strong> course is designed to provide an in-depth understanding of the subject. It covers various topics, and you'll be able to participate in exciting events related to the course.
            </p>
            <p className="text-lg">
              Join us for hands-on sessions, workshops, and more as you embark on a journey of learning and growth.
            </p>
          </div>

          {/* Navigation to Payment Status */}
          <div className="mt-8">
            <Link
              to={`/course/${id}/payment`}
              className="inline-block bg-gradient-to-r from-teal-400 to-green-400 text-white py-3 px-8 rounded-lg text-xl font-semibold hover:from-teal-500 hover:to-green-500 transition"
            >
              Go to Payment Status
            </Link>
          </div>

          {/* Call to Action */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-white mb-4">Ready to get started?</h2>
            <p className="text-lg text-white mb-8">
              Click the link below to register for upcoming events and stay updated with all course-related activities.
            </p>
            <Link
              to={`/register/${id}`}
              className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 px-8 rounded-lg text-xl font-semibold hover:from-yellow-500 hover:to-orange-600 transition"
            >
              Register for Events
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseHomePage;
