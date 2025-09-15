import React, { useState } from "react";
import { explainCode, suggestOptimizations, generateQuiz } from "./api";

const CodeBuddy = () => {
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");

  const handleAction = async (action) => {
    if (!code.trim()) {
      alert("Please enter code first!");
      return;
    }
    try {
      let response;
      if (action === "explain") response = await explainCode(code);
      else if (action === "optimize") response = await suggestOptimizations(code);
      else response = await generateQuiz(code);

      setResult(response.data.result);
    } catch (err) {
      setResult(`Error performing action: ${action}`);
      console.error(err);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🧑‍💻 Code Buddy</h1>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Paste your code here..."
        rows={10}
        style={styles.textarea}
      />
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={() => handleAction("explain")}>
          Explain Code
        </button>
        <button style={styles.button} onClick={() => handleAction("optimize")}>
          Suggest Optimizations
        </button>
        <button style={styles.button} onClick={() => handleAction("quiz")}>
          Generate Quiz
        </button>
      </div>
      <div style={styles.resultBox}>
        <h3>Result:</h3>
        <pre style={styles.result}>{result || "❌ No result yet"}</pre>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "700px",
    margin: "auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    textAlign: "center",
    color: "#2c3e50",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginBottom: "10px",
    resize: "vertical",
  },
  buttonContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    justifyContent: "center",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "14px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#3498db",
    color: "#fff",
    transition: "background-color 0.3s",
  },
  resultBox: {
    maxHeight: "300px",
    overflowY: "auto",
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "10px",
    backgroundColor: "#f9f9f9",
  },
  result: {
    whiteSpace: "pre-wrap",
    wordBreak: "break-word",
  },
};

export default CodeBuddy;
