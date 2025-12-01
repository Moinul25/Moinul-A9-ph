import React, { useContext } from "react";
import { MdOutlinePets } from "react-icons/md";
import { Link } from "react-router";
import { Authcontext } from "../provider/AuthProvider";
import auth from "../firebase/firebase.config";
import { signOut } from "firebase/auth";
const Navbar = () => {
  const { user } = useContext(Authcontext);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <nav className="bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar max-w-7xl mx-auto px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-1 p-3 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/profile">My Profile</Link>
              </li>
            </ul>
          </div>

          <Link
            to="/"
            className="text-2xl font-bold flex items-center gap-2 text-primary"
          >
            <MdOutlinePets className="text-3xl" />
            PetPaws
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-md font-medium gap-2">
            <li>
              <Link className="hover:text-primary duration-200" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary duration-200" to="/services">
                Services
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary duration-200" to="/profile">
                My Profile
              </Link>
            </li>
          </ul>
        </div>
        {user && (
          <div className="navbar-end">
            <btn onClick={handleSignOut} className="btn btn-primary">
              Logout
            </btn>
          </div>
        )}

        {!user && (
          <div className="navbar-end">
            <Link to="/login" className="btn btn-primary px-6 rounded-full">
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
