import React from "react";
import UserLayout from "@/components/ui/userLayout";
import { Home } from "lucide-react";
import { redirect } from "next/navigation";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <UserLayout
        menu={[
          {
            label: "home",
            url: "",
            icon: <Home className="size-4" />,
          },
          {
            label: "school",
            url: "school",
            icon: <Home className="size-4" />,
          },
        ]}
      >
        {children}
      </UserLayout>
    </div>
  );
}
