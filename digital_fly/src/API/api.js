import axios from "axios";

// Axios instance
const api = axios.create({
  baseURL: "https://your-backend-api.com/api", // 🔹 Apni backend URL yahan change karo
  headers: {
    "Content-Type": "application/json",
  },
});

// // Request Interceptor (optional)
// api.interceptors.request.use(
//   (config) => {
//     // Agar token store hai to headers me add karo
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // Response Interceptor (optional)
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     console.error("API Error:", error.response?.data || error.message);
//     return Promise.reject(error.response?.data || { message: "Something went wrong" });
//   }
// );

// API Methods
export const getData = (endpoint, params) => api.get(endpoint, { params }).then((res) => res.data);

export const postData = (endpoint, data) => api.post(endpoint, data).then((res) => res.data);
export const postContactForm = (endpoint, data) => api.post(endpoint, data).then((res) => res.data);

export const putData = (endpoint, data) => api.put(endpoint, data).then((res) => res.data);

export const deleteData = (endpoint) => api.delete(endpoint).then((res) => res.data);

export default api;
