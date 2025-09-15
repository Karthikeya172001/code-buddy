import React, { useState } from "react";
import { explainCode, suggestOptimizations, generateQuiz } from "./api";

function App() {
  const [inputCode, setInputCode] = useState("");
  const [result, setResult] = useState("");

  const handleExplain = async () => {
    try {
      const res = await explainCode(inputCode);
      console.log("✅ API Response:", res.data);
      setResult(res.data.result);
    } catch (err) {
      console.error("❌ API Error:", err.response ? err.response.data : err.message);
      setResult("❌ Error explaining code");
    }
  };

  const handleOptimize = async () => {
    try {
      const res = await suggestOptimizations(inputCode);
      console.log("✅ API Response:", res.data);
      setResult(res.data.result);
    } catch (err) {
      console.error("❌ API Error:", err.response ? err.response.data : err.message);
      setResult("❌ Error suggesting optimizations");
    }
  };

  const handleQuiz = async () => {
    try {
      const res = await generateQuiz(inputCode);
      console.log("✅ API Response:", res.data);
      setResult(res.data.result);
    } catch (err) {
      console.error("❌ API Error:", err.response ? err.response.data : err.message);
      setResult("❌ Error generating quiz");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🧑‍💻 Code Buddy</h1>
      <textarea
        rows="10"
        cols="60"
        value={inputCode}
        onChange={(e) => setInputCode(e.target.value)}
        placeholder="Paste your code here..."
      />
      <br />
      <button onClick={handleExplain}>Explain Code</button>
      <button onClick={handleOptimize}>Suggest Optimizations</button>
      <button onClick={handleQuiz}>Generate Quiz</button>
      <h3>Result:</h3>
      <pre>{result}</pre>
    </div>
  );
}

export default App;