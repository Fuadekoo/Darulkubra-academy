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
import { useParams } from "next/navigation";

function Page() {
  const params = useParams();
  const chatId = String(params.chatId);
  const coursedata = String(params.courseId);
  const [data, refresh, isLoading] = useAction(
    getQuestionForActivePackageLastChapter,
    [true, (response) => console.log(response)],
    chatId
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
        {isLoading ? (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-100">
            <div className="animate-pulse w-4/5 h-4/5 bg-gray-300 rounded-lg" />
          </div>
        ) : (
            <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={data && "chapter" in data ? data.chapter?.videoUrl : undefined}
            title="Darulkubra video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            ></iframe>
        )}
      </div>
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : !data ? (
          <div>No data found.</div>
        ) : "message" in data ? (
          <div className="text-center text-lg text-green-600 py-10">
            {data.message}
          </div>
        ) : (
          data.chapter &&
          Array.isArray(data.chapter.questions) && (
            <StudentQuestionForm
              chapter={{
                questions: data.chapter.questions,
              }}
              chatId={chatId}
              courseId={coursedata}
              chapterId={data.chapter.id}
            />
          )
        )}

        {/* student question page */}
      </div>
    </div>
  );
}

export default Page;
