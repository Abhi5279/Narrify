import { useState } from "react";

export default function EnterText() {
  const [text, setText] = useState("");
  const [level, setLevel] = useState("Primary-School-Level");
  const [keyPoints, setKeyPoints] = useState([]);
  const [importantTopics, setImportantTopics] = useState([]);
  const [examples, setExamples] = useState([]);
  const [loading, setLoading] = useState(false);

  const backendURL = import.meta.env.VITE_BACKEND_URL;

  const cleanTextItem = (item) => {
    return item
      .replace(/^\*+\s*/, "") // Removes leading asterisks
      .replace(/\*\*/g, "")   // Removes double asterisks
      .trim();
  };

  const handleGenerate = async () => {
    if (!text.trim()) return alert("Please enter some text!");
    setLoading(true);

    try {
      const res = await fetch(`${backendURL}/generate-keypoints`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, level }),
      });



      const data = await res.json();

      if (data.keyPoints && data.importantTopics && data.examples) {
        setKeyPoints(data.keyPoints.map(cleanTextItem));
        setImportantTopics(data.importantTopics.map(cleanTextItem));
        setExamples(data.examples.map(cleanTextItem));
      } else {
        alert("Backend returned incomplete data");
      }
    } catch (err) {
      console.error(err);
      alert("Error generating content!");
    } finally {
      setLoading(false);
    }
  };

  






  return (
    <div className="px-6 min-h-screen flex flex-col items-center text-gray-100">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center tracking-wide bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
        AI Content Generator
      </h1>

      {/* Level Selector */}
      <div className="flex flex-col items-center mb-6 w-full max-w-3xl">
        <label className="text-gray-400 mb-2 font-semibold">Select Reading Level:</label>
        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className="w-full p-3 rounded-xl
            bg-white/5 backdrop-blur-xl 
            border border-cyan-400/40 
            text-gray-200 text-sm font-medium
            focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:border-cyan-300
            hover:border-pink-400 transition-all duration-300 ease-in-out
            shadow-lg"
        >
          <option className="bg-gray-900 text-gray-200">
            Primary-School-Level
          </option>
          <option className="bg-gray-900 text-gray-200">Study-Level</option>
          <option className="bg-gray-900 text-gray-200">High-School-Level</option>
          <option className="bg-gray-900 text-gray-200">Research-Level</option>
          <option className="bg-gray-900 text-gray-200">University-Level</option>
          <option className="bg-gray-900 text-gray-200">Expert-Level</option>
        </select>

      </div>

      {/* Input Text Area */}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={8}
        placeholder="Enter your text here..."
        className="w-full max-w-3xl p-5 rounded-2xl bg-white/5 border border-white/10 shadow-lg text-gray-100 placeholder-gray-400 backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition mb-6"
      />

      {/* Generate Button */}
      <button
        onClick={handleGenerate}
        disabled={loading}
        className={`px-6 py-3 rounded-xl font-semibold tracking-wide shadow-md transition-transform ${loading
          ? "bg-gray-500 cursor-not-allowed"
          : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white hover:scale-105"
          } mb-8`}
      >
        {loading ? "⏳ Generating..." : "🔍 Generate Content"}
      </button>

      {/* Key Points Section */}
      {keyPoints.length > 0 && (
        <div className="w-full max-w-3xl bg-white/5 border border-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg mb-6">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">Key Points</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-200">
            {keyPoints.map((kp, idx) => (
              <li key={idx} className="hover:text-cyan-300 transition">{kp}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Important Topics Section */}
      {importantTopics.length > 0 && (
        <div className="w-full max-w-3xl bg-white/5 border border-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg mb-6">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">Important Topics</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-200">
            {importantTopics.map((topic, idx) => (
              <li key={idx} className="hover:text-purple-300 transition">{topic}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Real-time Examples Section */}
      {examples.length > 0 && (
        <div className="w-full max-w-3xl bg-white/5 border border-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg mb-6">
          <h2 className="text-2xl font-bold mb-4 text-green-400">Real-time Examples</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-200">
            {examples.map((ex, idx) => (
              <li key={idx} className="hover:text-green-300 transition">{ex}</li>
            ))}
          </ul>
        </div>
      )}






    </div>
  );
}
