export function removeFirstElementsOfArrayByNumberOfElementsToBeRemoved(
  numberOfElementsToRemove: number,
  originalList: number[]
): number[] {
  return originalList.slice(numberOfElementsToRemove);
}
