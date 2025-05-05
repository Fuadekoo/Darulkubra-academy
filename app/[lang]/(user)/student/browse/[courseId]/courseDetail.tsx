"use client";
import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Exam from "./exam";
import { ArrowLeft, List, CheckCircle } from "lucide-react";
import Overview from "./overview";
import useAction from "@/hooks/useAction";
import { courseDetail } from "@/actions/student/course";
import { useParams } from "next/navigation";

export default function CourseDetail() {
  const { courseId } = useParams<{ courseId: string }>();
  const [courses, refresh, isLoading] = useAction(
    courseDetail,
    [true, () => {}],
    courseId
  );
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [showExam, setShowExam] = useState(false);
  const [showSections, setShowSections] = useState(false);
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(
    new Set()
  );

  const handleCompleteLesson = () => {
    if (courses?.lessons?.[currentLessonIndex]) {
      setCompletedLessons((prev) => {
        const newSet = new Set(prev);
        newSet.add(courses.lessons[currentLessonIndex].id);
        return newSet;
      });
      setShowExam(true);
    }
  };

  const handleExamComplete = () => {
    setShowExam(false);
    if (courses?.lessons && currentLessonIndex < courses.lessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
    }
  };

  if (isLoading) {
    return <div className="p-6">Loading course details...</div>;
  }

  if (!courses) {
    return <div className="p-6">Course not found</div>;
  }

  if (showExam && courses?.lessons?.[currentLessonIndex]) {
    const currentLesson = courses.lessons[currentLessonIndex];
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
          lessonId={currentLesson.id}
          questions={currentLesson.question.map((q) => ({
            id: q.id,
            question: q.question,
            options: q.questionOptions.map((opt) => ({ id: opt.id, option: opt.option })),
            answer: q.questionAnswer[0]?.answerId ?? "",
          }))}
          onComplete={handleExamComplete}
        />
      </div>
    );
  }

  const currentLesson = courses.lessons?.[currentLessonIndex];

  return (
    <div className="p-6 max-w-4xl mx-auto relative">
      {/* Course Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{courses.title}</h1>
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
          <p>{courses.description}</p>
          <p className="mt-2">
            💡 <strong>Instructor:</strong> {courses.teacher.name}
          </p>
          <p>📚 {courses.lessons?.length || 0} lessons</p>
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

          {currentLesson && (
            <>
              <h2 className="text-xl font-bold mb-2">{currentLesson.title}</h2>
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full rounded-lg"
                  src={currentLesson.videoUrl}
                  title={currentLesson.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <button
                className={`mt-4 flex items-center justify-center gap-2 px-6 py-2 rounded-lg transition ${
                  completedLessons.has(currentLesson.id)
                    ? "bg-green-600 text-white"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
                onClick={handleCompleteLesson}
                disabled={completedLessons.has(currentLesson.id)}
              >
                {completedLessons.has(currentLesson.id) ? (
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
                {courses.lessons?.map((lesson, index) => (
                  <li
                    key={lesson.id}
                    className={`pb-2 cursor-pointer ${
                      index === currentLessonIndex
                        ? "font-bold text-blue-600"
                        : ""
                    }`}
                    onClick={() => {
                      setCurrentLessonIndex(index);
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
