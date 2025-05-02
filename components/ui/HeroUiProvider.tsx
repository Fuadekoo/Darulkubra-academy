"use client";
import { HeroUIProvider } from "@heroui/react";
import { useRouter } from "next/navigation";
import { ToastProvider } from "@heroui/toast";

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

export function UIProviders({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <HeroUIProvider locale="en-US" navigate={router.push}>
      <ToastProvider />
      {children}
    </HeroUIProvider>
  );
}
