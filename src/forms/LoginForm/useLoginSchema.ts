import * as Yup from "yup";

const useLoginSchema = () => {
  const initialValues: LoginFormValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[0-9]/, "Password must contain at least one digit")
      .matches(
        /[@$!%*?&#]/,
        "Password must contain at least one special character",
      )
      .required("Password is required"),
  });

  return { initialValues, validationSchema };
};

export default useLoginSchema;
