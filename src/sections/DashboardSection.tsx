"use client";
import useAuth from "../hooks/useAuth";
import Button from "../components/Button";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/images/logo.png";

const DashboardSection = () => {
  const { user, loading, logout } = useAuth();

  return (
    <section className="contain py-20 min-h-screen flex flex-col items-center justify-center text-center justify-center">
      <div className="bg-white p-12 rounded-2xl border border-gray-100 shadow-md max-w-2xl w-full grid gap-8">
        <div className="grid gap-3">
          <Image src={logo} alt={"logo"} className="m-auto" />
          <h1 className="text-4xl font-bold text-black">
            Welcome,{" "}
            <span className="text-primary">{user?.name || "User"}</span>
          </h1>
          <p className="text-gray-500 font-medium">
            {user?.email} • {user?.mobile}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/ui">
            <Button>View UI Page</Button>
          </Link>
          <Button variant="secondary" loading={loading} onClick={logout}>
            Logout
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
