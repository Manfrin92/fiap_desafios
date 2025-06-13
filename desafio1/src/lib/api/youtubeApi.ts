import type { VideoResponse } from "@/app/types/videoResponse";

const thumbnails = [
  "https://i.ytimg.com/vi/OO28Et7kNYs/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLAzg47AvmxMZiu_MdvJLLdy9pDqDQ",
  "https://i.ytimg.com/vi/Dr0EHKKYJLQ/hqdefault.jpg?sqp=-oaymwE1CKgBEF5IVfKriqkDKAgBFQAAiEIYAXABwAEG8AEB-AH-CYAC0AWKAgwIABABGGUgZShlMA8=&rs=AOn4CLCkcb8ns57Ia9cs_AdowY0HLXCjjw",
  "https://i.ytimg.com/vi/PvqBqvQ8iys/hqdefault.jpg?sqp=-oaymwEwCKgBEF5IWvKriqkDIwgBFQAAiEIYAfABAfgBrgmAAtAFigIMCAAQARg7IGAocjAP&rs=AOn4CLB2YOoEZzgtrFIAmNo5xWLd07AaZQ",
  "https://i.ytimg.com/vi/_U9epQ-0I8k/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLANvanHIOn765oY2P5tEaOOmuNX5w",
  "https://i.ytimg.com/vi/kHB-6ZTjg-o/hqdefault.jpg?sqp=-oaymwE1CKgBEF5IVfKriqkDKAgBFQAAiEIYAXABwAEG8AEB-AH-CYAC0AWKAgwIABABGGUgWihLMA8=&rs=AOn4CLDY4bYtCQPH4LnmyXeIHXo_1ZLFQQ",
];

export async function youtubeApi(searchQuery: string): Promise<VideoResponse[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Generate mock video list
  const mockVideos = Array.from({ length: 5 }, (_, i) => {
    const hours = Math.floor(Math.random() * 2); // 0–1 hours
    const minutes = Math.floor(Math.random() * 60); // 0–59 minutes

    const videoResponse: VideoResponse = {
      name: `Video ${i + 1}`,
      description: `This is a mock description for video ${i + 1} based on the search: "${searchQuery}".`,
      duration: `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`,
      thumbnailUrl: thumbnails[i],
    };

    return videoResponse;
  });

  return mockVideos;
}
