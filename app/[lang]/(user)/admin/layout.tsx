import React from "react";
import UserLayout from "@/components/ui/userLayout";
import { Home } from "lucide-react";
import { redirect } from "next/navigation";
import { auth } from "../../../../lib/auth";
export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // This layout is for admin only

  const session = await auth();

  if (session?.user?.role !== "admin") redirect(`/en/${session?.user?.role}`);
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
