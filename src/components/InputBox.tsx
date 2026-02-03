"use client";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

interface InputBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

const InputBox = ({
  label,
  error,
  icon,
  type = "text",
  className,
  ...props
}: InputBoxProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div className="flex flex-col gap-1.5 w-full font-poppins text-start">
      {label && (
        <div className="flex justify-between items-center px-1">
          <label className="text-sm font-medium text-gray-600 font-poppins">
            {label}
          </label>
        </div>
      )}
      <div className="relative group">
        <input
          {...props}
          type={inputType}
          className={`
            w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg outline-none
            transition-all duration-200 text-sm placeholder:text-gray-400
            focus:border-primary focus:ring-1 focus:ring-primary/20 font-poppins
            ${
              error
                ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                : ""
            }
            ${className || ""}
          `}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
        {!isPassword && icon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            {icon}
          </div>
        )}
      </div>
      {error && (
        <span className="text-[10px] text-red-500 font-medium px-1 leading-none font-poppins">
          {error}
        </span>
      )}
    </div>
  );
};

export default InputBox;
