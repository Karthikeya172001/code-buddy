import React, { useState } from "react";
import { explainCode, suggestOptimizations, generateQuiz } from "./api"; // adjust path

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
        <button style={styles.button} onClick={handleExplain}>Explain Code</button>
        <button style={styles.button} onClick={handleOptimize}>Suggest Optimizations</button>
        <button style={styles.button} onClick={handleQuiz}>Generate Quiz</button>
      </div>
      <div style={styles.resultContainer}>
        <h3>Result:</h3>
        <pre style={styles.result}>{result || "❌ No result yet"}</pre>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "10px",
    maxWidth: "600px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "1.5rem",
    textAlign: "center",
    marginBottom: "10px",
  },
  textarea: {
    width: "100%",
    fontSize: "1rem",
    padding: "8px",
    marginBottom: "10px",
    boxSizing: "border-box",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  button: {
    padding: "10px",
    fontSize: "1rem",
    cursor: "pointer",
  },
  resultContainer: {
    marginTop: "15px",
    wordBreak: "break-word",
  },
  result: {
    background: "#f4f4f4",
    padding: "10px",
    borderRadius: "5px",
    whiteSpace: "pre-wrap",
  },
};

export default CodeBuddy;
