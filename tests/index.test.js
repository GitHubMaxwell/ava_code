let original = require("../original");
let revised = require("../revised");

describe("Convert Integer to Hex in ORIGINAL format", () => {
  it("Interview example inputs", () => {
    let results = original(9, 208, 194);
    expect(results).toBe("#09D0C2");
  });
  it("All top range values", () => {
    let results = original(255, 255, 255);
    expect(results).toBe("#FFFFFF");
  });
  it("All bottom range values", () => {
    let results = original(0, 0, 0);
    expect(results).toBe("#000000");
  });
  it("Missing Values", () => {
    let results = original(208, 194);
    expect(results).toBe("Missing Values");
  });
  it("Number range too high", () => {
    let results = original(1200, 208, 194);
    expect(results).toBe("All numbers must be between 0 - 255");
  });
  it("Number range too low", () => {
    let results = original(-1, 208, 194);
    expect(results).toBe("All numbers must be between 0 - 255");
  });
});

describe("Convert Integer to Hex in REVISED format", () => {
  it("Interview example inputs", () => {
    let results = revised(9, 208, 194);
    expect(results).toBe("#09D0C2");
  });
  it("All top range values", () => {
    let results = revised(255, 255, 255);
    expect(results).toBe("#FFFFFF");
  });
  it("All bottom range values", () => {
    let results = revised(0, 0, 0);
    expect(results).toBe("#000000");
  });
  it("Missing Values", () => {
    let results = revised(208, 194);
    expect(results).toBe("Missing Values");
  });
  it("Number range too high", () => {
    let results = revised(1200, 208, 194);
    expect(results).toBe("All numbers must be between 0 - 255");
  });
  it("Number range too low", () => {
    let results = revised(-1, 208, 194);
    expect(results).toBe("All numbers must be between 0 - 255");
  });
});
