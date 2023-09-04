import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main className="flex  bg-[#111827] items-center justify-center h-full">
      {children}
    </main>
  );
};

export default AuthLayout;
