import React, { useState } from "react";
import { explainCode, suggestOptimizations, generateQuiz } from "./api"; // Make sure the path is correct

const CodeBuddy = () => {
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");

  // Explain Code
  const handleExplain = async () => {
    if (!code.trim()) {
      alert("Please enter code first!");
      return;
    }
    try {
      const response = await explainCode(code);
      setResult(response.data.result);
    } catch (err) {
      setResult("Error explaining code");
      console.error(err);
    }
  };

  // Suggest Optimizations
  const handleOptimize = async () => {
    if (!code.trim()) {
      alert("Please enter code first!");
      return;
    }
    try {
      const response = await suggestOptimizations(code);
      setResult(response.data.result);
    } catch (err) {
      setResult("Error suggesting optimizations");
      console.error(err);
    }
  };

  // Generate Quiz
  const handleQuiz = async () => {
    if (!code.trim()) {
      alert("Please enter code first!");
      return;
    }
    try {
      const response = await generateQuiz(code);
      setResult(response.data.result);
    } catch (err) {
      setResult("Error generating quiz");
      console.error(err);
    }
  };

  // Styles for responsiveness
  const styles = {
    container: {
      padding: "10px",
      maxWidth: "600px",
      margin: "0 auto",
      fontFamily: "Arial, sans-serif",
    },
    textarea: {
      width: "100%",
      marginBottom: "10px",
      fontSize: "1rem",
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      boxSizing: "border-box",
      resize: "vertical",
    },
    button: {
      padding: "10px 15px",
      fontSize: "1rem",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer",
      flex: "1 1 45%",
      minWidth: "120px",
      marginBottom: "10px",
    },
    buttonContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      justifyContent: "space-between",
    },
    result: {
      marginTop: "20px",
      whiteSpace: "pre-wrap",
      wordWrap: "break-word",
      padding: "10px",
      border: "1px solid #ddd",
      borderRadius: "5px",
      backgroundColor: "#f9f9f9",
    },
  };

  return (
    <div style={styles.container}>
      <h1>🧑‍💻 Code Buddy</h1>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Paste your code here..."
        rows={10}
        style={styles.textarea}
      />
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={handleExplain}>
          Explain Code
        </button>
        <button style={styles.button} onClick={handleOptimize}>
          Suggest Optimizations
        </button>
        <button style={styles.button} onClick={handleQuiz}>
          Generate Quiz
        </button>
      </div>
      <div style={styles.result}>
        <h3>Result:</h3>
        {result || "❌ No result yet"}
      </div>
    </div>
  );
};

export default CodeBuddy;
