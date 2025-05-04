import React from "react";
type Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <div>
      <div className="flex flex-col gap-4 min-h-screen items-center p-24">
        {children}
      </div>
    </div>
  );
}
