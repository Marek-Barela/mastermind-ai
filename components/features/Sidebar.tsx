"use client";

import Link from "next/link";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import FreeCounter from "@/components/features/FreeCounter";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    href: "/conversation",
    icon: MessageSquare,
    color: "text-violet-500",
  },
  {
    label: "Image Generation",
    href: "/image",
    icon: ImageIcon,
    color: "text-pink-700",
  },
  {
    label: "Video Generation",
    href: "/video",
    icon: VideoIcon,
    color: "text-orange-700",
  },
  {
    label: "Music Generation",
    href: "/music",
    icon: Music,
    color: "text-emerald-500",
  },
  {
    label: "Code Generation",
    href: "/code",
    icon: Code,
    color: "text-green-700",
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

interface SidebarProps {
  apiLimitCount?: number;
  isPro?: boolean;
}

const Sidebar = ({ apiLimitCount = 0, isPro = false }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-zinc-900 text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <h1 className={cn("text-xl font-bold", montserrat.className)}>Mastermind</h1>
        </Link>
        <div className="space-y-1">
          {routes.map(route => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href ? "text-white bg-white/10" : "text-zinc-400"
              )}>
              <div className="flex items-center flex-1">
                <route.icon className={cn("w-5 h-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <FreeCounter apiLimitCount={apiLimitCount} isPro={isPro} />
    </div>
  );
};

export default Sidebar;
