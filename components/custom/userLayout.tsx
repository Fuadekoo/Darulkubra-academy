"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { LightDarkToggle } from "../ui/light-dark-toggle";

export default function UserLayout({
  menu,
  children,
}: {
  menu: {
    label: string;
    url: string;
    icon: React.ReactNode;
  }[];
  children: React.ReactNode;
}) {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="grid lg:grid-cols-[auto_1fr] overflow-hidden ">
      <Sidebar {...{ sidebar, setSidebar, menu }} />
      <div className="flex gap-2 flex-col overflow-hidden ">
        <Header setSidebar={setSidebar} />
        <div className="min-h-[calc(100dvh-3.6rem)] p-2 rounded-xl overflow-hidden grid">
          {children}
        </div>
      </div>
    </div>
  );
}

function Sidebar({
  sidebar,
  setSidebar,
  menu,
}: {
  sidebar: boolean;
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  menu: {
    label: string;
    url: string;
    icon: React.ReactNode;
  }[];
}) {
  return (
    <div
      className={`${
        sidebar ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 transition-transform duration-300 lg:block bg-complementary-400 shadow-lg rounded-xl p-4`}
    >
      <div className="flex flex-col gap-4">
        <h1>hello fuad</h1>
        {menu.map((item) => (
          <Link
            key={item.label}
            href={item.url}
            className="flex items-center gap-2"
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

function Header({
  setSidebar,
}: {
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="flex justify-between items-center p-3 bg-accent-300 shadow-lg rounded-xl">
      <button onClick={() => setSidebar((prev) => !prev)}>
        Toggle Sidebar
      </button>
      <h1 className="text-xl font-bold">Header</h1>
      <LightDarkToggle />
    </div>
  );
}
