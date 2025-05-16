import React from "react";
import { BookOpenIcon } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

function MenuTitle() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);
  const isDesktop = useMediaQuery("(max-width: 768px)");
  return (
    <div className=" flex items-center">
      <Image src="/logo.jpg" alt="Darulkubra" width={40} height={40} />
      {/* <BookOpenIcon className="text-primary" size={40} /> */}
      {isDesktop && (
        <div className="fixed w-full shadow-md p-4 z-40">
          <Progress value={progress} className="w-[60%] mx-auto" />
        </div>
      )}
    </div>
  );
}

export default MenuTitle;
