import React from "react";
import { redirect } from "next/navigation";

function Page() {
  redirect("/en/student/browse");
  return <div>this is a student page</div>;
}

export default Page;
