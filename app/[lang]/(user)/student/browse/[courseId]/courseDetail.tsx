"use client";
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Exam from "./exam";
import { ArrowLeft, List } from "lucide-react";

const course = {
  title: "Figma from A to Z",
  author: { name: "Crystal Lucas", role: "UI/UX Specialist", rating: 4.8 },
  rating: 4.5,
  reviews: 126,
  totalLessons: 38,
  duration: "4h 30min",
  videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
  sections: [
    { title: "Intro", duration: "22 min" },
    { title: "Intermediate Level Stuff", duration: "1h 20min" },
    { title: "Advanced Stuff", duration: "36 min" },
    { title: "Imports & Graphics", duration: "40 min" },
    { title: "Components in Figma", duration: "1h 12min" },
    { title: "Styles in Figma", duration: "41 min" },
    { title: "Summary", duration: "8 min" },
  ],
};

export default function CourseDetail() {
  const [showExam, setShowExam] = useState(false);
  const [showSections, setShowSections] = useState(false);

  if (showExam) {
    return (
      <div className="p-6 max-w-2xl mx-auto">
        <button
          className="flex items-center gap-2 mb-4 text-blue-600 hover:underline"
          onClick={() => setShowExam(false)}
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Course
        </button>
        <Exam />
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto relative">
      {/* Course Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{course.title}</h1>
        <div className="flex gap-3">
          <button className="border px-4 py-2 rounded-lg">Share</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Enroll Now
          </button>
        </div>
      </div>

      {/* Course Overview */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Course Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Unlock the power of Figma with this comprehensive online course.
          </p>
          <p className="mt-2">
            💡 <strong>Instructor:</strong> {course.author.name} (
            {course.author.role})
          </p>
          <p>
            ⭐ {course.rating} ({course.reviews} reviews)
          </p>
          <p>
            📚 {course.totalLessons} lessons | ⏳ {course.duration}
          </p>
        </CardContent>
      </Card>

      <div className="relative flex gap-6">
        {/* Main Video Area */}
        <div className="flex-1 mb-6 flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <button
              className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1 rounded"
              onClick={() => setShowSections((prev) => !prev)}
            >
              <List className="w-5 h-5" />
              {showSections ? "Hide Sections" : "Show Sections"}
            </button>
          </div>
          <iframe
            className="w-full h-96 rounded-lg"
            src={course.videoUrl}
            title={course.title}
            allowFullScreen
          />
          <button
            className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
            onClick={() => setShowExam(true)}
          >
            Complete
          </button>
        </div>

        {/* Sections Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg border-l border-gray-200 z-50 transform transition-transform duration-300 ${
            showSections ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-bold">Course Sections</h2>
            <button
              className="text-gray-500 hover:text-gray-800"
              onClick={() => setShowSections(false)}
            >
              ✕
            </button>
          </div>
          <div className="p-4">
            <ul className="space-y-3">
              {course.sections.map((section, index) => (
                <li key={index} className="border-b pb-2">
                  <strong>{section.title}</strong> - {section.duration}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
