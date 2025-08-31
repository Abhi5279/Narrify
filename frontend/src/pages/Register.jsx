import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PopUp from "../components/PopUp";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // popup state
  const [popup, setPopup] = useState({
    isOpen: false,
    title: "",
    message: "",
    type: "success", // "success" | "error"
  });

  const backendURL = import.meta.env.VITE_BACKEND_URL;

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setPopup({
        isOpen: true,
        title: "Missing Fields",
        message: "Please fill in all fields before proceeding!",
        type: "error",
      });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${backendURL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setPopup({
          isOpen: true,
          title: "Registration Failed",
          message: data.msg || "Something went wrong. Please try again.",
          type: "error",
        });
      } else {
        setPopup({
          isOpen: true,
          title: "Registration Successful 🎉",
          message: "Your account has been created! Redirecting to login...",
          type: "success",
        });

        // Auto-close after 2s and redirect
        setTimeout(() => {
          setPopup({ ...popup, isOpen: false });
          navigate("/login");
        }, 2000);
      }
    } catch (err) {
      console.error(err);
      setPopup({
        isOpen: true,
        title: "Server Error",
        message: "Could not connect to server. Please try again later.",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent text-gray-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-cyan-700/40"
      >
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Create Account
        </h2>
        <p className="text-center text-gray-400 mt-2">Join us today 🚀</p>

        {/* Form */}
        <form onSubmit={handleRegister} className="mt-6 flex flex-col gap-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            className="w-full p-3 rounded-xl bg-gray-800/70 border border-cyan-700/30 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-gray-100"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-3 rounded-xl bg-gray-800/70 border border-cyan-700/30 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-100"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-3 rounded-xl bg-gray-800/70 border border-cyan-700/30 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100"
          />
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:opacity-90 transition text-white font-semibold shadow-md ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        {/* Toggle to Login */}
        <p className="text-center text-gray-400 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-cyan-400 hover:text-blue-400 font-medium transition"
          >
            Login
          </Link>
        </p>
      </motion.div>

      {/* Popup */}
      {popup.isOpen && (
        <PopUp
          isOpen={popup.isOpen}
          title={popup.title}
          message={popup.message}
          type={popup.type}
          onClose={() => setPopup({ ...popup, isOpen: false })}
        />
      )}
    </div>
  );
}
