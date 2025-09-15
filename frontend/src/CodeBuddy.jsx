import React, { useState } from "react";
import { explainCode, suggestOptimizations, generateQuiz } from "./api";
import "./CodeBuddy.css";

const CodeBuddy = () => {
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");

  // Typing animation helper
  const typeWriter = (text) => {
    setResult("");
    let i = 0;
    const speed = 30;
    const typing = () => {
      if (i < text.length) {
        setResult((prev) => prev + text.charAt(i));
        i++;
        setTimeout(typing, speed);
      }
    };
    typing();
  };

  const handleExplain = async () => {
    if (!code.trim()) return alert("Please enter code first!");
    try {
      const response = await explainCode(code);
      typeWriter(response.data.result);
    } catch (err) {
      setResult("Error explaining code");
      console.error(err);
    }
  };

  const handleOptimize = async () => {
    if (!code.trim()) return alert("Please enter code first!");
    try {
      const response = await suggestOptimizations(code);
      typeWriter(response.data.result);
    } catch (err) {
      setResult("Error suggesting optimizations");
      console.error(err);
    }
  };

  const handleQuiz = async () => {
    if (!code.trim()) return alert("Please enter code first!");
    try {
      const response = await generateQuiz(code);
      typeWriter(response.data.result);
    } catch (err) {
      setResult("Error generating quiz");
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
      <div className="result">{result || "❌ No result yet"}</div>
    </div>
  );
};

export default CodeBuddy;
