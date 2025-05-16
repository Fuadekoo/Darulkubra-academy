import React from "react";

function layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ chat_id: string; courseId: string; chapterId: string }>;
}) {
  return <div>{children}</div>;
}

export default layout;
