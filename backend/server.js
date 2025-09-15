import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Dummy routes
app.post("/api/explain", (req, res) => {
  const { code } = req.body;
  res.json({ result: `This code defines: ${code.substring(0, 20)}...` });
});

app.post("/api/optimize", (req, res) => {
  const { code } = req.body;
  res.json({
    result: [
      "Use meaningful variable names",
      "Avoid nested loops if possible",
      "Add comments for clarity"
    ]
  });
});

app.post("/api/quiz", (req, res) => {
  res.json({
    result: [
      {
        question: "What does this code do?",
        options: ["Sorts an array", "Reverses a string", "Prints numbers"],
        answer: "Sorts an array"
      }
    ]
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
