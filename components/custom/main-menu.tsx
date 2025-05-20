"use client";
import React from "react";
import MenuTitle from "./menu-title";
import Link from "next/link";
import MenuItems from "./menu-items";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { LightDarkToggle } from "@/components/ui/light-dark-toggle";
import { cn } from "@/lib/utils";
import useAction from "@/hooks/useAction";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// import { pathProgressData } from "@/actions/student/progress";
import { getStudentProgressPerChapter } from "@/actions/student/progress";
import { updatePathProgressData } from "@/actions/student/progress";
import { getPackageData } from "@/actions/student/package";
// import { pathProgress } from "@/actions/student/progress";
import { useParams } from "next/navigation";

export default function MainMenu({ className }: { className?: string }) {
  const params = useParams();
  const chatId = String(params.chatId);
  const [progressData, refreshProgress, isLoading] = useAction(
    updatePathProgressData,
    [true, (response) => console.log(response)],
    chatId
  );

  const [data, refresh, isLoadingpackage] = useAction(
    getPackageData,
    [true, (response) => console.log(response)],
    chatId
  );

  const [chapterProgress, setChapterProgress] = React.useState<
    Record<string, boolean | null>
  >({});

  React.useEffect(() => {
    async function fetchAllProgress() {
      if (!data || !data.activePackage) return;
      const allChapters = data.activePackage.courses.flatMap(
        (course: any) => course.chapters
      );
      const progressEntries = await Promise.all(
        allChapters.map(async (chapter: any) => {
          const result = await getStudentProgressPerChapter(chapter.id, chatId);
          return [chapter.id, result?.isCompleted ?? null] as [
            string,
            boolean | null
          ];
        })
      );
      setChapterProgress(Object.fromEntries(progressEntries));
      if (refreshProgress) {
        refreshProgress();
      }
    }
    fetchAllProgress();
  }, [refreshProgress, data, chatId]);

  // const updateCourseId
  // const updateChapterId
  return (
    <nav
      className={cn(
        " bg-muted h-full overflow-auto py-2 px-4 flex flex-col gap-4",
        className
      )}
    >
      <header className=" hidden md:block border-b dark:border-b-black border-b-zinc-200 bg ">
        <MenuTitle />
      </header>
      {/* <ul className="py-4 grow">
        <MenuItems href={`/en/${chatId}/dashboard`}>Dashboard</MenuItems>
        {progressData && (
          <MenuItems
            href={`/en/${chatId}/${progressData.chapter.course.id}/${progressData.chapter.id}`}
          >
            courses
          </MenuItems>
        )}
      </ul> */}
      {!data ? (
        <div className="flex justify-center items-center py-8">Loading...</div>
      ) : (
        <Accordion type="single" collapsible>
          <h3 className="font-bold mb-2">{data.activePackage?.name}</h3>
          {data.activePackage?.courses.map((course: any, idx: number) => (
            <AccordionItem key={course.id} value={`course-${course.id}`}>
              <AccordionTrigger>{course.title}</AccordionTrigger>
              <AccordionContent>
                {course.chapters.map((chapter: any) => {
                  const isCompleted = chapterProgress?.[chapter.id];
                  return (
                    <div key={chapter.id} className="p-4 border-b">
                      <span>lesson: {chapter.position}</span>
                      <p className="text-sm text-gray-500">{chapter.title}</p>
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
                          : "Not Started"}
                      </span>
                      {isCompleted === true ? (
                        <Link
                          href={`/en/${chatId}/${course.id}/${chapter.id}`}
                          className="text-blue-500 hover:underline ml-4"
                        >
                          View Chapter
                        </Link>
                      ) : (
                        <span className="text-gray-400 ml-4 cursor-not-allowed">
                          View Chapter
                        </span>
                      )}
                    </div>
                  );
                })}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}

      <footer className="flex items-center gap-2">
        <Avatar>
          <AvatarFallback className="bg-pink-300 dark:bg-pink-800">
            TP
          </AvatarFallback>
        </Avatar>
        <Link href="/" className="hover:underLine">
          Logout
        </Link>
        <LightDarkToggle className="ml-auto" />
      </footer>
    </nav>
  );
}
