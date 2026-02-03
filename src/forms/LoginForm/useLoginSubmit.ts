"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "../../utils/api";
import { handleToaster } from "../../functions/handleToaster";

const useLoginSubmit = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (values: LoginFormValues) => {
    setLoading(true);
    try {
      const response = await api.post("/auth/login", values);
      if (response.data.data.token) {
        localStorage.setItem("tiny_tales_token", response.data.data.token);
      }
      if (response.data.data) {
        localStorage.setItem(
          "tiny_tales_user",
          JSON.stringify(response.data.data),
        );
      }
      handleToaster(
        response.data.data.message || "Login successful",
        "success",
      );
      router.push("/");
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return { handleSubmit, loading };
};

export default useLoginSubmit;
