import React from "react";

export default function Footer() {
  return (
    <footer className=" text-gray-300 py-10 mt-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Project Info */} 
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
            Narrify AI
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            A next-gen platform that transforms your ideas and text into
            impactful, AI-powered video content.
          </p>
        </div>

        {/* College Info */}
        <div className="text-center md:text-right">
          <h3 className="text-lg font-semibold text-purple-400 mb-1">
            Institution
          </h3>
          <p className="text-gray-400 text-sm">
            Kalasalingam Academy of Research and Education <br />
            Krishnankoil, Tamil Nadu, India
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-800 pt-4 text-center text-gray-200 text-sm">
        &copy; {new Date().getFullYear()} Narrify AI. Built with passion and
        precision. All Rights Reserved.
      </div>
    </footer>
  );
}
