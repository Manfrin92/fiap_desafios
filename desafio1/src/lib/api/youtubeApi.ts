import type { VideoResponse } from "@/app/types/videoResponse";

export async function youtubeApi(searchQuery: string): Promise<VideoResponse[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Generate mock video list
  const mockVideos = Array.from({ length: 15 }, (_, i) => {
    const hours = Math.floor(Math.random() * 2); // 0–1 hours
    const minutes = Math.floor(Math.random() * 60); // 0–59 minutes

    return {
      name: `Video ${i + 1} - ${searchQuery}`,
      description: `This is a mock description for video ${i + 1} based on the search: "${searchQuery}".`,
      duration: `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`,
    };
  });

  return mockVideos;
}
