import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middleware
app.use(cors());
app.use(express.json()); // <--- very important for POST body parsing

// ✅ Routes
app.post("/api/explain", (req, res) => {
  const { code } = req.body;

  if (!code) {
    return res.status(400).json({ error: "No code provided" });
  }

  // Dummy response (replace with AI logic later)
  return res.json({ explanation: `This is a placeholder explanation for: ${code}` });
});

app.post("/api/optimize", (req, res) => {
  const { code } = req.body;

  if (!code) {
    return res.status(400).json({ error: "No code provided" });
  }

  return res.json({ optimization: `Here’s a dummy optimization for: ${code}` });
});

app.post("/api/quiz", (req, res) => {
  const { code } = req.body;

  if (!code) {
    return res.status(400).json({ error: "No code provided" });
  }

  return res.json({
    quiz: [
      { q: "What does this code do?", a: "It runs something" },
      { q: "How could you optimize it?", a: "Use best practices" },
    ],
  });
});

// ✅ Root check
app.get("/", (req, res) => {
  res.send("✅ Code Buddy Backend Running");
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
