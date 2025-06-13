import type { VideoResponse } from "../types/videoResponse";
import Image from "next/image";

type VideoProps = {
  video: VideoResponse;
};

export function Video({ video }: VideoProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "0.5rem",
        padding: "0.5rem",
        border: "1px white solid",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input type="checkbox" style={{}} />
      <Image src={video.thumbnailUrl} alt="YouTube Thumbnail" width={96} height={65} style={{ objectFit: "cover" }} />
      <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
        <span className="text-[0.85rem] font-bold">{video.name}</span>
        <span className="text-[0.75rem]">
          {video.description?.length > 105 ? video.description.slice(0, 105) + "..." : video.description}
        </span>
        <span className="text-[0.6rem]">Duration: {video.duration}</span>
      </div>
    </div>
  );
}
