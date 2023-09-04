"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { Zap } from "lucide-react";
import { useState } from "react";

interface SubscriptionButtonProps {
  isPro: boolean;
}

const SubscriptionButton = ({ isPro = false }: SubscriptionButtonProps) => {
  const [loading, isLoading] = useState(false);

  const handleClick = async () => {
    try {
      isLoading(true);
      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (err) {
      console.error("Billing error", err);
    } finally {
      isLoading(false);
    }
  };

  return (
    <Button
      disabled={loading}
      variant={isPro ? "default" : "premium"}
      onClick={handleClick}>
      {isPro ? "Manage Subscription" : "Upgrade"}
      {!isPro && <Zap className="w-4 h-4 ml-2 fill-white" />}
    </Button>
  );
};

export default SubscriptionButton;
