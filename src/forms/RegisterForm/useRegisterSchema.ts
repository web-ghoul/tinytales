import * as Yup from "yup";

const useRegisterSchema = () => {
  const initialValues: RegisterFormValues = {
    name: "",
    email: "",
    mobile_country_code: "",
    mobile: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    mobile_country_code: Yup.string().required("Code is required"),
    mobile: Yup.string().required("Phone Number is required"),
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

export default useRegisterSchema;
