import * as Yup from "yup";

const useVerifySchema = () => {
  const initialValues: VerifyAccountFormValues = {
    code: ["", "", "", "", "", ""],
  };

  const validationSchema = Yup.object().shape({
    code: Yup.array()
      .of(Yup.string().length(1, "Required").required("Required"))
      .length(6, "Must be 6 digits"),
  });

  return { initialValues, validationSchema };
};

export default useVerifySchema;
