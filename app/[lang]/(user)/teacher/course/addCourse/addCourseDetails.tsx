"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Plus, Trash2, ChevronDown, ChevronUp } from "lucide-react";

interface Lesson {
  id: string;
  title: string;
  videoUrl: string;
  questions: Question[];
}

interface Question {
  id: string;
  question: string;
  options: Option[];
  correctOption: string;
}

interface Option {
  id: string;
  text: string;
}

function AddCourseDetails({ courseId }: { courseId: string }) {
  // Course state
  const [course, setCourse] = useState({
    title: "Advanced Web Development",
    description: "This is a course about advanced web development techniques",
    image: "",
    price: 0,
  });

  // Lessons state
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(null);

  // Handle course changes
  const handleCourseChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCourse((prev) => ({ ...prev, [name]: value }));
  };

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCourse((prev) => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Lesson handlers
  const addLesson = () => {
    const newLesson: Lesson = {
      id: Date.now().toString(),
      title: "",
      videoUrl: "",
      questions: [],
    };
    setLessons((prev) => [...prev, newLesson]);
    setSelectedLessonId(newLesson.id);
  };

  const updateLesson = (id: string, field: string, value: string) => {
    setLessons((prev) =>
      prev.map((lesson) =>
        lesson.id === id ? { ...lesson, [field]: value } : lesson
      )
    );
  };

  const deleteLesson = (id: string) => {
    setLessons((prev) => prev.filter((lesson) => lesson.id !== id));
    if (selectedLessonId === id) {
      setSelectedLessonId(null);
    }
  };

  // Question handlers
  const addQuestion = (lessonId: string) => {
    const newQuestion: Question = {
      id: Date.now().toString(),
      question: "",
      options: [
        { id: "1", text: "" },
        { id: "2", text: "" },
        { id: "3", text: "" },
        { id: "4", text: "" },
      ],
      correctOption: "1",
    };

    setLessons((prev) =>
      prev.map((lesson) =>
        lesson.id === lessonId
          ? { ...lesson, questions: [...lesson.questions, newQuestion] }
          : lesson
      )
    );
  };

  const updateQuestion = (
    lessonId: string,
    questionId: string,
    field: string,
    value: string
  ) => {
    setLessons((prev) =>
      prev.map((lesson) =>
        lesson.id === lessonId
          ? {
              ...lesson,
              questions: lesson.questions.map((q) =>
                q.id === questionId ? { ...q, [field]: value } : q
              ),
            }
          : lesson
      )
    );
  };

  const updateOption = (
    lessonId: string,
    questionId: string,
    optionId: string,
    text: string
  ) => {
    setLessons((prev) =>
      prev.map((lesson) =>
        lesson.id === lessonId
          ? {
              ...lesson,
              questions: lesson.questions.map((q) =>
                q.id === questionId
                  ? {
                      ...q,
                      options: q.options.map((opt) =>
                        opt.id === optionId ? { ...opt, text } : opt
                      ),
                    }
                  : q
              ),
            }
          : lesson
      )
    );
  };

  const deleteQuestion = (lessonId: string, questionId: string) => {
    setLessons((prev) =>
      prev.map((lesson) =>
        lesson.id === lessonId
          ? {
              ...lesson,
              questions: lesson.questions.filter((q) => q.id !== questionId),
            }
          : lesson
      )
    );
  };

  const selectedLesson = lessons.find(
    (lesson) => lesson.id === selectedLessonId
  );

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Course Details */}
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Course Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Course Title</Label>
                <Input
                  name="title"
                  value={course.title}
                  onChange={handleCourseChange}
                />
              </div>
              <div>
                <Label>Description</Label>
                <Textarea
                  name="description"
                  value={course.description}
                  onChange={handleCourseChange}
                />
              </div>
              <div>
                <Label>Course Image</Label>
                {course.image ? (
                  <div className="mt-2">
                    <img
                      src={course.image}
                      alt="Course preview"
                      className="h-32 w-full object-cover rounded"
                    />
                    <Button
                      variant="outline"
                      className="mt-2"
                      onClick={() =>
                        setCourse((prev) => ({ ...prev, image: "" }))
                      }
                    >
                      Change Image
                    </Button>
                  </div>
                ) : (
                  <div className="mt-2">
                    <input
                      type="file"
                      id="course-image"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <Label
                      htmlFor="course-image"
                      className="cursor-pointer border rounded p-4 flex items-center justify-center"
                    >
                      <Plus className="mr-2" />
                      Upload Image
                    </Label>
                  </div>
                )}
              </div>
              <div>
                <Label>Price ($)</Label>
                <Input
                  type="number"
                  name="price"
                  value={course.price}
                  onChange={handleCourseChange}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Middle Column - Lessons */}
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Course Lessons</CardTitle>
                <Button size="sm" onClick={addLesson}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Lesson
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {lessons.length === 0 ? (
                <p className="text-gray-500">No lessons added yet</p>
              ) : (
                <div className="space-y-2">
                  {lessons.map((lesson) => (
                    <div
                      key={lesson.id}
                      className={`p-4 border rounded cursor-pointer ${
                        selectedLessonId === lesson.id
                          ? "border-blue-500 bg-blue-50"
                          : "hover:bg-gray-50"
                      }`}
                      onClick={() => setSelectedLessonId(lesson.id)}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-medium">
                            {lesson.title || "Untitled Lesson"}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {lesson.questions.length} questions
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteLesson(lesson.id);
                          }}
                        >
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Questions for Selected Lesson */}
        <div className="lg:col-span-1 space-y-6">
          {selectedLesson ? (
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>
                    {selectedLesson.title || "Untitled Lesson"} Questions
                  </CardTitle>
                  <Button
                    size="sm"
                    onClick={() => addQuestion(selectedLesson.id)}
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Add Question
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label>Lesson Title</Label>
                  <Input
                    value={selectedLesson.title}
                    onChange={(e) =>
                      updateLesson(selectedLesson.id, "title", e.target.value)
                    }
                  />
                </div>
                <div>
                  <Label>Video URL</Label>
                  <Input
                    value={selectedLesson.videoUrl}
                    onChange={(e) =>
                      updateLesson(
                        selectedLesson.id,
                        "videoUrl",
                        e.target.value
                      )
                    }
                    placeholder="https://example.com/video.mp4"
                  />
                </div>

                {selectedLesson.questions.length > 0 && (
                  <div className="space-y-4">
                    {selectedLesson.questions.map((question) => (
                      <div
                        key={question.id}
                        className="p-4 border rounded space-y-3"
                      >
                        <div className="flex justify-between items-center">
                          <Label>Question</Label>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              deleteQuestion(selectedLesson.id, question.id)
                            }
                          >
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </div>
                        <Input
                          value={question.question}
                          onChange={(e) =>
                            updateQuestion(
                              selectedLesson.id,
                              question.id,
                              "question",
                              e.target.value
                            )
                          }
                        />

                        <div className="space-y-2">
                          <Label>Options</Label>
                          {question.options.map((option) => (
                            <div
                              key={option.id}
                              className="flex items-center space-x-2"
                            >
                              <input
                                type="radio"
                                name={`correct-option-${question.id}`}
                                checked={question.correctOption === option.id}
                                onChange={() =>
                                  updateQuestion(
                                    selectedLesson.id,
                                    question.id,
                                    "correctOption",
                                    option.id
                                  )
                                }
                              />
                              <Input
                                value={option.text}
                                onChange={(e) =>
                                  updateOption(
                                    selectedLesson.id,
                                    question.id,
                                    option.id,
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Lesson Details</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  {lessons.length === 0
                    ? "Create a lesson to add questions"
                    : "Select a lesson to edit"}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddCourseDetails;
