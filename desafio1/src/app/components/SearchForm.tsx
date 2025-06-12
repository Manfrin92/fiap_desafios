import { youtubeApi } from "@/lib/api/youtubeApi";
import React, { useState } from "react";
import type { VideoResponse } from "../types/videoResponse";
import SkeletonBox from "./SkeletonBox";
import { Video } from "./Video";

type SearchFormProps = {
  onSubmit(value: any): void;
};

export function SearchForm({ onSubmit }: SearchFormProps) {
  const [searchInput, setSearchInput] = useState("");
  const [videoSearchResult, setVideoSearchResult] = useState<VideoResponse[]>([]);
  //TODO: REMOVE
  const [loading, setLoading] = useState(false);

  async function handleSearch(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    setLoading(true);
    const searchResult = await youtubeApi(searchInput);
    setLoading(false);
    setVideoSearchResult(searchResult);

    console.log(searchResult);
  }

  return (
    <form
      style={{
        marginTop: "1rem",
        gap: "1.5rem",
        display: "flex",
        flexDirection: "column",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        onSubmit(data as any);
      }}
    >
      <div
        style={{
          display: "flex",
          minWidth: "18rem",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <div style={{ display: "flex", gap: "0.5rem", flex: 1 }}>
          <div style={{ flex: 1 }}>
            <label htmlFor="search-video" style={{ display: "none" }}>
              Search videos
            </label>
            <input
              id="search-video"
              name="search-video"
              type="text"
              placeholder="Search for videos..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.currentTarget.value ?? "")}
              style={{ width: "100%" }}
            />
          </div>
          <button style={{ cursor: "pointer", flex: 0.2 }} onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      {loading && <SkeletonBox height="30rem" />}

      {videoSearchResult.map((video, videoIndex) => {
        return <Video key={video.name + videoIndex} video={video} />;
      })}
      {videoSearchResult.length > 0 && (
        <button type="submit" style={{ cursor: "pointer" }}>
          Submit
        </button>
      )}
    </form>
  );
}
