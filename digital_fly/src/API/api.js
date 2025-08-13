import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE__APP_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
export const postContactForm = (endpoint, data) => api.post(endpoint, data).then((res) => res.data);


export default api;
