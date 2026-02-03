"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/images/logo.png";
import Button from "../../components/Button";
import InputBox from "../../components/InputBox";
import { useFormik } from "formik";
import useRegisterSchema from "./useRegisterSchema";
import useRegisterSubmit from "./useRegisterSubmit";

const RegisterForm = () => {
  const { initialValues, validationSchema } = useRegisterSchema();
  const { handleSubmit, loading } = useRegisterSubmit();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 md:px-24">
      <form
        onSubmit={formik.handleSubmit}
        className="w-full max-w-[450px] flex flex-col gap-8"
      >
        {/* Logo & Header */}
        <div className="flex flex-col items-center lg:items-start gap-3">
          <Image src={logo} alt="Trend Line Marketing" />
          <div className="flex flex-col gap-1 text-center lg:text-start">
            <h1 className="text-2xl font-bold text-gray-800 font-poppins text-start">
              Adventure starts here 🚀
            </h1>
            <p className="text-sm text-gray-500 font-poppins text-start">
              Make your app management easy and fun!
            </p>
          </div>
        </div>

        {/* Form Fields */}
        <div className="flex flex-col gap-5">
          <InputBox
            id="name"
            name="name"
            label="Full Name"
            placeholder="John Doe"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.name && formik.errors.name
                ? formik.errors.name
                : ""
            }
          />
          <InputBox
            id="email"
            name="email"
            label="Email"
            placeholder="john@example.com"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ""
            }
          />
          <div className="flex gap-4">
            <div className="w-1/3">
              <InputBox
                id="mobile_country_code"
                name="mobile_country_code"
                label="Country Code"
                placeholder="+20"
                value={formik.values.mobile_country_code}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.mobile_country_code &&
                  formik.errors.mobile_country_code
                    ? formik.errors.mobile_country_code
                    : ""
                }
              />
            </div>
            <div className="flex-1">
              <InputBox
                id="mobile"
                name="mobile"
                label="Phone Number"
                placeholder="123 456 789"
                type="tel"
                value={formik.values.mobile}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.mobile && formik.errors.mobile
                    ? formik.errors.mobile
                    : ""
                }
              />
            </div>
          </div>
          <InputBox
            id="password"
            name="password"
            label="Password"
            placeholder="............"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.password && formik.errors.password
                ? formik.errors.password
                : ""
            }
          />
          <InputBox
            id="password_confirmation"
            name="password_confirmation"
            label="Confirm Password"
            placeholder="............"
            type="password"
            value={formik.values.password_confirmation}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.password_confirmation &&
              formik.errors.password_confirmation
                ? formik.errors.password_confirmation
                : ""
            }
          />

          <Button type="submit" loading={loading}>
            Sign up
          </Button>

          <div className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-primary font-semibold hover:underline"
            >
              Sign in instead
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
