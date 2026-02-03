"use client";
import { useEffect, ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";
import useAuth from "../hooks/useAuth";

interface AuthGuardProps {
  children: ReactNode;
  requireAuth?: boolean;
  requireGuest?: boolean;
}

const AuthGuard = ({
  children,
  requireAuth = false,
  requireGuest = false,
}: AuthGuardProps) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (isAuthenticated === null) return;

    if (requireAuth && !isAuthenticated) {
      router.replace("/login");
    }

    if (requireGuest && isAuthenticated) {
      router.replace("/");
    }
  }, [isAuthenticated, requireAuth, requireGuest, router]);

  if (isAuthenticated === null) return null;
  if (requireAuth && !isAuthenticated) return null;
  if (requireGuest && isAuthenticated) return null;

  return <>{children}</>;
};

export default AuthGuard;
