"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "../../utils/api";
import { handleToaster } from "../../functions/handleToaster";

const useRegisterSubmit = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (values: RegisterFormValues) => {
    setLoading(true);
    try {
      const response = await api.post("/auth/register", values);
      handleToaster(
        response.data.data.message || "Registration successful",
        "success",
      );
      const token = response.data.data.token;
      if (token) {
        router.push(`/verify-account/${token}`);
      }
    } catch (error) {
      console.error("Registration failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return { handleSubmit, loading };
};

export default useRegisterSubmit;
