import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  const navigate = useNavigate();

  // const handleLogout = () => {
  //   localStorage.removeItem('token');
  //   navigate('/logout');
  // };

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  return (
    <div className="navbar flex w-full mt-0 bg-slate-200 h-14 p-4">
      <div className="nav1 flex cursor-pointer text-sm">
        <span className="ml-0">Online Notes Drive</span>
      </div>
      <div className="nav2 flex-grow font-thin">
        <ul className="flex ml-20 space-x-32 text-sm">
          <Link className={`cursor-pointer ${location.pathname === "/" ? "font-bold text-black" : ""}`} to="/">Home</Link>
          <Link className={`cursor-pointer ${location.pathname === "/about" ? "font-bold text-black" : ""}`} to="/about">About Me </Link>
          {localStorage.getItem('token') ? (
           <Link to="/logout" className={`cursor-pointer ${location.pathname === "/logout" ? "font-bold text-black" : ""}`}  >Logout</Link>
          ) : (
            <>
              <Link className={`cursor-pointer ${location.pathname === "/login" ? "font-bold text-black" : ""}`} to="/login">Login</Link>
              <Link className={`cursor-pointer ${location.pathname === "/signup" ? "font-bold text-black" : ""}`} to="/signup">Sign Up</Link>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
