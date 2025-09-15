import axios from "axios";

const API = axios.create({
  baseURL: "https://code-buddy-4mtq.onrender.com/api", // your backend URL
});

export const explainCode = (code) => API.post("/explain", { code });
export const suggestOptimizations = (code) => API.post("/optimize", { code });
export const generateQuiz = (code) => API.post("/quiz", { code });
