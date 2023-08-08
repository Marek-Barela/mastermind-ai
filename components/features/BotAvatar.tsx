import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const BotAvatar = () => {
  return (
    <Avatar className="w-8 h-8">
      <AvatarImage className="p-1" src="/next-dark.svg" />
    </Avatar>
  );
};

export default BotAvatar;
