import AuthenticationSection from "@/src/sections/AuthenticationSection";
import AuthGuard from "@/src/components/AuthGuard";

export default function Login() {
  return (
    <AuthGuard requireGuest>
      <AuthenticationSection type="login" />
    </AuthGuard>
  );
}
