import React from "react";
import { redirect } from "next/navigation";

function page() {
  redirect("/en/admin/dashboard");
  return <div>this is a admin page</div>;
}

export default page;
