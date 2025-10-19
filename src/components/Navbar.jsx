import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Menu, X } from "lucide-react"; // for mobile toggle icons

const Navbar = ({ data, setData, setRefr }) => {
  const [open, setOpen] = useState(false);

  const handlelogout = async () => {
    const logout = await axios.get("https://final-checking.vercel.app//api/logout", {
      withCredentials: true,
    });
    setData(null);
    setRefr("l");
    setOpen(false);
  };

  return (
    <nav className="bg-green-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <h1 className="text-2xl font-bold">Healthmate</h1>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-8">
            {data && (
              <li>
                <Link to="/dashboard">
                  <button className="font-bold bg-black text-white p-2 rounded-2xl">
                    Dashboard
                  </button>
                </Link> 
              </li>
            )}
            <li>
              <Link to="/home">
                <button className="font-bold bg-black text-white p-2 rounded-2xl">
                  Home
                </button>
              </Link>
            </li>
            <li>
              <button className="font-bold bg-black text-white p-2 rounded-2xl">
                About
              </button>
            </li>
          </ul>

          {/* Desktop Login/Logout */}
          <div className="hidden md:block">
            {!data && (
              <Link to="/">
                <button className="font-bold bg-black text-white p-2 rounded-2xl">
                  Login
                </button>
              </Link>
            )}
            {data && (
              <button
                onClick={handlelogout}
                className="font-bold bg-black text-white p-2 rounded-2xl"
              >
                Log out
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-blue-700 px-4 pb-4 space-y-3">
          {data && (
            <Link to="/dashboard" onClick={() => setOpen(false)}>
              <button className="block w-full font-bold bg-black text-white p-2 rounded-2xl">
                Dashboard
              </button>
            </Link>
          )}
          <Link to="/home" onClick={() => setOpen(false)}>
            <button className="block w-full font-bold bg-black text-white p-2 rounded-2xl">
              Home
            </button>
          </Link>
          <button className="block w-full font-bold bg-black text-white p-2 rounded-2xl">
            About
          </button>

          {!data && (
            <Link to="/" onClick={() => setOpen(false)}>
              <button className="block w-full font-bold bg-black text-white p-2 rounded-2xl">
                Login
              </button>
            </Link>
          )}
          {data && (
            <button
              onClick={handlelogout}
              className="block w-full font-bold bg-black text-white p-2 rounded-2xl"
            >
              Log out
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
