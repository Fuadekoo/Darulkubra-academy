"use client";
import React from "react";

interface Question {
  question: string;
  options: string[];
  answer: string;
}

interface ExamProps {
  lessonId: string;
  questions: Question[];
  onComplete: () => void;
}

function Exam({ lessonId, questions, onComplete }: ExamProps) {
  return (
    <div>
      <h1>Exam for Lesson {lessonId}</h1>
      {questions.map((q, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <p>
            {index + 1}. {q.question}
          </p>
          {q.options.map((option, i) => (
            <div key={i}>
              <label>
                <input type="radio" name={`question-${index}`} value={option} />
                {option}
              </label>
            </div>
          ))}
        </div>
      ))}
      <button onClick={onComplete}>Complete Exam</button>
    </div>
  );
}

export default Exam;
