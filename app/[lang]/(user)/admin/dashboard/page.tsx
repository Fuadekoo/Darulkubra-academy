import React from "react";
import { redirect } from "next/navigation";

function page() {
  redirect("/en/admin/dashboard");
  return (
    <div>
      <h1>this is a admin page</h1>
    </div>
  );
}

export default page;
