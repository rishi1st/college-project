import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FiSearch } from "react-icons/fi";

const PaymentStatusPage = () => {
  const { id } = useParams(); // Get the course ID from the URL

  // Retrieve students from the Redux store
  const students = useSelector((state) => state.student.students);

  // Set up state for search input
  const [searchTerm, setSearchTerm] = useState("");

  // Filter students enrolled in the specific course
  const filteredStudents = students?.filter(
    (student) => student.course === id.toUpperCase()
  );

  // Filter students by name based on the search input
  const searchedStudents = filteredStudents?.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Navigate function for routing
  const navigate = useNavigate();

  // Handle payment functionality
  const handlePayment = (student) => {
    // Navigate to the payment request page and pass student info and course id
    navigate(`/course/${id}/payment-request/${student.id}`, { state: { student, courseId: id } });
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-blue-500 via-teal-400 to-purple-500 text-white h-20 px-6 md:px-10 flex flex-wrap items-center justify-between shadow-md">
        {/* Event Page Title */}
        <div className="text-lg sm:text-2xl font-bold">
          <Link to={`/course/${id}/payment`}>{id} <span className="text-white">Contribution Page</span></Link>
        </div>

        {/* Search Bar */}
        <div className="flex-grow mt-3 md:mt-0 md:max-w-md relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name..."
            className="w-full text-sm md:text-base pl-10 pr-4 py-2 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-md transition-all duration-200"
          />
          <FiSearch className="absolute left-3 top-2.5 text-gray-500 text-lg" />
        </div>
      </nav>

      <div className="p-6 text-center">
        <h1 className="text-3xl font-bold text-gray-700 mb-4">
          Payment Status for <span className="text-blue-500">{id.toUpperCase()}</span> Course
        </h1>

        {/* Conditional Rendering for Students */}
        {searchedStudents && searchedStudents.length > 0 ? (
          <div className="mt-6 max-w-5xl mx-auto">
            {/* Header Row */}
            <div className="flex items-center justify-between px-4 py-4 bg-gradient-to-r from-blue-200 via-purple-200 rounded-lg font-bold shadow-xl">
              <div className="w-1/3 text-left">Name</div>
              <div className="w-1/3 text-center">Roll no</div>
              <div className="w-1/3 text-right">Status</div>
            </div>

            {/* Student Rows */}
            {searchedStudents.map((student) => (
              <div
                key={student.id}
                className="flex items-center justify-between px-4 py-4 bg-zinc-200 rounded-lg font-bold shadow-lg my-4"
              >
                <div className="w-1/3 text-left">{student.name}</div>
                <div className="w-1/3 text-center">{student.rollno}</div>
                <div className="w-1/3 text-right">
                  <button
                    className={`pay-button px-4 py-2 rounded-lg shadow-lg text-white font-semibold transition-transform transform hover:scale-105 ${
                      student.paymentStatus
                        ? "bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600"
                        : "bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600"
                    }`}
                    disabled={student.paymentStatus}
                    onClick={() => handlePayment(student)}
                  >
                    {student.paymentStatus ? "Paid" : "Pay-500"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h2 className="text-gray-600 mt-6">No students found for this course.</h2>
        )}

        {/* Back to Course Home Link */}
        <Link
          to={`/course/${id}`}
          className="inline-block bg-gray-500 text-white px-6 py-2 rounded-md shadow hover:bg-gray-600 transition mt-6"
        >
          Back to Course Home
        </Link>
      </div>
    </>
  );
};

export default PaymentStatusPage;
