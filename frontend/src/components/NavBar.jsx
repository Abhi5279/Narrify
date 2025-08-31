import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, User } from "lucide-react";
import logo from "../assets/narrify-logo.png";
import axios from "axios";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  // Check if user is logged in on mount
  useEffect(() => {
    const checkUser = async () => {
      try {
        const res = await axios.get(`${backendURL}/api/auth/me`, {
          withCredentials: true,
        });
        if (res.data.user) setIsLoggedIn(true);
      } catch {}
    };
    checkUser();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post(
        `${backendURL}/api/auth/logout`,
        {},
        { withCredentials: true }
      );
      setIsLoggedIn(false);
      setIsUserMenuOpen(false);
      setIsMobileMenuOpen(false);
      window.location.reload(); // optional to reload page
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  // NavLink styling
  const navLinkClasses = ({ isActive }) =>
    `relative py-2 transition-colors duration-300 ${
      isActive ? "text-rose-400" : "text-gray-300 hover:text-rose-400"
    } after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-rose-400 after:transition-all after:duration-300 ${
      isActive ? "after:w-full" : "after:w-0 group-hover:after:w-full"
    }`;

  const mobileNavLinkClasses = ({ isActive }) =>
    isActive ? "text-rose-400 font-bold" : "text-gray-200";

  return (
    <nav className=" top-0 left-0 z-50 w-full backdrop-blur-md bg-gradient-to-r from-teal-400/20 via-cyan-300/20 to-pink-400/20 border-b border-white/10 shadow-lg mb-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={logo}
              alt="Narrify Logo"
              className="h-20 w-auto drop-shadow-lg group-hover:scale-105 transition-transform"
            />
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center space-x-8  text-md">
            <li className="group">
              <NavLink to="/" className={navLinkClasses}>
                Home
              </NavLink>
            </li>
            <li className="group">
              <NavLink to="/about" className={navLinkClasses}>
                About
              </NavLink>
            </li>
            <li className="group">
              <NavLink to="/entertext" className={navLinkClasses}>
                Generator
              </NavLink>
            </li>
          </ul>

          {/* User Avatar + Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {/* User Avatar */}
            <div className="hidden sm:block relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="w-7 h-7 bg-gray-700/50 rounded-full border-2 border-rose-400/50 flex items-center justify-center text-rose-400 hover:bg-rose-500 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <User size={20} />
              </button>
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-900/80 backdrop-blur-md text-gray-200 rounded-xl shadow-lg border border-rose-400/30 z-50 overflow-hidden">
                  <div className="py-1">
                    {!isLoggedIn && (
                      <>
                        <Link
                          to="/login"
                          className="block px-4 py-2 text-sm hover:bg-rose-500/20 transition"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          Login
                        </Link>
                        <Link
                          to="/register"
                          className="block px-4 py-2 text-sm hover:bg-rose-500/20 transition"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          Sign Up
                        </Link>
                      </>
                    )}
                    {isLoggedIn && (
                      <button
                        className="w-full text-left block px-4 py-2 text-sm hover:bg-rose-500/20 transition"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-200 hover:text-rose-400 transition p-2 rounded-md"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-20 left-0 w-full backdrop-blur-xl border-t border-rose-400/20 z-50 animate-slideDown">
          <ul className="flex flex-col items-center gap-4 p-6 font-medium text-xl">
            <li>
              <NavLink
                to="/"
                className={mobileNavLinkClasses}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={mobileNavLinkClasses}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/entertext"
                className={mobileNavLinkClasses}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Generator
              </NavLink>
            </li>
            <div className="border-t border-rose-400/20 w-3/4 my-2"></div>

            {/* Mobile login/logout */}
            {!isLoggedIn ? (
              <>
                <li>
                  <Link
                    to="/login"
                    className="text-gray-200 hover:text-rose-400 transition"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="text-gray-200 hover:text-rose-400 transition"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <button
                  className="text-gray-200 hover:text-rose-400 transition"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
