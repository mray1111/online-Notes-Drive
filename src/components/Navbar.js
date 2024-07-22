import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  const navigate = useNavigate();

  // const handleLogout = () => {
  //   localStorage.removeItem('Atoken');
  //   navigate('/logout');
  // };

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  return (
    <div className="navbar flex  mt-0 bg-slate-200 p-4 md:h-[80px] max-sm:w-[800px] text-black ">
      <div className="nav1 flex cursor-pointer text-sm">
        <span className="ml-0 flex max-md:text-center">Online Notes Drive</span>
      </div>
      <div className="nav2 flex-grow md:font-thin text-black ">
        <ul className="flex ml-20 space-x-32 md:text-sm max-sm:font-bold ">
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
