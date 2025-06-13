import { useQuery } from "@tanstack/react-query";
import { youtubeApi } from "../../lib/api/youtubeApi"; // adjust path as needed

export function useYoutubeSearch(searchQuery: string, enabled: boolean) {
  return useQuery({
    queryKey: ["youtube", searchQuery],
    queryFn: () => youtubeApi(searchQuery),
    enabled: !!searchQuery && enabled, // prevents it from running when query is empty
    staleTime: 0.5 * 60 * 1000, // CACHE IN MINUTES
  });
}
