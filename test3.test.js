const { sorter, sortAscending, sortDescending, names } = require("./index");

describe("sorter", () => {
  it("should be a function", () => {
    expect(typeof sorter).toBe("function");
  });

  it("should return an array", () => {
    expect(Array.isArray(sorter(names, sortAscending))).toBe(true);
  });

  it("should sort ascending with index when given callback is sortAscending", () => {
    expect(sorter(names, sortAscending)).toEqual([
      "1. Aisyah",
      "2. Angel",
      "3. Halo",
      "4. Ketut",
      "5. Nyoman",
    ]);
  });

  it("should sort descending with index when given callback is sortAscending", () => {
    expect(sorter(names, sortDescending)).toEqual([
      "1. Nyoman",
      "2. Ketut",
      "3. Halo",
      "4. Angel",
      "5. Aisyah",
    ]);
  });
});
