import React, { useState } from "react";
import { explainCode, suggestOptimizations, generateQuiz } from "./api";

function CodeBuddy() {
  const [inputCode, setInputCode] = useState("");
  const [result, setResult] = useState("");

  const handleExplain = async () => {
    try {
      const res = await explainCode(inputCode);
      setResult(res.data.result);
    } catch (err) {
      setResult("❌ Error explaining code");
    }
  };

  return (
    <div>
      <h1>🧑‍💻 Code Buddy</h1>
      <textarea
        value={inputCode}
        onChange={(e) => setInputCode(e.target.value)}
        placeholder="Paste your code here..."
      />
      <button onClick={handleExplain}>Explain Code</button>
      <div>
        <h3>Result:</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default CodeBuddy;