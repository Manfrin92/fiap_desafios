import { Label } from "@/components/ui/label";
import type { VideoResponse } from "../types/videoResponse";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";

type VideoProps = {
  video: VideoResponse;
};

export function Video({ video }: VideoProps) {
  return (
    <div className="flex flex-row gap-2 p-2 border-neutral-600 border-2 justify-center items-center">
      <Checkbox id={video.name} />
      <Label htmlFor={video.name} className="cursor-pointer">
        <Image src={video.thumbnailUrl} alt="YouTube Thumbnail" width={96} height={65} style={{ objectFit: "cover" }} />
        <div className="flex flex-col gap-1">
          <span className="text-[0.85rem] font-bold">{video.name}</span>
          <span className="text-[0.75rem]">
            {video.description?.length > 105 ? video.description.slice(0, 105) + "..." : video.description}
          </span>
          <span className="text-[0.6rem]">Duration: {video.duration}</span>
        </div>
      </Label>
    </div>
  );
}
