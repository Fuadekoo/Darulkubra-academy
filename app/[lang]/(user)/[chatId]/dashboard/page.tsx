import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BadgeCheckIcon, UserCheckIcon, BookOpenCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function CourseData() {
  const completecoursepersent = 66;
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
