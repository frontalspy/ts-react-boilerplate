import React from "react";
import { App } from "../App";
import { render } from "@testing-library/react";

describe("Render", () => {
  it("should render LinkItem only", () => {
    const { getByText } = render(<App />);
    expect(getByText("Welcome")).toBeInTheDocument();
  });
});
