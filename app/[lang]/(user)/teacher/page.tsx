import { redirect } from "next/navigation";
import React from "react";

export default function Page() {
  redirect("/en/teacher/course");

  return <div className="grid place-content-center">teacher dashboard</div>;
}
