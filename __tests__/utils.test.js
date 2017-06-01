import derive from "../src/utils/state";

describe("Merge style updates into state", () => {
  it("should be a function", () => {
    expect(typeof derive).toBe("function");
  });

  it("should return interpolated string if forceInterpolate prop not passed", () => {
    const props = {
      duration: "2s",
      timingFunction: "ease",
      delay: "0s",
      direction: "normal",
      iterations: "3",
      backfaceVisible: "visible",
      fillMode: "none",
      playState: "running"
    };

    const AnimationName = "Swing";

    expect(derive(props, AnimationName)).toBe(
      "Swing 2s ease 0s 3 normal none running"
    );
  });

  it("should return interpolated string with forceInterpolate prop", () => {
    const props = {
      duration: "2s",
      timingFunction: "ease",
      delay: "0s",
      direction: "normal",
      iterations: "3",
      backfaceVisible: "visible",
      fillMode: "none",
      playState: "running",
      forceInterpolate: {
        steps: "4",
        direction: "start"
      }
    };

    const AnimationName = "Zoom";

    expect(derive(props, AnimationName)).toBe(
      "Zoom 2s steps(4, start) 0s 3 none running"
    );
  });
});
