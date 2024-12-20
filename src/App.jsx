import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./components/Home";
import MainNav from "./components/MainNav";
import CourseHomePage from "./components/CourseHomePage";
import PaymentStatusPage from "./components/PaymentStatusPage";
import PaymentRequestPage from "./components/PaymentRequestPage";
// Error Boundary Component
const ErrorPage = () => (
  <div className="p-6 text-center">
    <h2 className="text-3xl font-bold text-red-500 mb-4">Oops! Page Not Found</h2>
    <p className="text-lg text-gray-500">
      The page you're looking for doesn't exist.
    </p>
  </div>
);

// Define your routes using createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/", // Home route
    element: (
      <div>
        <MainNav /> {/* Navbar for the Home page */}
        <Home />
      </div>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/course/:id", // Dynamic route for course ID
    element: (
      <div>
        <Outlet /> {/* Placeholder for nested routes */}
      </div>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "", // Default child route for /course/:id
        element: <CourseHomePage />,
      },
      {
        path: "payment", // Child route for /course/:id/payment
        element: <PaymentStatusPage />, // No Navbar for this page
      },
      {
           path:"payment-request/:studentId",
           element: <PaymentRequestPage />, // No Navbar for this page
      },
      
    ],
  },
  {
    path: "*", // Catch-all route for invalid URLs
    element: <ErrorPage />, // Display an error page when no matching route is found
  }
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
