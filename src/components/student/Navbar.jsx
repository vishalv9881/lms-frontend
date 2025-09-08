import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { assets } from "./../../assets/assets";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isCourseListPage = window.location.pathname === "/courses";
  const { navigate: appNavigate, isEducator } = useContext(AppContext);

  const navigate = useNavigate();
  const token = localStorage.getItem("token"); // ✅ JWT token check
  const isLoggedIn = !!token;

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div
      className={`flex items-center justify-between px-6 lg:px-32 py-4 border-b border-gray-400 shadow-md ${
        isCourseListPage ? "bg-white" : "bg-cyan-50"
      }`}
    >
      {/* Logo */}
      <img
        onClick={() => appNavigate("/")}
        src={assets.logo}
        alt="logo"
        className="w-24 lg:w-32 cursor-pointer"
      />

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-5 text-gray-500">
        {!isCourseListPage && <Link to="/courses">Courses</Link>}
        <Link to="/">Home</Link>
      </div>

      {/* Right Buttons (Desktop) */}
      <div className="hidden md:flex items-center gap-4">
        <button
          onClick={() => appNavigate("/educator")}
          className="text-gray-700 hover:text-blue-600"
        >
          {isEducator ? "Educator Dashboard" : "Become Educator"}
        </button>
        <Link to="/enroll" className="text-gray-700 hover:text-blue-600">
          My Enrollments
        </Link>

        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="border border-red-600 text-red-600 px-4 py-2 rounded-full hover:bg-red-50 transition"
          >
            Logout
          </button>
        ) : (
          <>
            <button
              onClick={() => navigate("/login")}
              className="border border-blue-600 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-50 transition"
            >
              Sign In
            </button>
            <button
              onClick={() => navigate("/register")}
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Create Account
            </button>
          </>
        )}
      </div>

      {/* Mobile Hamburger Icon */}
      <button
        className="md:hidden text-gray-700 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center gap-4 py-6 text-gray-700 z-50">
          {!isCourseListPage && (
            <Link to="/courses" onClick={() => setMenuOpen(false)}>
              Courses
            </Link>
          )}
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contacts
          </Link>
          <Link to="/enroll" onClick={() => setMenuOpen(false)}>
            My Enrollments
          </Link>
          <button className="hover:text-blue-600">Become Educator</button>

          {isLoggedIn ? (
            <button
              onClick={() => {
                handleLogout();
                setMenuOpen(false);
              }}
              className="border border-red-600 text-red-600 px-4 py-2 rounded-full hover:bg-red-50 transition"
            >
              Logout
            </button>
          ) : (
            <>
              <button
                onClick={() => {
                  navigate("/AuthForm");
                  setMenuOpen(false);
                }}
                className="border border-blue-600 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-50 transition"
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  navigate("/register");
                  setMenuOpen(false);
                }}
                className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
              >
                Create Account
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
