import axios from "axios";

const api = axios.create({
  baseURL: "https://github-profile-analyzer-db4b.onrender.com",
});

export default api;