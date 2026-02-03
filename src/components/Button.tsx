import { type ReactNode } from "react";

const Button = ({
  children,
  variant = "primary",
  className,
  type = "button",
  onClick,
}: {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${variant === "primary" ? "bg-primary text-white  hover:bg-primary/75" : "bg-secondary text-primary hover:bg-primary/50"} px-8 py-3 rounded-xl text-sm font-bold transition-colors cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
