import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // 👈 Link import kiya
import Footer from "./educators/Footer";

const CursorEffect = () => {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.style.position = "fixed";
    cursor.style.width = "20px";
    cursor.style.height = "20px";
    cursor.style.borderRadius = "50%";
    cursor.style.background = "rgba(59,130,246,0.6)";
    cursor.style.pointerEvents = "none";
    cursor.style.zIndex = "9999";
    cursor.style.boxShadow = "0 0 20px rgba(59,130,246,0.8)";
    document.body.appendChild(cursor);

    const move = (e) => {
      cursor.style.left = `${e.clientX - 10}px`;
      cursor.style.top = `${e.clientY - 10}px`;
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      cursor.remove();
    };
  }, []);

  return null;
};

const AuthForm = ({ mode = "login", onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "STUDENT",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await onSubmit(formData);

    if (user && mode === "login") {
      // ✅ Redirect based on role
      switch (user.role) {
        case "ADMIN":
          navigate("/admin/home");
          break;
        case "EDUCATOR":
          navigate("/educator/home");
          break;
        case "STUDENT":
        default:
          navigate("/student/home");
          break;
      }
    }
  };

  return (
    <>
      <CursorEffect />

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-cyan-50 to-white font-sans">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md border border-gray-200"
        >
          <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6 tracking-wide">
            {mode === "login" ? "Welcome Back 👋" : "Create an Account 🚀"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {mode === "register" && (
              <>
                <label className="block text-sm text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 mt-1 rounded-xl bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />

                <label className="block text-sm text-gray-700 mt-3">Role</label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-4 py-3 mt-1 rounded-xl bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                  <option value="STUDENT">Student</option>
                  <option value="EDUCATOR">Educator</option>
                  <option value="ADMIN">Admin</option>
                </select>
              </>
            )}

            <label className="block text-sm text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full px-4 py-3 mt-1 rounded-xl bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />

            <label className="block text-sm text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
              className="w-full px-4 py-3 mt-1 rounded-xl bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold shadow-lg hover:opacity-90 transition"
            >
              {mode === "login" ? "Login" : "Register"}
            </motion.button>
          </form>

          <p className="text-center text-gray-600 text-sm mt-6">
            {mode === "login" ? (
              <>
                Don’t have an account?{" "}
                <Link to="/register" className="text-indigo-600 font-semibold hover:underline">
                  Register now!
                </Link>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <Link to="/login" className="text-indigo-600 font-semibold hover:underline">
                  Login now!
                </Link>
              </>
            )}
          </p>
        </motion.div>
      </div>

      <Footer />
    </>
  );
};

export default AuthForm;
