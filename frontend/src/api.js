import axios from "axios";

const API = axios.create({
  baseURL: "https://your-backend-domain.com/api", // Replace with your deployed backend URL
});

export const explainCode = (code) => API.post("/explain", { code });
export const suggestOptimizations = (code) => API.post("/optimize", { code });
export const generateQuiz = (code) => API.post("/quiz", { code });
