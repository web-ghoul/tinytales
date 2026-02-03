"use client";
import Image from "next/image";
import logo from "../../assets/images/logo.png";
import Button from "../../components/Button";
import { useFormik } from "formik";
import useVerifySchema from "./useVerifySchema";
import useVerifySubmit from "./useVerifySubmit";
import { useRef } from "react";

const VerifyAccountForm = () => {
  const { initialValues, validationSchema } = useVerifySchema();
  const { handleSubmit } = useVerifySubmit();
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value.slice(-1);
    }

    const newOtp = [...formik.values.code];
    newOtp[index] = value;
    formik.setFieldValue("code", newOtp);

    // Focus next input if value is filled
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace" && !formik.values.code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 md:px-24">
      <form
        onSubmit={formik.handleSubmit}
        className="w-full max-w-[450px] flex flex-col gap-8"
      >
        {/* Logo & Header */}
        <div className="flex flex-col items-center lg:items-start gap-4">
          <Image src={logo} alt="Trend Line Marketing" />
          <div className="flex flex-col gap-1 text-center lg:text-start">
            <h1 className="text-2xl font-bold text-gray-800 font-poppins text-start">
              Two-Step Verification ✉️
            </h1>
            <p className="text-sm text-gray-500 font-poppins text-start">
              We sent a verification code to your mobile. Enter the code from
              the mobile in the field below.
            </p>
            <span className="text-sm font-bold text-gray-700">******97</span>
          </div>
        </div>

        {/* Form Fields (OTP) */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2 font-poppins text-start">
            <label className="text-sm font-medium text-gray-600 font-poppins">
              Type your 6 digit security code
            </label>
            <div className="flex gap-2.5">
              {formik.values.code.map((digit, i) => (
                <div key={i} className="flex-1">
                  <input
                    ref={(el) => {
                      inputRefs.current[i] = el;
                    }}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(i, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(i, e)}
                    className={`w-full aspect-square text-center text-xl font-bold border rounded-lg outline-none transition-all duration-200 bg-white
                      ${
                        formik.touched.code &&
                        formik.errors.code &&
                        formik.errors.code[i]
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary/20"
                      }
                    `}
                  />
                </div>
              ))}
            </div>
            {formik.touched.code && typeof formik.errors.code === "string" && (
              <span className="text-xs text-red-500 mt-1">
                {formik.errors.code}
              </span>
            )}
          </div>

          <Button type="submit">Verify my account</Button>

          <div className="text-center text-sm text-gray-600 font-poppins">
            Didn't get the code?{" "}
            <a href="#" className="text-primary font-semibold hover:underline">
              Resend
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default VerifyAccountForm;
