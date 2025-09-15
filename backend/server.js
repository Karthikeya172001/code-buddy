// backend/server.js
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Root check
app.get("/", (req, res) => {
  res.send("Code Buddy Backend is running ✅");
});

// ✅ Explain Code
app.post("/api/explain", (req, res) => {
  const { code } = req.body;
  if (!code) {
    return res.status(400).json({ error: "No code provided" });
  }
  res.json({ explanation: `This is a simple explanation of: ${code}` });
});

// ✅ Suggest Optimizations
app.post("/api/optimize", (req, res) => {
  const { code } = req.body;
  if (!code) {
    return res.status(400).json({ error: "No code provided" });
  }
  res.json({
    optimizations: [
      "Replace loops with built-in functions",
      "Use constants instead of magic numbers",
      `Optimize code block: ${code}`
    ],
  });
});

// ✅ Generate Quiz
app.post("/api/quiz", (req, res) => {
  const { code } = req.body;
  if (!code) {
    return res.status(400).json({ error: "No code provided" });
  }
  res.json({
    quiz: [
      {
        question: "What does this code do?",
        options: ["Option A", "Option B", "Option C"],
        answer: "Option A",
      },
    ],
  });
});

// ✅ Port setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});