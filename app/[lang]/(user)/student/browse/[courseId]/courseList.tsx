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

const courses = [
  {
    title: "ReactJS AI Chatbot with ChatGPT",
    instructor: "Anton Voroniuk",
    rating: 4.6,
    reviews: 190,
    price: "$29.99",
  },
  {
    title: "Next.js Ultimate - Build a Music Player App",
    instructor: "Van Nguyen",
    rating: 4.5,
    reviews: 42,
    price: "$54.99",
  },
  {
    title: "The Complete React Native + Hooks Course",
    instructor: "Stephen Grider",
    rating: 4.7,
    reviews: 120,
    price: "$49.99",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    instructor: "Andrei Neagoie",
    rating: 4.8,
    reviews: 300,
    price: "$39.99",
  },
  {
    title: "Python for Everybody Specialization",
    instructor: "Charles Severance",
    rating: 4.9,
    reviews: 500,
    price: "$49.99",
  },
  {
    title: "Machine Learning A-Z™: Hands-On Python & R In Data Science",
    instructor: "Kirill Eremenko",
    rating: 4.8,
    reviews: 200,
    price: "$49.99",
  },
  {
    title: "The Complete Web Developer Bootcamp",
    instructor: "Angela Yu",
    rating: 4.9,
    reviews: 1000,
    price: "$99.99",
  },
  {
    title: "The Complete JavaScript Course 2023 Edition",
    instructor: "Jonas Schmedtmann",
    rating: 4.7,
    reviews: 800,
    price: "$49.99",
  },
  {
    title: "The Complete Node.js Developer Course (3rd Edition)",
    instructor: "Andrew Mead",
    rating: 4.8,
    reviews: 600,
    price: "$49.99",
  },
  {
    title: "The Complete SQL Bootcamp 2023: Go from Zero to Hero",
    instructor: "Jose Portilla",
    rating: 4.7,
    reviews: 400,
    price: "$49.99",
  },
  {
    title: "The Complete Digital Marketing Course - 12 Courses in 1",
    instructor: "Rob Percival",
    rating: 4.6,
    reviews: 300,
    price: "$49.99",
  },
  {
    title: "The Complete Ethical Hacking Course: Beginner to Advanced!",
    instructor: "Zaid Sabih",
    rating: 4.7,
    reviews: 200,
    price: "$49.99",
  },
  {
    title: "The Complete Financial Analyst Course 2023",
    instructor: "365 Careers",
    rating: 4.8,
    reviews: 500,
    price: "$49.99",
  },
  // Add more courses as needed
];

export default function CourseList() {
  return (
    <div>
      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <Card key={index} className="shadow-lg">
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Instructor: {course.instructor}</p>
              <p className="text-gray-600">
                Rating: {course.rating} ({course.reviews} reviews)
              </p>
              <p className="font-semibold">{course.price}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-green-500 text-white">
                Enroll Now
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
