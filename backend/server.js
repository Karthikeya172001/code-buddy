// backend/server.js
import express from "express";
import cors from "cors";

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Root check (to confirm backend is alive)
app.get("/", (req, res) => {
  res.send("Code Buddy Backend is running ✅");
});

// ✅ API routes
app.post("/api/explain", (req, res) => {
  const { code } = req.body;
  if (!code) {
    return res.status(400).json({ error: "No code provided" });
  }
  res.json({ explanation: `This is a dummy explanation of: ${code}` });
});

app.post("/api/optimize", (req, res) => {
  const { code } = req.body;
  if (!code) {
    return res.status(400).json({ error: "No code provided" });
  }
  res.json({ optimizations: [`Optimize loop in: ${code}`, `Use constants where possible`] });
});

app.post("/api/quiz", (req, res) => {
  const { code } = req.body;
  if (!code) {
    return res.status(400).json({ error: "No code provided" });
  }
  res.json({
    quiz: [
      { question: "What does this code do?", options: ["Option A", "Option B"], answer: "Option A" }
    ]
  });
});

// ✅ Port (Render sets process.env.PORT)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});