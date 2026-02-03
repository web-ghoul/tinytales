"use client";
import Button from "../../components/Button";
import InputBox from "../../components/InputBox";
import { useFormik } from "formik";
import useLoginSchema from "./useLoginSchema";
import useLoginSubmit from "./useLoginSubmit";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/images/logo.png";

const LoginForm = () => {
  const { initialValues, validationSchema } = useLoginSchema();
  const { handleSubmit, loading } = useLoginSubmit();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="w-full flex flex-col items-center justify-center px-6 md:px-24">
      <form
        onSubmit={formik.handleSubmit}
        className="w-full max-w-[400px] flex flex-col gap-8"
      >
        {/* Logo & Header */}
        <div className="flex flex-col items-center lg:items-start gap-4">
          <Image src={logo} alt="Trend Line Marketing" />
          <div className="flex flex-col gap-1 text-center lg:text-start">
            <h1 className="text-2xl font-bold text-gray-800 flex items-center justify-center lg:justify-start gap-2">
              Tiny Tales 👋
            </h1>
            <p className="text-sm text-gray-500">
              Welcome to the Tiny Tales application control panel
            </p>
          </div>
        </div>

        {/* Form Fields */}
        <div className="flex flex-col gap-5">
          <InputBox
            id="email"
            name="email"
            label="Email"
            placeholder="Enter your email"
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

          <Button type="submit" loading={loading}>
            Sign in
          </Button>

          <div className="text-center text-sm text-gray-600">
            New on our platform?{" "}
            <Link
              href="/register"
              className="text-primary font-semibold hover:underline"
            >
              Create an account
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500">
          Made with <span className="text-red-500">❤️</span> by webGhoul
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
