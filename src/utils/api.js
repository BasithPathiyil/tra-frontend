import axios from "axios";

const api = axios.create({
  // baseURL: "https://tra-c8a9.onrender.com/api/file_upload",
  baseURL: "http://localhost:5000/api/file_upload",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    return Promise.reject(err);
  }
);
export default api;
