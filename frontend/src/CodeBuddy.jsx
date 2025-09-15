import React, { useState } from "react";
import { explainCode, suggestOptimizations, generateQuiz } from "./api"; // make sure this path is correct

const CodeBuddy = () => {
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  // Helper to call API safely
  const handleRequest = async (apiFn, errorMsg) => {
    if (!code.trim()) {
      alert("⚠️ Please enter code first!");
      return;
    }
    try {
      setLoading(true);
      setResult("");
      const response = await apiFn(code);
      setResult(response.data.result || "✅ No response content");
    } catch (err) {
      console.error(err);
      setResult(`❌ ${errorMsg}`);
    } finally {
      setLoading(false);
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
        style={{
          width: "100%",
          marginBottom: "10px",
          fontFamily: "monospace",
        }}
      />

      <div>
        <button onClick={() => handleRequest(explainCode, "Error explaining code")}>
          Explain Code
        </button>
        <button
          onClick={() => handleRequest(suggestOptimizations, "Error suggesting optimizations")}
          style={{ marginLeft: "10px" }}
        >
          Suggest Optimizations
        </button>
        <button
          onClick={() => handleRequest(generateQuiz, "Error generating quiz")}
          style={{ marginLeft: "10px" }}
        >
          Generate Quiz
        </button>
      </div>

      <div style={{ marginTop: "20px", whiteSpace: "pre-wrap" }}>
        <h3>Result:</h3>
        {loading ? (
          <p>⏳ Processing... please wait</p>
        ) : (
          <p>{result || "❌ No result yet"}</p>
        )}
      </div>
    </div>
  );
};

export default CodeBuddy;
