import React, { useState } from "react";
import { explainCode, suggestOptimizations, generateQuiz } from "./api";
import "./CodeBuddy.css";

const CodeBuddy = () => {
  const [code, setCode] = useState("");
  const [displayedResult, setDisplayedResult] = useState("");

  // Typing effect function
  const typeResult = (text) => {
    let index = 0;
    setDisplayedResult("");
    const interval = setInterval(() => {
      setDisplayedResult((prev) => prev + text[index]);
      index++;
      if (index >= text.length) clearInterval(interval);
    }, 20);
  };

  const handleExplain = async () => {
    if (!code.trim()) return alert("Please enter code first!");
    try {
      const response = await explainCode(code);
      typeResult(response.data.result);
    } catch (err) {
      setDisplayedResult("❌ Error explaining code");
      console.error(err);
    }
  };

  const handleOptimize = async () => {
    if (!code.trim()) return alert("Please enter code first!");
    try {
      const response = await suggestOptimizations(code);
      typeResult(response.data.result);
    } catch (err) {
      setDisplayedResult("❌ Error suggesting optimizations");
      console.error(err);
    }
  };

  const handleQuiz = async () => {
    if (!code.trim()) return alert("Please enter code first!");
    try {
      const response = await generateQuiz(code);
      typeResult(response.data.result);
    } catch (err) {
      setDisplayedResult("❌ Error generating quiz");
      console.error(err);
    }
  };

  return (
    <div className="CodeBuddyContainer">
      <h1>🧑‍💻 Code Buddy</h1>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Paste your code here..."
        rows={10}
      />
      <div className="button-group">
        <button onClick={handleExplain}>Explain Code</button>
        <button onClick={handleOptimize}>Suggest Optimizations</button>
        <button onClick={handleQuiz}>Generate Quiz</button>
      </div>
      <div className="result">
        <h3>Result:</h3>
        <pre>{displayedResult || "❌ No result yet"}</pre>
      </div>
    </div>
  );
};

export default CodeBuddy;
