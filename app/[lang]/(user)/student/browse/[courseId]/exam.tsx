"use client";
import React, { useState, useEffect } from "react";
import useAction from "@/hooks/useAction";
import {
  submitAnswers,
  checkLessonExamComplete,
  correctAnswer,
} from "@/actions/student/question";

interface Question {
  id: string;
  question: string;
  options: { id: string; option: string }[];
  answer: string;
}

interface ExamProps {
  lessonId: string;
  questions: Question[];
  onComplete: () => void;
}

function Exam({ lessonId, questions, onComplete }: ExamProps) {
  const [selected, setSelected] = useState<{ [questionId: string]: string }>(
    {}
  );
  const answers = Object.entries(selected).map(([questionId, answerId]) => ({
    questionId,
    answerId,
  }));

  const [, submit, isLoading] = useAction(submitAnswers, [, () => {}]);
  const [checksubmit, refreshCheck, isLoadingCheck] = useAction(
    checkLessonExamComplete,
    [true, () => {}],
    lessonId
  );

  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    if (checksubmit) {
      // If already submitted, fetch the result
      correctAnswer(lessonId).then(setResult);
    }
  }, [checksubmit, lessonId]);

  const handleChange = (questionId: string, answerId: string) => {
    setSelected((prev) => ({ ...prev, [questionId]: answerId }));
  };

  const handleSubmit = async () => {
    await submit(answers);
    refreshCheck(); // Refresh to trigger result display
    if (onComplete) onComplete();
  };

  if (isLoadingCheck) return <div>Loading...</div>;

  // If already submitted, show result
  if (checksubmit && result) {
    const { studentResponse, questionAnswers, result: scoreResult } = result;

    return (
      <div>
        <h2 className="text-xl font-bold mb-4">Your Result</h2>
        <p>
          Correct: {scoreResult.correct} / {scoreResult.total} <br />
          Score: {(scoreResult.score * 100).toFixed(0)}%
        </p>
        <div className="mt-6">
          {questions.map((q, idx) => {
            const correctIds = questionAnswers[q.id] || [];
            const studentIds = studentResponse[q.id] || [];
            return (
              <div key={q.id} className="mb-4">
                <p className="font-semibold">
                  {idx + 1}. {q.question}
                </p>
                {q.options.map((opt) => {
                  const isCorrect = correctIds.includes(opt.id);
                  const isStudent = studentIds.includes(opt.id);
                  let color = "";
                  if (isCorrect && isStudent)
                    color = "bg-green-200 text-green-800 font-bold";
                  // correct and chosen
                  else if (isCorrect && !isStudent)
                    color = "bg-green-100 text-green-600";
                  // correct but not chosen
                  else if (!isCorrect && isStudent)
                    color = "bg-red-200 text-red-800 font-bold";
                  // wrong and chosen
                  else color = ""; // not chosen, not correct
                  return (
                    <div
                      key={opt.id}
                      className={`rounded px-2 py-1 my-1 ${color}`}
                    >
                      {opt.option}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // If not submitted, show the exam
  return (
    <div>
      <h1>Exam for Lesson {lessonId}</h1>
      {questions.map((q, index) => (
        <div key={q.id} style={{ marginBottom: "20px" }}>
          <p>
            {index + 1}. {q.question}
          </p>
          {q.options.map((option) => (
            <div key={option.id}>
              <label>
                <input
                  type="radio"
                  name={`question-${q.id}`}
                  value={option.id}
                  checked={selected[q.id] === option.id}
                  onChange={() => handleChange(q.id, option.id)}
                />
                {option.option}
              </label>
            </div>
          ))}
        </div>
      ))}
      <button
        onClick={handleSubmit}
        disabled={
          isLoading || Object.keys(selected).length !== questions.length
        }
      >
        {isLoading ? "Submitting..." : "Complete Exam"}
      </button>
    </div>
  );
}

export default Exam;
