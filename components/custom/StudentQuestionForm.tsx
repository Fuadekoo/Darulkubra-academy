"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useAction from "@/hooks/useAction";
import { correctAnswer } from "@/actions/student/question";
import { submitAnswers } from "@/actions/student/question";
import { getstudentId } from "@/actions/student/dashboard";
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
  // For radio (single answer per question)
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<string, string>
  >({});
  const [showCorrect, setShowCorrect] = useState(false);
  const [feedback, setFeedback] = useState<any>(null);
  const router = useRouter();

  // studentId
  const [getStudentById, studentId] = useAction(
    getstudentId,
    [true, (response) => console.log(response)],
    chatId
  );

  const studentIdString = String(getStudentById) || "";

  const [submitAnswersAction, data, response] = useAction(submitAnswers, [
    ,
    (response) => console.log(response),
  ]);

  // Fetch correct answers and feedback
  async function fetchCorrectAnswers() {
    const res = await correctAnswer(chapterId, Number(studentIdString));
    setFeedback(res);
  }

  const handleOptionChange = (questionId: string, optionId: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setShowCorrect(false);
    setFeedback(null);
  };

  async function handleSubmit() {
    if (!chapter) return;
    // Convert selectedAnswers to expected format
    const answers = Object.entries(selectedAnswers).map(
      ([questionId, answerId]) => ({
        questionId,
        answerId, // single answer per question
      })
    );

    try {
      await data(answers, chatId, courseId, chapterId);
      toast.success("Answers submitted!");
      await fetchCorrectAnswers();
      setShowCorrect(true);
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
                  {question.questionOptions.map((option) => {
                    let optionClass = "p-2 border rounded-md bg-white";
                    const answered = showCorrect && feedback;
                    const isSelected =
                      selectedAnswers[question.id] === option.id;
                    const isStudentSelected = feedback?.studentResponse?.[
                      question.id
                    ]?.includes(option.id);
                    const isCorrectOption = feedback?.questionAnswers?.[
                      question.id
                    ]?.includes(option.id);

                    if (answered) {
                      if (isStudentSelected && isCorrectOption) {
                        optionClass += " bg-green-300 text-white"; // correct and selected
                      } else if (isStudentSelected && !isCorrectOption) {
                        optionClass += " bg-red-300 text-white"; // selected but wrong
                      } else if (!isStudentSelected && isCorrectOption) {
                        optionClass += " bg-green-100"; // not selected but correct
                      } else {
                        optionClass += " bg-default-50";
                      }
                    } else {
                      if (isSelected) {
                        optionClass += " border-blue-400";
                      }
                    }

                    return (
                      <li key={option.id} className={optionClass}>
                        <label className="flex items-center gap-x-2">
                          <input
                            type="radio"
                            name={`question-${question.id}`}
                            value={option.id}
                            checked={selectedAnswers[question.id] === option.id}
                            onChange={() =>
                              handleOptionChange(question.id, option.id)
                            }
                            disabled={showCorrect}
                          />
                          {option.option}
                          {answered && isCorrectOption && (
                            <span className="ml-2 text-green-600 font-bold">
                              (Correct Answer)
                            </span>
                          )}
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
            <div className="flex gap-4 mt-4">
              <Button onClick={handleSubmit} disabled={showCorrect}>
                Submit Answers
              </Button>
              <Button variant="outline" onClick={handleReset}>
                Reset
              </Button>
              <Button>Next</Button>
            </div>
            {showCorrect && feedback?.result && (
              <div className="mt-6 p-4 rounded bg-slate-50 border text-center">
                <div>
                  <b>Score:</b> {feedback.result.score * 100}%
                </div>
                <div>
                  <b>Correct:</b> {feedback.result.correct} /{" "}
                  {feedback.result.total}
                </div>
              </div>
            )}
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
