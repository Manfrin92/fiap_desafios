import { Label } from "@/components/ui/label";
import type { VideoResponse } from "../types/videoResponse";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";

type VideoProps = {
  video: VideoResponse;
};

export function Video({ video }: VideoProps) {
  return (
    <div className="flex flex-row gap-2 p-2 border-neutral-600 border-2 items-center justify-between">
      <Checkbox id={video.name} />
      <Label htmlFor={video.name} className="cursor-pointer">
        <div className="relative w-[96px] h-[65px]">
          <Image src={video.thumbnailUrl} alt="YouTube Thumbnail" fill sizes="96px" style={{ objectFit: "cover" }} />
        </div>
        <div className="flex flex-col gap-1 ml-2">
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
