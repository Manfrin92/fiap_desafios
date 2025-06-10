import { getMinutesByHours } from "../src/lib/timeHelper";

describe("Time Helper", () => {
  it("Return 0 when input is 0", () => {
    const input = 0;
    const expected = 0;

    const response = getMinutesByHours(input);

    expect(response).toBe(expected);
  });

  it("Return 60 when input is 1", () => {
    const input = 1;
    const expected = 60;

    const response = getMinutesByHours(input);

    expect(response).toBe(expected);
  });

  it("Return 30 when input is 0.5", () => {
    const input = 0.5;
    const expected = 30;

    const response = getMinutesByHours(input);

    expect(response).toBe(expected);
  });
});
