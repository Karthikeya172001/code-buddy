import axios from "axios";

// Change this if your backend is deployed
const API_BASE = "http://localhost:5000/api";

export const explainCode = (code) =>
  axios.post(`${API_BASE}/explain`, { code });

export const suggestOptimizations = (code) =>
  axios.post(`${API_BASE}/optimize`, { code });

export const generateQuiz = (code) =>
  axios.post(`${API_BASE}/quiz`, { code });
