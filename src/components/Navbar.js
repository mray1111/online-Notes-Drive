import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);
  return (
    <div className="navbar flex w-1vw mt-0 bg-slate-200 h-14 p-4 ">
      <div className="nav1 flex cursor-pointer text-sm">
        <span ml-0>Onlines Notes Drive </span>
      </div>
      <div className="nav2 flex-grow font-thin">
        <ul className="flex ml-20 space-x-32 text-sm">
          <Link
            className={`cursor-pointer ${location.pathname === "/" ? "font-bold text-black" : ""}`}to="/">Home</Link>
          <Link
            className={`cursor-pointer ${location.pathname === "/about" ? "font-bold text-black" : ""}`} to="/about">About</Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
