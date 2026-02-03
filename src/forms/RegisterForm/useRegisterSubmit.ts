import api from "../../utils/api";

const useRegisterSubmit = () => {
  const handleSubmit = async (values: RegisterFormValues) => {
    try {
      const response = await api.post("/register", values);
      console.log("Registration success:", response.data);
      // Handle success
    } catch (error) {
      console.error("Registration failed:", error);
      // Handle error
    }
  };

  return { handleSubmit };
};

export default useRegisterSubmit;
