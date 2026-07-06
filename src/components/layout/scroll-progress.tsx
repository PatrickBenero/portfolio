"use client";

import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { Progress } from "@/components/ui/progress";

export function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <div className="fixed left-0 right-0 top-0 z-[60] h-1">
      <Progress value={progress} className="h-1 rounded-none bg-transparent" />
    </div>
  );
}
