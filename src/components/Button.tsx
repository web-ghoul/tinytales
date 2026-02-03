import { Loader2 } from "lucide-react";
import { type ReactNode } from "react";

const Button = ({
  children,
  variant = "primary",
  className,
  type = "button",
  onClick,
  loading = false,
}: {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  loading?: boolean;
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading}
      className={`relative flex items-center justify-center gap-2 ${
        variant === "primary"
          ? "bg-primary text-white hover:bg-primary/75"
          : "bg-secondary text-primary hover:bg-primary/50"
      } px-8 py-3 rounded-xl text-sm font-bold transition-all duration-200 ${
        loading ? "cursor-not-allowed opacity-80" : "cursor-pointer"
      } ${className}`}
    >
      {loading && <Loader2 className="animate-spin h-5 w-5" />}
      <span
        className={`${loading ? "opacity-90" : ""} flex items-center justify-center gap-2 `}
      >
        {children}
      </span>
    </button>
  );
};

export default Button;
