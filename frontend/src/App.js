import React, { useState } from "react";
import axios from "axios";

function App() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");

  // Use your live backend URL
  const BASE_URL = "https://code-buddy-4mtq.onrender.com";

  const handleExplain = async () => {
    try {
      const res = await axios.post(`${BASE_URL}/api/explain`, { code });
      setResult(res.data.result);
    } catch (err) {
      console.error(err);
      setResult("❌ Error explaining code");
    }
  };

  const handleOptimize = async () => {
    try {
      const res = await axios.post(`${BASE_URL}/api/optimize`, { code });
      setResult(res.data.result);
    } catch (err) {
      console.error(err);
      setResult("❌ Error suggesting optimizations");
    }
  };

  const handleQuiz = async () => {
    try {
      const res = await axios.post(`${BASE_URL}/api/quiz`, { code });
      setResult(res.data.result);
    } catch (err) {
      console.error(err);
      setResult("❌ Error generating quiz");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🧑‍💻 Code Buddy</h1>
      <textarea
        rows="10"
        cols="60"
        placeholder="Paste your code here..."
        value={code}
        onChange={(e) => setCode(e.target.value)}
      ></textarea>
      <br />
      <button onClick={handleExplain}>Explain Code</button>
      <button onClick={handleOptimize}>Suggest Optimizations</button>
      <button onClick={handleQuiz}>Generate Quiz</button>
      <div style={{ marginTop: "20px", whiteSpace: "pre-wrap" }}>
        <h3>Result:</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;