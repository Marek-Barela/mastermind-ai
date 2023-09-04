import React from "react";
import LandingNavbar from "@/components/features/LandingNavbar";
import LandingHero from "@/components/features/LandingHero";
import LandingContent from "@/components/features/LandingContent";

const LandingPage = () => {
  return (
    <div className="h-full">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
  );
};

export default LandingPage;
