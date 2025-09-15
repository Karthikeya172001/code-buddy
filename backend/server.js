import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/api/explain", async (req, res) => {
  const { code } = req.body;
  if (!code?.trim()) return res.status(400).json({ error: "Empty code input" });

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [{ role: "user", content: `Explain this code:\n${code}` }],
    });
    res.json({ result: response.choices[0].message.content });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/optimize", async (req, res) => {
  const { code } = req.body;
  if (!code?.trim()) return res.status(400).json({ error: "Empty code input" });

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [{ role: "user", content: `Suggest optimizations for this code:\n${code}` }],
    });
    res.json({ result: response.choices[0].message.content });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/quiz", async (req, res) => {
  const { code } = req.body;
  if (!code?.trim()) return res.status(400).json({ error: "Empty code input" });

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [{ role: "user", content: `Generate a quiz based on this code:\n${code}` }],
    });
    res.json({ result: response.choices[0].message.content });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
