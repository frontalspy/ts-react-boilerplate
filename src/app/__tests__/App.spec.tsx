import { render } from "@testing-library/react";
import React from "react";
import { App } from "../App";

describe("Render", () => {
  it("should render LinkItem only", () => {
    const { getByText } = render(<App />);
    expect(getByText("Welcome")).toBeInTheDocument();
  });
});
