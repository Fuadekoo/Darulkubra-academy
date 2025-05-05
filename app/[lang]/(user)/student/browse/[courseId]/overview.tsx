"use client";
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const course = {
  title: "Figma from A to Z",
  description:
    "Unlock the power of Figma with this comprehensive course! Perfect for UI/UX designers, product managers, and anyone interested in modern design tools.",
  learnings: [
    "Setting up the environment",
    "Advanced HTML Practices",
    "Build a portfolio website",
    "Responsive Designs",
    "Understand HTML Programming",
    "Code HTML",
    "Start building beautiful websites",
  ],
};

const tabs = ["Overview", "Author", "FAQ", "Announcements", "Reviews"];

export default function Overview() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Tabs */}
      <div className="flex gap-6 border-b pb-3 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`pb-2 ${
              activeTab === tab
                ? "border-b-2 border-blue-500 font-bold"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Overview Section */}
      {activeTab === "Overview" && (
        <>
          {/* About Course */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>About Course</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{course.description}</p>
            </CardContent>
          </Card>

          {/* What You'll Learn */}
          <Card>
            <CardHeader>
              <CardTitle>What You'll Learn</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                {course.learnings.map((learning, index) => (
                  <li key={index}>{learning}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}
