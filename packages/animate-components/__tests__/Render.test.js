import React, { Component } from "react";
import Render from "../mods/Render";

class App extends Component {
  static defaultProps = {
    as: "div"
  };

  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}

class Comp extends Component {
  render () {
    return (
      <div>
        I am a component.
      </div>
    )
  }
}

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

describe("Render Function - Returns an element type and renders the component with the styles and other html attributes", () => {
  it("should be a function", () => {
    expect(typeof Render).toBe("function");
  });

  it("should return an element type", () => {
    expect(output.type).toBe("div");
  });

  it("should render the children (when component is not passed explicitly through prop)", () => {
    expect(output.props.children).toEqual({"props": {"children": "Hello"}, "type": "p"});
  });

  it("should render the component when passed through component prop", () => {
    props.component = Comp;
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
