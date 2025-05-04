import React from "react";
import { LightDarkToggle } from "@/components/ui/light-dark-toggle";
type Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <div>
      <div className="flex flex-col gap-4 min-h-screen items-center p-24">
        {children}
      </div>
      <LightDarkToggle className="fixed top-[calc(50%-12px)] right-2 -mt-3" />
    </div>
  );
}
