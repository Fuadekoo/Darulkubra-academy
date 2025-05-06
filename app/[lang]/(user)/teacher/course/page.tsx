"use client";
import React from "react";
import CourseList from "./myCourseList";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Page() {
  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Course List</h2>
        <Link href="course/addCourse">
          <Button className="bg-blue-500 text-white">Add Course</Button>
        </Link>
      </div>
      <CourseList />
    </div>
  );
}

export default Page;
