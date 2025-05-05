"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import useAction from "@/hooks/useAction";
import { getCourse } from "@/actions/student/course";
import Link from "next/link";

export default function CourseList() {
  const [courses, refresh, isLoading] = useAction(getCourse, [true, () => {}]);
  return (
    <div>
      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses && courses.length > 0 ? (
          courses.map((course, index) => (
            <Card key={index} className="shadow-lg">
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Instructor: {course.teacher?.name ?? "Unknown"}
                </p>
                <p className="text-gray-600">{course.description}</p>
              </CardContent>
              <CardFooter>
                <Link href={`browse/${course.id}`} className="w-full">
                  <Button className="w-full bg-blue-300 hover:bg-accent-700 text-white">
                    learning
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            {isLoading ? "Loading courses..." : "No courses found."}
          </div>
        )}
      </div>
    </div>
  );
}
