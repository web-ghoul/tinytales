import AuthenticationSection from "@/src/sections/AuthenticationSection";
import AuthGuard from "@/src/components/AuthGuard";

export default function Home() {
  return (
    <AuthGuard requireGuest>
      <AuthenticationSection type={"verify-account"} />
    </AuthGuard>
  );
}
