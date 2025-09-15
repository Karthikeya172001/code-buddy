import React, { useState } from "react";
import { explainCode, suggestOptimizations, generateQuiz } from "./api"; // make sure this path is correct

const CodeBuddy = () => {
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");

  // Explain Code
  const handleExplain = async () => {
    if (!code.trim()) {
      alert("Please enter code first!");
      return;
    }
    try {
      const response = await explainCode(code);
      setResult(response.data.result);
    } catch (err) {
      setResult("Error explaining code");
      console.error(err);
    }
  };

  // Suggest Optimizations
  const handleOptimize = async () => {
    if (!code.trim()) {
      alert("Please enter code first!");
      return;
    }
    try {
      const response = await suggestOptimizations(code);
      setResult(response.data.result);
    } catch (err) {
      setResult("Error suggesting optimizations");
      console.error(err);
    }
  };

  // Generate Quiz
  const handleQuiz = async () => {
    if (!code.trim()) {
      alert("Please enter code first!");
      return;
    }
    try {
      const response = await generateQuiz(code);
      setResult(response.data.result);
    } catch (err) {
      setResult("Error generating quiz");
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🧑‍💻 Code Buddy</h1>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Paste your code here..."
        rows={10}
        style={{ width: "100%", marginBottom: "10px" }}
      />
      <div>
        <button onClick={handleExplain}>Explain Code</button>
        <button onClick={handleOptimize} style={{ marginLeft: "10px" }}>
          Suggest Optimizations
        </button>
        <button onClick={handleQuiz} style={{ marginLeft: "10px" }}>
          Generate Quiz
        </button>
      </div>
      <div style={{ marginTop: "20px", whiteSpace: "pre-wrap" }}>
        <h3>Result:</h3>
        {result || "❌ No result yet"}
      </div>
    </div>
  );
};

export default CodeBuddy;