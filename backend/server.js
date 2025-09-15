import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Explain Code
app.post("/api/explain", async (req, res) => {
  try {
    const { code } = req.body;
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a helpful programming tutor." },
        { role: "user", content: `Explain this code:\n\n${code}` },
      ],
    });

    res.json({ result: response.choices[0].message.content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error explaining code" });
  }
});

// Suggest Optimizations
app.post("/api/optimize", async (req, res) => {
  try {
    const { code } = req.body;
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a senior code reviewer." },
        { role: "user", content: `Suggest optimizations for this code:\n\n${code}` },
      ],
    });

    res.json({ result: response.choices[0].message.content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error suggesting optimizations" });
  }
});

// Generate Quiz
app.post("/api/quiz", async (req, res) => {
  try {
    const { code } = req.body;
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a programming quiz generator." },
        { role: "user", content: `Generate 3 multiple-choice quiz questions based on this code:\n\n${code}` },
      ],
    });

    res.json({ result: response.choices[0].message.content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error generating quiz" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
