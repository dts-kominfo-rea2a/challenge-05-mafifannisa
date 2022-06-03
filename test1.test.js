const { sorter, sortAscending, sortDescending, names } = require("./index");

describe("sortAscending", () => {
  it("should be a function", () => {
    expect(typeof sortAscending).toBe("function");
  });

  it("should return an array", () => {
    expect(Array.isArray(sortAscending(names))).toBe(true);
  });

  it("should sort ascending", () => {
    expect(sortAscending(names)).toEqual([
      "Aisyah",
      "Angel",
      "Halo",
      "Ketut",
      "Nyoman",
    ]);
  });
});
