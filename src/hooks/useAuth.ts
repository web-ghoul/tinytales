"use client";
import { useState, useEffect } from "react";
import api from "../utils/api";

interface UserTypes {
  id: number;
  email: string;
  name: string;
  mobile: string;
}

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [user, setUser] = useState<UserTypes | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("tiny_tales_token");
    const userData = localStorage.getItem("tiny_tales_user");
    setIsAuthenticated(!!token);
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (e) {
        console.error("Failed to parse user data", e);
      }
    }
  }, []);

  const logout = async () => {
    try {
      setLoading(true);
      await api.post("/auth/logout");
    } catch (e) {
      console.error("API logout failed", e);
    } finally {
      setLoading(false);
      localStorage.removeItem("tiny_tales_token");
      localStorage.removeItem("tiny_tales_user");
      setIsAuthenticated(false);
      setUser(null);
      window.location.href = "/login";
    }
  };

  return { isAuthenticated, user, loading, logout };
};

export default useAuth;
