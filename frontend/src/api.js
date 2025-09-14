import axios from "axios";

// Use environment variable if available, otherwise fallback to localhost
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export const explainCode = async (code) => {
  try {
    const res = await axios.post(`${API_URL}/explain`, { code });
    return res.data;
  } catch (err) {
    console.error("Error in explainCode API:", err);
    throw err;
  }
};

export const suggestOptimizations = async (code) => {
  try {
    const res = await axios.post(`${API_URL}/suggest`, { code });
    return res.data;
  } catch (err) {
    console.error("Error in suggestOptimizations API:", err);
    throw err;
  }
};

export const generateQuiz = async (code) => {
  try {
    const res = await axios.post(`${API_URL}/quiz`, { code });
    return res.data;
  } catch (err) {
    console.error("Error in generateQuiz API:", err);
    throw err;
  }
};
