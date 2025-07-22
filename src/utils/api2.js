import axios from "axios";

const api2 = axios.create({
  baseURL: "https://www.nseindia.com/api",
  //   baseURL: "http://localhost:5000/api/file_upload",
  headers: {
    "Content-Type": "application/json",
  },
});

api2.interceptors.response.use(
  (res) => res,
  (err) => {
    return Promise.reject(err);
  }
);
export default api2;
