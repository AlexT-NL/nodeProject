// import sum from 'sum.js';

const sum = require("./sum");

describe("Add numbers", () => {
    
  it.each([
    [[1, 1], 2],
    [[2, 3], 5],
    [[4, 2], 6],
    [[undefined, 3], NaN],
    [[1, null], 1],
    [[-1, 1], 0],
    [[-5, -10], -15],
    [[5, 10, 20], 35],
    [[-5, -10, 0], -15],
  ])("should sum %s as %s", (input, expected) => {
    expect(sum(...input)).toBe(expected);
  });
});
