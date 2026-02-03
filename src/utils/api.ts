import axios, { AxiosError } from "axios";
import { handleToaster } from "../functions/handleToaster";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const handleCatchError = (error: AxiosError<{ message?: string }>) => {
  console.error("API Error:", error);
  const message =
    error.response?.data?.message ||
    error.message ||
    "An unexpected error occurred";
  handleToaster(message, "error");
  return Promise.reject(error);
};

// Request interceptor to add authorization header
api.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      // Priority 1: Token from URL (for verification flow)
      const pathParts = window.location.pathname.split("/");
      const verifyIndex = pathParts.findIndex(
        (part) => part === "verify-account",
      );

      let token = null;

      if (verifyIndex !== -1 && pathParts[verifyIndex + 1]) {
        token = pathParts[verifyIndex + 1];
      } else {
        // Priority 2: Token from localStorage
        token = localStorage.getItem("tiny_tales_token");
      }

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor for central error handling
api.interceptors.response.use(
  (response) => response,
  (error) => handleCatchError(error),
);

export default api;
