import React from "react";
import CourseList from "./courseList";
import { Button } from "@/components/ui/button";

function Page() {
  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Course List</h2>
        <Button className="bg-blue-500 text-white">Add Course</Button>
      </div>
      <CourseList />
    </div>
  );
}

export default Page;
