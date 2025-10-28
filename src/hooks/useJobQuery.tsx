import { getJobs } from "@/actions/jobs.action";
import { useQuery } from "@tanstack/react-query";

export default function useJobQuery() {
  return useQuery({
    queryKey: ["jobs"],
    queryFn: getJobs,
    staleTime: 2 * 60 * 1000,
  });
}
