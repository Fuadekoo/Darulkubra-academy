"use client";
import React, { useState } from "react";
import useAction from "@/hooks/useAction";
import {
  submitAnswers,
  checkAnswerSubmitted,
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
  // Track selected answerId for each questionId
  const [selected, setSelected] = useState<{ [questionId: string]: string }>(
    {}
  );
  const answers = Object.entries(selected).map(([questionId, answerId]) => ({
    questionId,
    answerId,
  }));
  const [, submit, isLoading] = useAction(submitAnswers, [, () => {}]);
  // const [checksubmit,refreshCheck, isLoadingCheck] = useAction(

  console.log("answer", answers);
  // submit(answers);

  const handleChange = (questionId: string, answerId: string) => {
    setSelected((prev) => ({ ...prev, [questionId]: answerId }));
  };

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
      <button onClick={() => submit(answers)} disabled={isLoading}>
        {isLoading ? "Submitting..." : "Complete Exam"}
      </button>
    </div>
  );
}

export default Exam;
