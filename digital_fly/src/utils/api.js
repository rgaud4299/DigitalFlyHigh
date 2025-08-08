import axios from "axios";

const api = axios.create({
  baseURL: "https://your-backend-api.com/api", // Change to your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Example POST request
export const postData = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Something went wrong" };
  }
};





// src/hooks/useApi.js
import { useState } from "react";

export const useApi = (baseURL = "") => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = async (url, method = "GET", data = {}, config = {}) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios({
        url: `${baseURL}${url}`,
        method,
        data,
        ...config,
      });
      return res.data;
    } catch (err) {
      setError(err.response?.data?.message || err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { request, loading, error };
};
