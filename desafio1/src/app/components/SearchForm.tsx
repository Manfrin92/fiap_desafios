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
      className="mt-4 flex flex-col gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        onSubmit(data as any);
      }}
    >
      <div className="flex gap-4 min-w-4 items-center mb-4">
        <div className="flex gap-2 flex-1 bg-yellow">
          <div className="flex-1">
            <label htmlFor="search-video" className="hidden">
              Search videos
            </label>
            <input
              id="search-video"
              name="search-video"
              type="text"
              placeholder="Search for videos..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.currentTarget.value ?? "")}
              className="w-full"
            />
          </div>
          <button className="cursor-pointer flex-0.2" onClick={handleSearch}>
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
        <button type="submit" className="mt-4 cursor-pointer">
          Submit
        </button>
      )}
    </form>
  );
}
