import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("input placeholder element", () => {
  const { getByPlaceholderText } = render(<App />);
  const placeHolderElement = getByPlaceholderText(/Please Search Gifs/i);
  expect(placeHolderElement).toBeInTheDocument();
});

test("button element named 'find' ", () => {
  const { getByText } = render(<App />);
  const buttonElement = getByText(/Find/i);
  expect(buttonElement).toBeInTheDocument();
});
