import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("renders hello world", () => {
  render(<App />);
  const linkElement = screen.getByRole("heading", { name: /hello world/i });
  expect(linkElement).toBeInTheDocument();
});
