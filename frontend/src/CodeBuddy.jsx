import React, { useState, useRef, useEffect } from "react";
import { explainCode, suggestOptimizations, generateQuiz } from "./api"; // make sure this path is correct

const CodeBuddy = () => {
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");
  const textareaRef = useRef(null);

  // Adjust textarea height dynamically
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    }
  }, [code]);

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

  // Responsive styles
  const styles = {
    container: { padding: "20px", maxWidth: "800px", margin: "auto" },
    textarea: {
      width: "100%",
      marginBottom: "10px",
      minHeight: "150px",
      resize: "none",
      padding: "10px",
      fontSize: "1rem",
    },
    buttonContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      justifyContent: "center",
    },
    button: {
      flex: "1 1 150px",
      padding: "10px",
      fontSize: "1rem",
      cursor: "pointer",
    },
    result: { marginTop: "20px", whiteSpace: "pre-wrap" },
  };

  return (
    <div style={styles.container}>
      <h1>🧑‍💻 Code Buddy</h1>
      <textarea
        ref={textareaRef}
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Paste your code here..."
        style={styles.textarea}
      />
      <div style={styles.buttonContainer}>
        <button onClick={handleExplain} style={styles.button}>
          Explain Code
        </button>
        <button onClick={handleOptimize} style={styles.button}>
          Suggest Optimizations
        </button>
        <button onClick={handleQuiz} style={styles.button}>
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
