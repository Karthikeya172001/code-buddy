import axios from "axios";

// Make sure this URL points to your deployed backend
const API = axios.create({
  baseURL: "https://code-buddy-4mtq.onrender.com/api",
});

// Explain code
export const explainCode = (code) => API.post("/explain", { code });

// Suggest optimizations
export const suggestOptimizations = (code) => API.post("/optimize", { code });

// Generate quiz
export const generateQuiz = (code) => API.post("/quiz", { code });
