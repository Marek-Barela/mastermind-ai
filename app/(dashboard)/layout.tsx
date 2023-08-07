import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-zinc-900">
        sidebar component
      </div>
      <main className="md:pl-72">{children}</main>
    </div>
  );
};

export default DashboardLayout;
