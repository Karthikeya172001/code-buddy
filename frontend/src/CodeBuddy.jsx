import React, { useState } from "react";
import { explainCode, suggestOptimizations, generateQuiz } from "./api";

const CodeBuddy = () => {
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAction = async (actionFn, errorMsg) => {
    if (!code.trim()) {
      alert("Please enter code first!");
      return;
    }
    setLoading(true);
    setResult("");
    try {
      const response = await actionFn(code);
      setResult(response.data.result);
    } catch (err) {
      setResult(errorMsg);
      console.error(err);
    }
    setLoading(false);
  };

  const copyResult = () => {
    if (result) navigator.clipboard.writeText(result);
  };

  return (
    <div style={{ padding: "10px", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "1.5rem" }}>🧑‍💻 Code Buddy</h1>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Paste your code here..."
        rows={10}
        style={{ width: "100%", marginBottom: "10px", fontSize: "1rem" }}
      />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        <button
          onClick={() =>
            handleAction(explainCode, "Error explaining code")
          }
        >
          Explain Code
        </button>
        <button
          onClick={() =>
            handleAction(suggestOptimizations, "Error suggesting optimizations")
          }
        >
          Suggest Optimizations
        </button>
        <button
          onClick={() =>
            handleAction(generateQuiz, "Error generating quiz")
          }
        >
          Generate Quiz
        </button>
      </div>
      {loading && <p>⏳ Loading...</p>}
      <div
        style={{
          marginTop: "20px",
          whiteSpace: "pre-wrap",
          wordWrap: "break-word",
        }}
      >
        <h3>Result:</h3>
        {result || "❌ No result yet"}
        {result && (
          <button onClick={copyResult} style={{ display: "block", marginTop: "10px" }}>
            Copy Result
          </button>
        )}
      </div>
    </div>
  );
};

export default CodeBuddy;
