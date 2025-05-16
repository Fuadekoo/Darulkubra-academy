"use client";
import * as React from "react";
import { Progress } from "@/components/ui/progress";

function Page() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      {/* Fixed Progress Bar */}
      <div className="top-0 left-0 w-full bg-white shadow-md p-4 z-50">
        <Progress value={progress} className="w-[60%] mx-auto" />
      </div>

      {/* Page Content */}
      <div className="mt-[80px] flex flex-col items-center">
        {/* YouTube Video */}
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        {/* Exam Section */}
        <div className="exam-container">
          <h2>Final Exam</h2>
          <p>Question 1: What is React?</p>
          <input type="text" placeholder="Type your answer here..." />
          <p>lorem5000</p>
        </div>
      </div>
    </div>
  );
}

export default Page;
