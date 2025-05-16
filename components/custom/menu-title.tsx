import React, { useEffect, useState } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

// ✅ MOCK FUNCTION — REPLACE THIS WITH YOUR REAL BACKEND/API CALL
async function fetchProgressData() {
  return {
    completed: 5,
    total: 8,
  };
}

function MenuTitle() {
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [total, setTotal] = useState(1); // default to 1 to avoid division by zero

  useEffect(() => {
    async function loadProgress() {
      const data = await fetchProgressData(); // 🔁 call backend here
      const percent = (data.completed / data.total) * 100;

      setCompleted(data.completed);
      setTotal(data.total);
      setProgress(percent);
    }

    loadProgress();
  }, []);

  const isDesktop = useMediaQuery("(max-width: 768px)");

  return (
    <div className="flex items-center">
      <Image src="/logo.jpg" alt="Darulkubra" width={40} height={40} />
      {isDesktop && (
        <div className="fixed w-full shadow-md p-4 z-40">
          <Progress value={progress} className="w-[60%] mx-auto" />
          <div className="text-green-500 text-sm text-center mt-1">
            {completed} / {total}
          </div>
        </div>
      )}
    </div>
  );
}

export default MenuTitle;
