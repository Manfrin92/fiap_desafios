import React, { useState } from "react";
import { Video } from "./Video";
import { Skeleton } from "../../components/ui/skeleton";
import { useYoutubeSearch } from "../hooks/useYoutubeSearch";

type SearchFormProps = {
  onSubmit(value: any): void;
};

export function SearchForm({ onSubmit }: SearchFormProps) {
  const [searchInput, setSearchInput] = useState("");
  const { data: videoSearchResult, isLoading, refetch } = useYoutubeSearch(searchInput, false);

  async function handleSearch(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    refetch();
  }

  return (
    <form
      style={{
        marginTop: "1rem",
        gap: "0.5rem",
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
          marginBottom: "1rem",
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

      {isLoading ? (
        <>
          <Skeleton className="h-[5rem]" />
          <Skeleton className="h-[5rem]" />
          <Skeleton className="h-[5rem]" />
          <Skeleton className="h-[5rem]" />
          <Skeleton className="h-[5rem]" />
        </>
      ) : (
        videoSearchResult?.map((video, videoIndex) => {
          return <Video key={video.name + videoIndex} video={video} />;
        })
      )}
      {!isLoading && videoSearchResult && videoSearchResult.length > 0 && (
        <button type="submit" style={{ cursor: "pointer", marginTop: "1rem" }}>
          Submit
        </button>
      )}
    </form>
  );
}
