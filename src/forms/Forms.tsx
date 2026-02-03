import LoginForm from "./LoginForm/LoginForm";
import RegisterForm from "./RegisterForm/RegisterForm";
import VerifyAccountForm from "./VerifyAccountForm/VerifyAccountForm";

const Forms = ({ type }: { type: FormType }) => {
  return (
    <div className="flex flex-1">
      {type === "login" ? (
        <LoginForm />
      ) : type == "register" ? (
        <RegisterForm />
      ) : type === "verify-account" ? (
        <VerifyAccountForm />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Forms;
