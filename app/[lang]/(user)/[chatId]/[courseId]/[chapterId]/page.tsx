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
import { getQuestionForActivePackageLastChapter } from "@/actions/student/question";

// import StudentQuestionForm from "../../_components/StudentQuestionForm";

// --- Sample Data for Testing ---
const sampleChapter = {
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
};
// --------------------------------

function Page() {
  const [data, , isLoading] = useAction(
    getQuestionForActivePackageLastChapter,
    [true, (response) => console.log(response)],
    "chat_001"
  );

  return (
    <div className="p-3 video-container flex flex-col gap-y-3 z-50">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink>Kids</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>QaydadulNuraniya</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>chapter1</BreadcrumbPage>
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
          src="https://www.youtube.com/embed/2ONoyljSUGE?si=GZ4JkAzeqHeTCxAH"
          title="Darulkubra video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        console.log(data);
        {/* Student Question Form */}
        {/* <StudentQuestionForm
          chapter={chapter}
          courseId={courseId}
          chapterId={chapterId}
          chat_id={chat_id}
        /> */}
      </div>
    </div>
  );
}

export default Page;
