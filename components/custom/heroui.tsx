"use client";
import { HeroUIProvider } from "@heroui/react";

export function UiProvider({ children }: { children: React.ReactNode }) {
  return <HeroUIProvider>{children}</HeroUIProvider>;
}
