import React, { Component } from "react";
import { getElementType, avoidNest } from "../src/getElement";
import Render from "../src/Render";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}

App.defaultProps = {
  as: "div"
};

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

    expect(avoidNest(elementType, "", App)).toBe("div");
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

describe("Render Function - Returns an element type and renders the component with the styles and other html attributes", () => {
  let props = {
    as: "div",
    children: {
      type: "p",
      props: {
        children: "Hello"
      }
    }
  };

  let state = {
    styles: {
      animation: "fadeIn 3s"
    }
  };

  let rest = {
    className: "main"
  };

  let output = Render(App, props, state, rest);

  it("should be a function", () => {
    expect(typeof Render).toBe("function");
  });

  it("should return an element type", () => {
    expect(output.type).toBe("div");
  });

  it("should render the children (when component is not passed explicitly through prop)", () => {
    expect(output.props.children).toEqual({
      props: { children: "Hello" },
      type: "p"
    });
  });

  it("should render the component when passed through component prop", () => {
    props.component = NotDefault;
    props.children = {};
    output = Render(App, props, state, rest);
    expect(typeof output.props.children.type).toBe("function");
  });

  describe("attributes", () => {
    it("should include the styles and animation", () => {
      expect(output.props.style).toEqual({ animation: "fadeIn 3s" });
    });

    it("should include the html attributes", () => {
      expect(output.props.className).toBe("main");
    });
  });
});
