import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "https://code-buddy-4mtq.onrender.com",
});

export default API;