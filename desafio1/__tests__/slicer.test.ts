import { removeFirstElementsOfArrayByNumberOfElementsToBeRemoved } from "../src/lib/slicer";

describe("slicer", () => {
  it("Return empty list when do input is 0 and list", () => {
    const numberToRemove = 0;
    const videoDurationListInMinutes = [20, 30, 60, 90, 200, 30, 40, 20, 60, 15];

    const response = removeFirstElementsOfArrayByNumberOfElementsToBeRemoved(
      numberToRemove,
      videoDurationListInMinutes
    );

    expect(JSON.stringify(response)).toBe(JSON.stringify(videoDurationListInMinutes));
  });

  it("Return list when do input is 3 and list", () => {
    const numberToRemove = 3;
    const videoDurationListInMinutes = [20, 30, 60, 90, 200, 30, 40, 20, 60, 15];

    const response = removeFirstElementsOfArrayByNumberOfElementsToBeRemoved(
      numberToRemove,
      videoDurationListInMinutes
    );

    expect(JSON.stringify(response)).toBe(JSON.stringify([90, 200, 30, 40, 20, 60, 15]));
  });

  it("Return empty list when do input is 10", () => {
    const numberToRemove = 10;
    const videoDurationListInMinutes = [20, 30, 60, 90, 200, 30, 40, 20, 60, 15];

    const response = removeFirstElementsOfArrayByNumberOfElementsToBeRemoved(
      numberToRemove,
      videoDurationListInMinutes
    );

    expect(JSON.stringify(response)).toBe(JSON.stringify([]));
  });
});
