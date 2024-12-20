import React from "react";
import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <nav className="flex justify-between items-center bg-black text-white h-[80px] px-5">
      <div className="text-xl sm:text-2xl font-bold text-center"><Link to={'/'}>Event Management</Link></div>

      {/* Links for courses */}
      <div className="space-x-4">
        <Link to="/course/bca" className="text-xl sm:text-2xl font-bold">BCA</Link>
        <Link to="/course/mca" className="text-xl sm:text-2xl font-bold">MCA</Link>
        <Link to="/course/bba" className="text-xl sm:text-2xl font-bold">BBA</Link>
        <Link to="/course/mba" className="text-xl sm:text-2xl font-bold">MBA</Link>
      </div>
    </nav>
  );
};

export default MainNav;
