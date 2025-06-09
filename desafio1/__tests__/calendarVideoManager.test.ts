import { getNumberOfFirstVideosThatCanBeWatchedByAvailableTimeInSingleDayAndVideoDurations } from "../src/lib/calendarVideoManager";

describe("Calendar Video Manager", () => {
  it("Return empty list when do not have enough time to watch any video in the list", () => {
    const availableTimeInOneDayInMinutes = 0;
    const videoDurationListInMinutes = [20, 30, 60, 90, 200, 30, 40, 20, 60, 15];

    const response = getNumberOfFirstVideosThatCanBeWatchedByAvailableTimeInSingleDayAndVideoDurations(
      availableTimeInOneDayInMinutes,
      videoDurationListInMinutes
    );

    expect(JSON.stringify(response)).toBe(JSON.stringify([]));
    expect(response.length).toBe(0);
  });

  it("Returns one when have time to watch the first video(s) in the list", () => {
    const availableTimeInOneDayInMinutes = 20;
    const videoDurationListInMinutes = [20, 30, 60, 90, 200, 30, 40, 20, 60, 15];

    const response = getNumberOfFirstVideosThatCanBeWatchedByAvailableTimeInSingleDayAndVideoDurations(
      availableTimeInOneDayInMinutes,
      videoDurationListInMinutes
    );

    expect(JSON.stringify(response)).toBe(JSON.stringify([20]));
    expect(response.length).toBe(1);
  });

  it("Returns one when have time to watch the first video(s) in the list", () => {
    const availableTimeInOneDayInMinutes = 40;
    const videoDurationListInMinutes = [20, 30, 60, 90, 200, 30, 40, 20, 60, 15];

    const response = getNumberOfFirstVideosThatCanBeWatchedByAvailableTimeInSingleDayAndVideoDurations(
      availableTimeInOneDayInMinutes,
      videoDurationListInMinutes
    );

    expect(JSON.stringify(response)).toBe(JSON.stringify([20]));
    expect(response.length).toBe(1);
  });

  it("Returns two when have time to watch the first two video(s) in the list", () => {
    const availableTimeInOneDayInMinutes = 50;
    const videoDurationListInMinutes = [20, 30, 60, 90, 200, 30, 40, 20, 60, 15];

    const response = getNumberOfFirstVideosThatCanBeWatchedByAvailableTimeInSingleDayAndVideoDurations(
      availableTimeInOneDayInMinutes,
      videoDurationListInMinutes
    );

    expect(JSON.stringify(response)).toBe(JSON.stringify([20, 30]));
    expect(response.length).toBe(2);
  });
});
