import express from "express";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.js";

dotenv.config();
const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());
const PORT = 8000;
const API_KEY = process.env.GEMINI_API_KEY;

const ai = new GoogleGenerativeAI(API_KEY);

app.use("/api/auth", authRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,  
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("Failed to connect to MongoDB", err);
});

// Route: Generate key points
app.post("/generate-keypoints", async (req, res) => {
  const { text, level } = req.body;

  if (!text) {
    return res.status(400).json({ error: "Text is required" });
  }

  try {
    const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
      You are Narrify AI, a professional AI assistant for educational content.
      Analyze the following text and provide:
      1. Clear key points (bullet points)
      2. Most important topics
      3. Real-time, practical examples for the text
      Adapt your response according to the reading level: ${level}.
      Only respond in structured JSON format like this:

      {
        "keyPoints": ["...", "..."],
        "importantTopics": ["...", "..."],
        "examples": ["...", "..."]
      }

      Text: ${text}
    `;

    const result = await model.generateContent(prompt);

    // Clean up the text and parse JSON
    const cleanText = result.response
      .text()
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    let parsed;
    try {
      parsed = JSON.parse(cleanText);
    } catch (e) {
      console.error("Failed to parse AI response as JSON:", e);
      return res.status(500).json({ error: "Failed to parse AI response" });
    }

    res.json(parsed); // Clean JSON with keyPoints, importantTopics, examples
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong with Narrify AI" });
  }
});



app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

