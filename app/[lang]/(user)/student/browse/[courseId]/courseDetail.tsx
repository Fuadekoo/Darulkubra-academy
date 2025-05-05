"use client";
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Exam from "./exam";
import { ArrowLeft, List, CheckCircle } from "lucide-react";
import Overview from "./overview";

// Sample data matching your Prisma schema
const sampleCourse = {
  id: "course1",
  title: "Introduction to Web Development",
  description: "Learn the fundamentals of web development from scratch",
  teacher: {
    id: "teacher1",
    name: "Alex Johnson",
    phoneno: "+1234567890",
    passcode: "hashedpass",
    isActive: true,
  },
  lessons: [
    {
      id: "lesson1",
      title: "HTML Basics",
      videoUrl: "https://www.youtube.com/embed/pQN-pnXPaVg",
      order: 1,
      questions: [
        {
          id: "q1",
          question: "What does HTML stand for?",
          questionOptions: [
            { id: "opt1", option: "Hyper Text Markup Language" },
            { id: "opt2", option: "Home Tool Markup Language" },
            { id: "opt3", option: "Hyperlinks and Text Markup Language" },
          ],
          questionAnswer: [{ answerId: "opt1" }],
        },
      ],
    },
    {
      id: "lesson2",
      title: "CSS Fundamentals",
      videoUrl: "https://www.youtube.com/embed/1Rs2ND1ryYc",
      order: 2,
      questions: [
        {
          id: "q2",
          question: "What does CSS stand for?",
          questionOptions: [
            { id: "opt4", option: "Computer Style Sheets" },
            { id: "opt5", option: "Creative Style Sheets" },
            { id: "opt6", option: "Cascading Style Sheets" },
          ],
          questionAnswer: [{ answerId: "opt6" }],
        },
      ],
    },
    {
      id: "lesson3",
      title: "JavaScript Introduction",
      videoUrl: "https://www.youtube.com/embed/W6NZfCO5SIk",
      order: 3,
      questions: [
        {
          id: "q3",
          question: "Which type of language is JavaScript?",
          questionOptions: [
            { id: "opt7", option: "Compiled" },
            { id: "opt8", option: "Interpreted" },
            { id: "opt9", option: "Assembly" },
          ],
          questionAnswer: [{ answerId: "opt8" }],
        },
      ],
    },
  ],
  createdAt: new Date(),
};

export default function CourseDetail() {
  const [currentLesson, setCurrentLesson] = useState<number>(0);
  const [showExam, setShowExam] = useState(false);
  const [showSections, setShowSections] = useState(false);
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(
    new Set()
  );

  const handleCompleteLesson = () => {
    if (sampleCourse.lessons[currentLesson]) {
      setCompletedLessons((prev) => {
        const newSet = new Set(prev);
        newSet.add(sampleCourse.lessons[currentLesson].id);
        return newSet;
      });
      setShowExam(true);
    }
  };

  const handleExamComplete = () => {
    setShowExam(false);
    if (currentLesson < sampleCourse.lessons.length - 1) {
      setCurrentLesson(currentLesson + 1);
    }
  };

  if (showExam) {
    return (
      <div className="p-6 max-w-2xl mx-auto">
        <button
          className="flex items-center gap-2 mb-4 text-blue-600 hover:underline"
          onClick={() => setShowExam(false)}
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Lesson
        </button>
        <Exam
          lessonId={sampleCourse.lessons[currentLesson].id}
          questions={sampleCourse.lessons[currentLesson].questions.map((q) => ({
            question: q.question,
            options: q.questionOptions.map((opt) => opt.option),
            answer: q.questionAnswer[0]?.answerId ?? "",
          }))}
          onComplete={handleExamComplete}
        />
      </div>
    );
  }

  const currentLessonData = sampleCourse.lessons[currentLesson];

  return (
    <div className="p-6 max-w-4xl mx-auto relative">
      {/* Course Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{sampleCourse.title}</h1>
        <div className="flex gap-3">
          <button className="border px-4 py-2 rounded-lg hover:bg-gray-100">
            Share
          </button>
        </div>
      </div>

      {/* Course Overview */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Course Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{sampleCourse.description}</p>
          <p className="mt-2">
            💡 <strong>Instructor:</strong> {sampleCourse.teacher.name}
          </p>
          <p>📚 {sampleCourse.lessons.length} lessons</p>
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

          {currentLessonData && (
            <>
              <h2 className="text-xl font-bold mb-2">
                {currentLessonData.title}
              </h2>
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full rounded-lg"
                  src={currentLessonData.videoUrl}
                  title={currentLessonData.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <button
                className={`mt-4 flex items-center justify-center gap-2 px-6 py-2 rounded-lg transition ${
                  completedLessons.has(currentLessonData.id)
                    ? "bg-green-600 text-white"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
                onClick={handleCompleteLesson}
                disabled={completedLessons.has(currentLessonData.id)}
              >
                {completedLessons.has(currentLessonData.id) ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Lesson Completed
                  </>
                ) : (
                  "Complete Lesson"
                )}
              </button>
              <Overview />
            </>
          )}
        </div>

        {/* Sections Sidebar */}
        {showSections && (
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg border-l border-gray-200 z-50">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-bold">Course Lessons</h2>
              <button
                className="text-gray-500 hover:text-gray-800"
                onClick={() => setShowSections(false)}
              >
                ✕
              </button>
            </div>
            <div className="p-4 overflow-y-auto max-h-[calc(100vh-60px)]">
              <ul className="space-y-2">
                {sampleCourse.lessons.map((lesson, index) => (
                  <li
                    key={lesson.id}
                    className={`pb-2 cursor-pointer ${
                      index === currentLesson ? "font-bold text-blue-600" : ""
                    }`}
                    onClick={() => {
                      setCurrentLesson(index);
                      setShowSections(false);
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span>
                        {index + 1}. {lesson.title}
                      </span>
                      {completedLessons.has(lesson.id) && (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
