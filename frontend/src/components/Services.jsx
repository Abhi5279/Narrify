import React from "react";
import {
  Film,
  Search,
  BookOpen,
  MessageSquare,
  Clock,
  Brain,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "AI Video Generation",
      description:
        "Transform plain text into engaging, high-quality video content effortlessly.",
      icon: <Film className="w-10 h-10 text-cyan-400" />,
    },
    {
      title: "Key Points Extraction",
      description:
        "Automatically generate clear and structured key points from any text for easy understanding.",
      icon: <Search className="w-10 h-10 text-purple-400" />,
    },
    {
      title: "Study & Research Mode",
      description:
        "Choose between simplified study mode or in-depth research mode to match your purpose.",
      icon: <BookOpen className="w-10 h-10 text-blue-400" />,
    },
    {
      title: "Interactive Chatbot",
      description:
        "Ask queries related to your text, project usage, or AI assistance and get instant help.",
      icon: <MessageSquare className="w-10 h-10 text-green-400" />,
    },
    {
      title: "Time Saving & Efficiency",
      description:
        "Save hours of manual summarization and video editing, boosting productivity.",
      icon: <Clock className="w-10 h-10 text-yellow-400" />,
    },
    {
      title: "Better Understanding & Learning",
      description:
        "Visualize your content through AI-generated videos to improve retention and clarity.",
      icon: <Brain className="w-10 h-10 text-pink-400" />,
    },
  ];

  return (
    <div className="min-h-screen text-gray-100 px-6 py-12">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
        Our Services
      </h1>

      {/* Service Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 
                       border border-gray-700/50 
                       rounded-2xl p-6 shadow-lg 
                       hover:shadow-cyan-500/20 
                       hover:scale-105 transition-all duration-300"
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold mb-2 text-center text-cyan-300">
              {service.title}
            </h2>
            <p className="text-gray-400 text-center">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Chatbot Highlight */}
      <div className="mt-16 max-w-4xl mx-auto 
                      bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900
                      border border-purple-500/30
                      rounded-2xl p-8 shadow-lg text-center">
        <h2 className="text-2xl font-bold text-purple-400 mb-4">
          Interactive Chatbot
        </h2>
        <p className="text-gray-300 mb-2">
          Have questions about using Narrify AI? Our AI chatbot provides instant
          guidance and helps you get the most out of your text-to-video workflow.
        </p>
        <p className="text-gray-400 italic">
          (Simply type your query in the chatbot, and get answers immediately!)
        </p>
      </div>
    </div>
  );
}
