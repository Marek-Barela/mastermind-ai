import React from "react";
import Navbar from "@/components/features/Navbar";
import Sidebar from "@/components/features/Sidebar";
import { getApiLimitCount } from "@/lib/api-limit";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = async ({ children }: DashboardLayoutProps) => {
  const apiLimitCount = await getApiLimitCount();

  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-zinc-900">
        <Sidebar apiLimitCount={apiLimitCount} />
      </div>
      <Navbar />
      <main className="md:pl-72">{children}</main>
    </div>
  );
};

export default DashboardLayout;
