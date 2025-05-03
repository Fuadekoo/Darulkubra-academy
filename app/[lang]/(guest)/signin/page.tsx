import React from "react";
import { redirect } from "next/navigation";
import { auth } from "../../../../lib/auth";
import LoginForm from "./form";

export default async function Page() {
  const session = await auth();

  if (session?.user?.role) redirect(`/en/${session.user.role}`);
  return <LoginForm />;
}
