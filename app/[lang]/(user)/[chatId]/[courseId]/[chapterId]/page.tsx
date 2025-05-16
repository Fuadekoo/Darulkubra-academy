"use client";
import * as React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import useAction from "@/hooks/useAction";
import { getQuestionForActivePackageLastChapter } from "@/actions/student/test";
import StudentQuestionForm from "@/components/custom/StudentQuestionForm";

// --- Sample Data for Testing ---
// --- Sample Data for Testing ---
const sampleData = {
  progress: "5/8",
  packageName: "Programming Fundamentals",
  courseName: "React Basics",
  chapterName: "Hooks Introduction",
  chapter: {
    chapterName: "Hooks Introduction",
    chapterVideo:
      "https://www.youtube.com/embed/2ONoyljSUGE?si=GZ4JkAzeqHeTCxAH",
    questions: [
      {
        id: "q1",
        question: "What is React?",
        questionOptions: [
          { id: "o1", option: "A JavaScript library" },
          { id: "o2", option: "A CSS framework" },
          { id: "o3", option: "A database" },
        ],
      },
      {
        id: "q2",
        question: "Which hook is used for state in React?",
        questionOptions: [
          { id: "o1", option: "useState" },
          { id: "o2", option: "useEffect" },
          { id: "o3", option: "useRouter" },
        ],
      },
    ],
  },
};
// --------------------------------

function Page() {
  const [data, refresh, isLoading] = useAction(
    getQuestionForActivePackageLastChapter,
    [true, (response) => console.log(response)],
    "chat_002"
  );

  return (
    <div className="p-3 video-container flex flex-col gap-y-3 z-50">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink>
              {data && "packageName" in data ? data.packageName : "Package"}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>
              {" "}
              {data && "packageName" in data ? data.courseTitle : "courseName"}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>
              {" "}
              {data && "packageName" in data
                ? data.chapter?.title
                : "chapterName"}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Responsive iframe wrapper */}
      <div
        className="relative w-full"
        style={{ paddingTop: "56.25%" /* 16:9 Aspect Ratio */ }}
      >
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`${sampleData.chapter.chapterVideo}`}
          title="Darulkubra video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          data &&
          "chapter" in data &&
          data.chapter &&
          Array.isArray(data.chapter.questions) && (
            <StudentQuestionForm
              chapter={{
                questions: data.chapter.questions,
              }}
            />
          )
        )}

        {/* student question page */}
      </div>
    </div>
  );
}

export default Page;
