import api from "../../utils/api";

const useVerifySubmit = () => {
  const handleSubmit = async (values: VerifyAccountFormValues) => {
    try {
      const code = values.code.join("");
      const response = await api.post("/verify-account", { code });
      console.log("Verification success:", response.data);
      // Handle success
    } catch (error) {
      console.error("Verification failed:", error);
      // Handle error
    }
  };

  return { handleSubmit };
};

export default useVerifySubmit;
