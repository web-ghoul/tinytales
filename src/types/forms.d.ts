type FormType = "login" | "register" | "verify-account";

interface LoginFormValues {
  email: string;
  password: string;
}

interface RegisterFormValues {
  name: string;
  email: string;
  mobile_country_code: string;
  mobile: string;
  password: string;
}

interface VerifyAccountFormValues {
  code: string[];
}
