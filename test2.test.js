const { sorter, sortAscending, sortDescending, names } = require("./index");

describe("sortDescending", () => {
  it("should be a function", () => {
    expect(typeof sortDescending).toBe("function");
  });

  it("should return an array", () => {
    expect(Array.isArray(sortDescending(names))).toBe(true);
  });

  it("should sort descending", () => {
    expect(sortDescending(names)).toEqual([
      "Nyoman",
      "Ketut",
      "Halo",
      "Angel",
      "Aisyah",
    ]);
  });
});
