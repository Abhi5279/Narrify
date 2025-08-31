import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const teamMembers = [
    { name: "P. Abhishek", role: "Leader", contact: "99230040701" },
    { name: "B. Jaideep", role: "Member", contact: "99230040078" },
    { name: "P. V. S. N. Gopi", role: "Member", contact: "99230040700" },
    { name: "P. Kusumanjali", role: "Member", contact: "9923008028" },
    { name: "J. Poojitha Reddy", role: "Member", contact: "9923008004" },
  ];

  return (
    <div className="min-h-screen text-gray-100 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
        >
          About Us
        </motion.h1>

        {/* Project Overview */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-400">
            Our Project
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg md:text-xl">
            <strong className="text-cyan-300">Narrify AI</strong> is an innovative web
            application designed to transform raw text into engaging video
            content using the power of Artificial Intelligence. With advanced
            text summarization and AI-driven video generation, our platform helps
            users easily create educational, research, or presentation videos
            from any input text. By combining intuitive key point extraction,
            structured storytelling, and multimedia output,{" "}
            <strong className="text-cyan-300">Narrify AI</strong> streamlines
            content creation for students, researchers, and professionals alike.
          </p>
        </motion.section>

        {/* Team Members */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-purple-400 text-center">
            Meet Our Team
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-gray-700 hover:border-purple-400/40"
              >
                <h3 className="text-xl font-semibold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-400 mb-1">{member.role}</p>
                <p className="text-gray-500 text-sm">Reg: {member.contact}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 text-center text-gray-500 text-sm"
        >
          &copy; 2025 Narrify AI. All Rights Reserved.
        </motion.p>
      </div>
    </div>
  );
}
