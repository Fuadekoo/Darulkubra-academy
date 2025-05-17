import React from "react";
import UserLayout from "@/components/custom/userLayout";
import { Home, PersonStandingIcon } from "lucide-react";
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
      {/* <UserLayout
        menu={[
          {
            label: "dashboard",
            url: "dashboard",
            icon: <Home className="size-4" />,
          },
          {
            label: "student",
            url: "student",
            icon: <PersonStandingIcon className="size-4" />,
          },
          {
            label: "teacher",
            url: "teacher",
            icon: <PersonStandingIcon className="size-4" />,
          },
        ]}
      > */}
        {children}
      {/* </UserLayout> */}
    </div>
  );
}
