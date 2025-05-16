"use client";
import React, { useState, useEffect } from "react";
import MainMenu from "@/components/custom/main-menu";
import MenuTitle from "@/components/custom/menu-title";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { MenuIcon } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";
// import * as React from "react";
import { Progress } from "@/components/ui/progress";
async function fetchProgressData() {
  return {
    completed: 5,
    total: 8,
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const isDesktop = useMediaQuery("(max-width: 768px)");

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [total, setTotal] = useState(1); // set to 1 to avoid division by zero

  useEffect(() => {
    async function loadProgress() {
      const data = await fetchProgressData(); // call backend here
      const percent = (data.completed / data.total) * 100;
      setCompleted(data.completed);
      setTotal(data.total);
      setProgress(percent);
    }
    loadProgress();
  }, []);
  return (
    <div className="md:grid md:grid-cols-[250px_1fr] h-screen">
      <MainMenu className="hidden md:flex" />
      {isDesktop && (
        <div className="p-4 flex justify-between md:hidden sticky top-0 left-0 bg-background border-b border-border">
          <MenuTitle />
          <Drawer
            direction="right"
            open={mobileMenuOpen}
            onOpenChange={(open) => setMobileMenuOpen(open)}
            onClose={() => setMobileMenuOpen(false)}
          >
            <DrawerTrigger>
              <MenuIcon />
            </DrawerTrigger>
            <DrawerContent>
              <MainMenu className="w-64" />
            </DrawerContent>
          </Drawer>
        </div>
      )}
      <div className="overflow-y-auto py-2  overflow-x-hidden">
        {/* Desktop: Progress bar fixed at top, Mobile: Progress bar below menu */}
        {!isDesktop && (
          <div className="fixed top-0 w-dvw shadow-md p-4 z-40 bg-background ">
            <Progress value={progress} className="w-[60%] mx-auto mb-2" />
            <div className="text-green-500 text-sm text-center mt-1">
              {completed} / {total}
            </div>
            {/* <div>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/components">
                      Components
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div> */}
          </div>
        )}
        <div className={`px-4 ${isDesktop ? "pt-0" : "pt-10"}`}>{children}</div>
      </div>
    </div>
  );
}
