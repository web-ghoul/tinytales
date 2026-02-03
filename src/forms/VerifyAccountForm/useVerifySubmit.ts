"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "../../utils/api";
import { AxiosError } from "axios";
import { handleToaster } from "../../functions/handleToaster";

const useVerifySubmit = () => {
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (values: VerifyAccountFormValues) => {
    setLoading(true);
    try {
      const code = values.code.join("");
      const response = await api.post("/auth/verify-email", { code });
      handleToaster(
        response.data.data.message || "Account verified successfully",
        "success",
      );
      router.push("/login");
    } catch (error) {
      console.error("Verification failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleResendCode = async (email?: string) => {
    setResendLoading(true);
    try {
      const response = await api.post("/auth/verify-email/resend-code", {
        email,
      });
      handleToaster(
        response.data.message || "Code resent successfully",
        "success",
      );
    } catch (error) {
      console.error("Resend failed:", error);
      const axiosError = error as AxiosError<{ message?: string }>;
      handleToaster(
        axiosError.response?.data?.message || "Failed to resend code",
        "error",
      );
    } finally {
      setResendLoading(false);
    }
  };

  return { handleSubmit, loading, handleResendCode, resendLoading };
};

export default useVerifySubmit;
