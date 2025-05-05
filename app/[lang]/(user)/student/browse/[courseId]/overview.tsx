"use client";
import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import useAction from "@/hooks/useAction";
import { courseDetail } from "@/actions/student/course";
import Exam from "./exam";

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

const tabs = ["Overview", "Exam", "Reviews"];

interface OverviewProps {
  currentLessonId: string;
  onLessonComplete: () => void;
}

export default function Overview({
  currentLessonId,
  onLessonComplete,
}: OverviewProps) {
  const { courseId } = useParams<{ courseId: string }>();
  const [courses, refresh, isLoading] = useAction(
    courseDetail,
    [true, () => {}],
    courseId
  );
  const [activeTab, setActiveTab] = useState("Overview");
  const [currentLesson, setCurrentLesson] = useState<
    | {
        id: string;
        question: {
          id: string;
          question: string;
          questionOptions: { id: string; option: string }[];
          questionAnswer: { answerId: string }[];
        }[];
        title: string;
        videoUrl: string;
        order: number;
      }
    | null
    | undefined
  >(null);

  useEffect(() => {
    if (courses?.lessons) {
      const lesson = courses.lessons.find(
        (lesson) => lesson.id === currentLessonId
      );
      setCurrentLesson(lesson);
    }
  }, [currentLessonId, courses]);

  const handleExamComplete = () => {
    onLessonComplete();
    setActiveTab("Overview"); // Switch back to overview after exam
  };

  if (isLoading) {
    return <div className="p-6">Loading course details...</div>;
  }

  if (!courses) {
    return <div className="p-6">Course not found</div>;
  }

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

      {/* Exam Section */}
      {activeTab === "Exam" && currentLesson && (
        <div className="p-6 max-w-2xl mx-auto">
          <Exam
            lessonId={currentLesson.id}
            questions={currentLesson.question.map((q) => ({
              id: q.id,
              question: q.question,
              options: q.questionOptions.map((opt) => ({
                id: opt.id,
                option: opt.option,
              })),
              answer: q.questionAnswer[0]?.answerId ?? "",
            }))}
            onComplete={handleExamComplete}
          />
        </div>
      )}
    </div>
  );
}
