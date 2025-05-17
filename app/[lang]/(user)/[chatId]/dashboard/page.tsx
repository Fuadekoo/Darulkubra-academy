"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BadgeCheckIcon, UserCheckIcon, BookOpenCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import useAction from "@/hooks/useAction";
import { getPackageData } from "@/actions/student/package";
import getStudentProgressPerChapter from "@/actions/student/chapter";

function CourseData() {
  const completecoursepersent = 66;
  const [data, refresh, isLoading] = useAction(
    getPackageData,
    [true, (response) => console.log(response)],
    "chat_001"
  );

  // Assume this returns: [{ chapterId: string, isCompleted: boolean }, ...]
  const [chapterprogress] = useAction(
    getStudentProgressPerChapter,
    [true, (response) => console.log(response)],
    "chapter_001",
    "chat_001"
  );

  // Helper to get chapter progress
  function getChapterProgress(chapterId: string) {
    if (!chapterprogress) return null;
    const found = chapterprogress.find((c: any) => c.chapterId === chapterId);
    return found ? found.isCompleted : null;
  }

  return (
    <div className="m-4">
      <div className="grid lg:grid-cols-2 gap-8">
        <Card className="border-pink-500 flex flex-col gap-2">
          <CardHeader>
            <CardTitle>In Progress</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <div className="flex gap-2">
              <span className="text-orange-500 text-5xl">
                <BookOpenCheck />
              </span>
              <div className="text-5xl font-bold">
                100 <span className="text-xl text-gray-500">courses</span>
              </div>
            </div>
            <div>
              <Button size="sm" asChild>
                <Link href="#">View All</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Completed</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <div className="flex gap-2">
              <span className="text-green-500 text-5xl">
                <BookOpenCheck />
              </span>
              <div className="text-5xl font-bold">
                200 <span className="text-xl text-gray-500">courses</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            {completecoursepersent > 50 ? (
              <span className="text-green-500 flex items-center gap-2">
                <BadgeCheckIcon />
                Great job! Keep it up!
              </span>
            ) : (
              <span className="text-yellow-500 flex items-center gap-2">
                <UserCheckIcon />
                Keep pushing, you're almost there!
              </span>
            )}
          </CardFooter>
        </Card>
      </div>

      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : !data ? (
          <div>No data found.</div>
        ) : "message" in data ? (
          <div className="text-center text-lg text-green-600 py-10">
            {/* {data.message} */}
          </div>
        ) : (
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>{data.activePackage?.name}</AccordionTrigger>
              <AccordionContent>
                {data.activePackage?.courses.map((course: any) => (
                  <div key={course.id} className="p-4 border-b">
                    <h3 className="text-lg font-semibold">{course.title}</h3>
                    <p className="text-sm text-gray-500">{course.title}</p>
                    <div>
                      {course.chapters.map((chapter: any) => {
                        const isCompleted = getChapterProgress(chapter.id);
                        return (
                          <div key={chapter.id} className="p-4 border-b">
                            <h3 className="text-lg font-semibold">
                              {chapter.title}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {chapter.title}
                            </p>
                            <span>position: {chapter.position}</span>
                            <span
                              className={`ml-2 px-2 py-1 rounded text-xs font-semibold
                                ${
                                  isCompleted === true
                                    ? "bg-green-100 text-green-700"
                                    : isCompleted === false
                                    ? "bg-yellow-100 text-yellow-700"
                                    : "bg-gray-100 text-gray-500"
                                }`}
                            >
                              {isCompleted === true
                                ? "Completed"
                                : isCompleted === false
                                ? "Not Completed"
                                : "No Data"}
                            </span>
                            <Link
                              href={`/en/chat_001/${data.activePackage?.id}/${chapter.id}`}
                              className="text-blue-500 hover:underline ml-4"
                            >
                              View Chapter
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
      </div>
    </div>
  );
}

function Page() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">This is a dashboard page</h1>
      <CourseData />
    </div>
  );
}

export default Page;
