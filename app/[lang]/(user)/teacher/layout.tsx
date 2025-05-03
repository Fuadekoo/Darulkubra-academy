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
  const session = await auth();

  if (session?.user?.role !== "teacher") redirect(`/en/${session?.user?.role}`);
  return (
    <div>
      <UserLayout
        menu={[
          {
            label: "dashboard",
            url: "dashboard",
            icon: <Home className="size-4" />,
          },
          {
            label: "analytics",
            url: "analytics",
            icon: <Home className="size-4" />,
          },
        ]}
      >
        {children}
      </UserLayout>
    </div>
  );
}
