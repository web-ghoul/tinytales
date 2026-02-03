import DashboardSection from "@/src/sections/DashboardSection";
import AuthGuard from "@/src/components/AuthGuard";

export default function Home() {
  return (
    <AuthGuard requireAuth>
      <DashboardSection />
    </AuthGuard>
  );
}
