import React, { Component } from "react";

import {getElementType, avoidNest} from "../mods/getElement";

class App extends Component {
  static defaultProps = {
    as: "div"
  };

  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}

class NotDefault extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}

describe("avoidNest", () => {
  it("should be a function", () => {
    expect(typeof avoidNest).toBe("function");
  });

  it("return elementType prop if child type and prop 'as' are same. ", () => {
    const child = { type: "h1" };

    const elementType = "div";

    expect(avoidNest(elementType, child, App)).toBe("div");
  });

  it("return elementType prop if no child passed", () => {
    const elementType = "div";

    expect(avoidNest(elementType, '', App)).toBe("div");
  });

  it("return elementType prop if its type is 'div'", () => {
    const child = {
      type: "div"
    };

    const elementType = "div";

    expect(avoidNest(elementType, child, App)).toBe("div");
  });
});

describe("getElementType", () => {
  it("should be a function", () => {
    expect(typeof getElementType).toBe("function");
  });

  it("return default elementType if (as === default.as)", () => {
    const props = {
      as: "div"
    };

    expect(getElementType(App, props)).toBe("div");
  });

  it("return prop 'as' if (as !== default.as) ", () => {
    const props = {
      as: "h1"
    };

    expect(getElementType(App, props)).toBe("h1");
  });

  it("returns prop 'as' if no default prop", () => {
    const props = {
      as: "h2"
    };

    expect(getElementType(NotDefault, props)).toBe("h2");
  });

  it("return div if no default and as prop", () => {
    const props = {
      as: ""
    };

    expect(getElementType(NotDefault, props)).toBe("div");
  });
});
