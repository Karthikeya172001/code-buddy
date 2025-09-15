const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.post("/api/explain", (req, res) => {
  const { code } = req.body;
  if (!code) return res.status(400).json({ error: "Code is required" });
  res.json({ explanation: "This is a dummy explanation." });
});

app.post("/api/optimize", (req, res) => {
  const { code } = req.body;
  if (!code) return res.status(400).json({ error: "Code is required" });
  res.json({ optimization: "This is a dummy optimization." });
});

app.post("/api/quiz", (req, res) => {
  const { code } = req.body;
  if (!code) return res.status(400).json({ error: "Code is required" });
  res.json({ quiz: ["Q1: What does this code do?", "Q2: Suggest an optimization."] });
});

app.get("/", (req, res) => {
  res.send("✅ Code Buddy Backend is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));