import React, { useState } from "react";
import { explainCode, suggestOptimizations, generateQuiz } from "./api";

const CodeBuddy = () => {
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");

  const handleExplain = async () => {
    if (!code.trim()) return alert("Please enter code first!");
    try {
      const response = await explainCode(code);
      setResult(response.data.result);
    } catch (err) {
      setResult("Error explaining code");
      console.error(err);
    }
  };

  const handleOptimize = async () => {
    if (!code.trim()) return alert("Please enter code first!");
    try {
      const response = await suggestOptimizations(code);
      setResult(response.data.result);
    } catch (err) {
      setResult("Error suggesting optimizations");
      console.error(err);
    }
  };

  const handleQuiz = async () => {
    if (!code.trim()) return alert("Please enter code first!");
    try {
      const response = await generateQuiz(code);
      setResult(response.data.result);
    } catch (err) {
      setResult("Error generating quiz");
      console.error(err);
    }
  };

  return (
    <div
      style={{
        padding: "10px",
        maxWidth: "600px",
        margin: "0 auto",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ fontSize: "1.5rem", textAlign: "center" }}>🧑‍💻 Code Buddy</h1>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Paste your code here..."
        rows={10}
        style={{
          width: "100%",
          marginBottom: "10px",
          fontSize: "1rem",
          padding: "8px",
          boxSizing: "border-box",
        }}
      />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        <button
          onClick={handleExplain}
          style={{ flex: 1, padding: "10px", fontSize: "1rem" }}
        >
          Explain Code
        </button>
        <button
          onClick={handleOptimize}
          style={{ flex: 1, padding: "10px", fontSize: "1rem" }}
        >
          Suggest Optimizations
        </button>
        <button
          onClick={handleQuiz}
          style={{ flex: 1, padding: "10px", fontSize: "1rem" }}
        >
          Generate Quiz
        </button>
      </div>
      <div
        style={{
          marginTop: "20px",
          whiteSpace: "pre-wrap",
          maxHeight: "300px",
          overflowY: "auto",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <h3 style={{ marginTop: 0 }}>Result:</h3>
        {result || "❌ No result yet"}
      </div>
    </div>
  );
};

export default CodeBuddy;
