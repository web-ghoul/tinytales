import api from "../../utils/api";

const useLoginSubmit = () => {
  const handleSubmit = async (values: LoginFormValues) => {
    try {
      const response = await api.post("/login", values);
      console.log("Login success:", response.data);
      // Handle success (e.g., redirect, save token)
    } catch (error) {
      console.error("Login failed:", error);
      // Handle error (e.g., show notification)
    }
  };

  return { handleSubmit };
};

export default useLoginSubmit;
