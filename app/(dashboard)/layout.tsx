import React from "react";
import Navbar from "@/components/features/Navbar";
import Sidebar from "@/components/features/Sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = async ({ children }: DashboardLayoutProps) => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();

  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 bg-zinc-900">
        <Sidebar apiLimitCount={apiLimitCount} isPro={isPro} />
      </div>
      <Navbar />
      <main className="md:pl-72">{children}</main>
    </div>
  );
};

export default DashboardLayout;
