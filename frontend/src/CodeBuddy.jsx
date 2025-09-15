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
    <div style={{ padding: "10px", maxWidth: "600px", margin: "auto", boxSizing: "border-box" }}>
      <h1 style={{ fontSize: "1.5rem", textAlign: "center" }}>🧑‍💻 Code Buddy</h1>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Paste your code here..."
        rows={8}
        style={{ width: "100%", fontSize: "1rem", marginBottom: "10px", boxSizing: "border-box" }}
      />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
        <button onClick={handleExplain} style={{ flex: "1 1 100%", minWidth: "120px" }}>Explain Code</button>
        <button onClick={handleOptimize} style={{ flex: "1 1 100%", minWidth: "120px" }}>Suggest Optimizations</button>
        <button onClick={handleQuiz} style={{ flex: "1 1 100%", minWidth: "120px" }}>Generate Quiz</button>
      </div>
      <div style={{ marginTop: "15px", whiteSpace: "pre-wrap" }}>
        <h3>Result:</h3>
        {result || "❌ No result yet"}
      </div>
    </div>
  );
};

export default CodeBuddy;
