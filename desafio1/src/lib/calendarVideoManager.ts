export function getNumberOfFirstVideosThatCanBeWatchedByAvailableTimeInSingleDayAndVideoDurations(
  availableTimeInMinutes: number,
  videoDurationListInMinutes: number[]
): number[] {
  const videosToWatch: number[] = [];
  let freeTime = availableTimeInMinutes;

  videoDurationListInMinutes.forEach((videoDuration, index) => {
    if (videoDuration <= freeTime && index === videosToWatch.length) {
      videosToWatch.push(videoDuration);
      freeTime -= videoDuration;
    }
  });

  return videosToWatch;
}
