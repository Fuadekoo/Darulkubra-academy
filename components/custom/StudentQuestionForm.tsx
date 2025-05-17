"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useAction from "@/hooks/useAction";
import { submitAnswers } from "@/actions/student/question";
import { unlockingNextChapter } from "@/actions/student/chapter";
import { toast } from "sonner";

interface StudentQuestionFormProps {
  chapter: {
    questions: {
      id: string;
      question: string;
      questionOptions: { id: string; option: string }[];
    }[];
  } | null;
  chatId: string;
  courseId: string;
  chapterId: string;
}

const StudentQuestionForm = ({
  chapter,
  chatId,
  courseId,
  chapterId,
}: StudentQuestionFormProps) => {
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<string, string>
  >({});
  const router = useRouter();

  // UseAction expects: (answers, chatId)
  const [submitAnswersAction, data, response] = useAction(submitAnswers, [
    ,
    (response) => console.log(response),
  ]);
  // unlock next chapter
  const [unlockdata, unlockaction, unlockmethod] = useAction(
    unlockingNextChapter,
    [, (response) => console.log(response)]
  );

  const handleOptionChange = (questionId: string, optionId: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));
  };

  async function handleSubmit() {
    if (!chapter) return;

    const answers = Object.entries(selectedAnswers).map(
      ([questionId, answerId]) => ({
        questionId,
        answerId,
      })
    );

    try {
      await data(answers, chatId);
      toast.success("Answers submitted!");
      await unlockaction(courseId, chapterId, chatId);
      toast.success("Next chapter unlocked!");
      router.refresh();
    } catch (e) {
      toast.error("Failed to submit answers.");
    }
  }

  let questionNo = 1;
  return (
    <div className="mt-2">
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Chapter Questions</h2>
        {chapter?.questions.length ? (
          <div className="mt-4 space-y-4">
            {chapter.questions.map((question) => (
              <div
                key={question.id}
                className="p-4 border rounded-md bg-slate-100"
              >
                <h3 className="font-medium">
                  {questionNo++}. {question.question}
                </h3>
                <ul className="mt-2 space-y-2">
                  {question.questionOptions.map((option) => (
                    <li
                      key={option.id}
                      className="p-2 border rounded-md bg-white"
                    >
                      <label className="flex items-center gap-x-2">
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          value={option.id}
                          checked={selectedAnswers[question.id] === option.id}
                          onChange={() =>
                            handleOptionChange(question.id, option.id)
                          }
                        />
                        {option.option}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <Button onClick={handleSubmit} className="mt-4">
              Submit Answers
            </Button>
          </div>
        ) : (
          <p className="text-sm text-slate-500 italic">
            No questions available for this chapter.
          </p>
        )}
      </div>
    </div>
  );
};

export default StudentQuestionForm;
