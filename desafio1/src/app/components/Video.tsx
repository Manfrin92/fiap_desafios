import type { VideoResponse } from "../types/videoResponse";

type VideoProps = {
  video: VideoResponse;
};

export function Video({ video }: VideoProps) {
  return (
    <div>
      <input type="checkbox" />
      <span>{video.name}</span>
      <span>{video.description}</span>
      <span>{video.duration}</span>
    </div>
  );
}
