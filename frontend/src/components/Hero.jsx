// Hero.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, Video, BookOpen } from "lucide-react";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-white overflow-hidden ">
      
      {/* Background Glow Blobs
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-teal-500/30 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-pink-500/30 rounded-full blur-[180px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-400/20 rounded-full blur-[220px]" />
      </div> */}

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl space-y-8">
        
        {/* Main Title */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="block text-white drop-shadow-lg">Welcome to</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-300 to-pink-400 animate-text">
            Narrify
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          Turn your <span className="font-semibold text-cyan-300">ideas</span> into 
          <span className="font-semibold text-pink-300"> immersive stories</span> with 
          AI-powered <span className="font-semibold text-teal-300">summaries</span>, 
          <span className="font-semibold text-cyan-300"> key insights</span> and 
          <span className="font-semibold text-pink-300"> instant videos</span>.
        </motion.p>

        {/* Call-to-action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <button
            onClick={() => navigate("/entertext")}
            className="px-8 py-3 bg-gradient-to-r from-teal-400 via-cyan-300 to-pink-400 
            text-gray-900 font-semibold rounded-2xl shadow-lg hover:shadow-xl 
            hover:translate-y-[-3px] hover:scale-105 transition-all duration-300 ease-out"
          >
            🚀 Get Started
          </button>

          <button onClick={() => navigate("/about")}
            className="px-8 py-3 border border-cyan-400/50 text-cyan-300 font-semibold rounded-2xl shadow-lg 
            hover:bg-cyan-400/10 hover:border-cyan-300 hover:translate-y-[-3px] hover:scale-105 
            transition-all duration-300 ease-out"
          >
             About Us
          </button>
        </motion.div>
      </div>

      {/* Feature Highlights */}
      <motion.div
        className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 max-w-5xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.8 }}
      >
        {[
          { icon: <BookOpen className="w-8 h-8 text-teal-300" />, title: "Smart Summaries", desc: "Get concise key points tailored to your reading level." },
          { icon: <Video className="w-8 h-8 text-pink-300" />, title: "Instant Videos", desc: "Generate engaging videos from topics instantly." },
          { icon: <Sparkles className="w-8 h-8 text-cyan-300" />, title: "AI Insights", desc: "Discover important topics and real-world examples." },
        ].map((feature, idx) => (
          <div key={idx} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 
          hover:border-cyan-400/40 hover:scale-105 transition-all duration-300 shadow-xl">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
            <p className="text-sm text-gray-400 mt-2">{feature.desc}</p>
          </div>
        ))}
      </motion.div>

      {/* Stats / Social Proof */}
      <motion.div
        className="relative z-10 mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.2 }}
      >
        {[
          { num: "10k+", label: "Stories Created" },
          { num: "5k+", label: "Active Users" },
          { num: "100+", label: "Topics Covered" },
          { num: "24/7", label: "AI Assistance" },
        ].map((stat, idx) => (
          <div key={idx} className="group">
            <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-300 to-pink-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
              {stat.num}
            </p>
            <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
