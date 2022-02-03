import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import React from "react";
import "@testing-library/jest-dom";

describe("all test", () => {
  let header;
  let emoji;
  let input;
  beforeEach(() => {
    render(<App />);
    emoji = screen.getByAltText("100");
    header = screen.getByText("Emoji Search");
    input = screen.getByPlaceholderText("search");
  });
  test("should header render", () => {
    expect(header).toBeInTheDocument();
  });

  test("should render emoji list", () => {
    expect(emoji).toBeInTheDocument();
  });
  test("should filter", () => {
    const emojiText = "grin";
    userEvent.type(input, emojiText);
    expect(emoji).not.toBeInTheDocument();
  });


  test('should copy emoji', () => {

    userEvent.click(emoji);
    const copyEmoji = window.ClipboardData;
    expect(copyEmoji).toEqual(emoji.value)


  });
  
});
