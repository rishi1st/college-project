import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const PaymentRequestPage = () => {
  const { studentId } = useParams(); // Get studentId from URL
  const location = useLocation(); // Get passed state data (student info and course ID)
  const { student, courseId } = location.state || {};
  const students = useSelector((state) => state.student.students);

  const [studentData, setStudentData] = useState(student);
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [paymentStatus, setPaymentStatus] = useState(null);

  useEffect(() => {
    if (!studentData) {
      // If student data isn't passed via state, try to find it
      const foundStudent = students.find((student) => student.id === studentId);
      setStudentData(foundStudent);
    }
  }, [students, studentData, studentId]);

  if (!studentData) {
    return <h1 className="text-center text-2xl font-bold text-white">Student not found</h1>;
  }

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Implement actual payment submission logic here
    setPaymentStatus("Payment successful! Thank you.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-black">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center text-white mb-4">Hello {studentData.name},</h1>
        <p className="text-lg text-center text-gray-400 mb-6">
          You can make your payment for the <span className="font-semibold">{courseId.toUpperCase()}</span> course here.
        </p>

        <form onSubmit={handlePaymentSubmit} className="space-y-6">
          <div>
            <label htmlFor="paymentAmount" className="block text-gray-300 text-lg font-medium mb-2">Amount to Pay</label>
            <input
              id="paymentAmount"
              type="text"
              value="500"
              disabled
              className="w-full p-3 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-700 text-white"
            />
          </div>

          <div>
            <label htmlFor="paymentMethod" className="block text-gray-300 text-lg font-medium mb-2">Payment Method</label>
            <select
              id="paymentMethod"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full p-3 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-700 text-white"
            >
              <option value="creditCard">Credit Card</option>
              <option value="debitCard">Debit Card</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Submit Payment
          </button>
        </form>

        {paymentStatus && (
          <div className="mt-4 text-green-400 font-semibold text-center">{paymentStatus}</div>
        )}
      </div>
    </div>
  );
};

export default PaymentRequestPage;
