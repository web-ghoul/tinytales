import React from "react";
import Forms from "../forms/Forms";

const AuthenticationSection = ({ type }: { type: FormType }) => {
  const illustration =
    "https://tinytales.trendline.marketing/assets/img/illustrations/auth-login-illustration-light.png";

  return (
    <div className={`grid grid-cols-[60%_1fr] min-h-screen p-8`}>
      {/* Left Side: Illustration */}
      <div
        className={`w-full items-center flex justify-center p-12 bg-[#F8F7FA] rounded-2xl`}
      >
        <img
          src={illustration}
          alt="Auth Illustration"
          className="max-w-xl w-full h-auto object-contain"
          draggable={false}
        />
      </div>

      <Forms type={type} />
    </div>
  );
};

export default AuthenticationSection;
