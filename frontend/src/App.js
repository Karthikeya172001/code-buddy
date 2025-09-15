import React, { useState } from "react";
import { explainCode, suggestOptimizations, generateQuiz } from "./api";

const CodeBuddy = () => {
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");

  const handleExplain = async () => {
    if (!code.trim()) {
      alert("Please enter some code first!");
      return;
    }
    try {
      const res = await explainCode(code);
      setResult(res.data.result);
    } catch (err) {
      setResult("Error explaining code");
      console.error(err);
    }
  };

  const handleOptimize = async () => {
    if (!code.trim()) {
      alert("Please enter some code first!");
      return;
    }
    try {
      const res = await suggestOptimizations(code);
      setResult(res.data.result);
    } catch (err) {
      setResult("Error suggesting optimizations");
      console.error(err);
    }
  };

  const handleQuiz = async () => {
    if (!code.trim()) {
      alert("Please enter some code first!");
      return;
    }
    try {
      const res = await generateQuiz(code);
      setResult(res.data.result);
    } catch (err) {
      setResult("Error generating quiz");
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🧑‍💻 Code Buddy</h1>
      <textarea
        rows="10"
        cols="50"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Paste your code here..."
      ></textarea>
      <div style={{ marginTop: "10px" }}>
        <button onClick={handleExplain}>Explain Code</button>
        <button onClick={handleOptimize} style={{ marginLeft: "5px" }}>
          Suggest Optimizations
        </button>
        <button onClick={handleQuiz} style={{ marginLeft: "5px" }}>
          Generate Quiz
        </button>
      </div>
      <div style={{ marginTop: "20px", whiteSpace: "pre-wrap" }}>
        {result && <strong>Result:</strong>}
        <p>{result}</p>
      </div>
    </div>
  );
};

export default CodeBuddy;
  