import Jobs from "@/components/jobs";
import { Suspense } from "react";

export default function Job() {
  return (
    <div className="py-5 px-10">
      <Suspense fallback={<div>Loading...</div>}>
        <Jobs />
      </Suspense>
    </div>
  );
}
