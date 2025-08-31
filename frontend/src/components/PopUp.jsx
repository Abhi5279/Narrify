import { useEffect } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";

const PopUp = ({ isOpen, title, message, onClose, type = "success" }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-start justify-center mt-6 z-[1000]">
      <motion.div
        initial={{ opacity: 0, y: -40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`relative flex items-center gap-4 px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-lg border
        ${type === "success"
            ? "bg-green-500/10 border-green-400/30"
            : "bg-red-500/10 border-red-400/30"
          }`}
      >
        {/* Icon */}
        <div
          className={`flex items-center justify-center w-10 h-10 rounded-full text-white font-bold shadow-md 
          ${type === "success" ? "bg-green-500" : "bg-red-500"}`}
        >
          {type === "success" ? "✔" : "✖"}
        </div>

        {/* Text */}
        <div className="flex flex-col">
          <h2
            className={`text-lg font-bold tracking-wide 
            ${type === "success" ? "text-green-400" : "text-red-400"}`}
          >
            {title}
          </h2>
          <p className="text-gray-200 text-sm">{message}</p>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-white transition"
        >
          <X size={18} />
        </button>
      </motion.div>
    </div>
  );
};

export default PopUp;
