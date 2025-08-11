import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});
export const postContactForm = (endpoint, data) => api.post(endpoint, data).then((res) => res.data);


export default api;
