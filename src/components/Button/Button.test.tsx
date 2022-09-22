import "@testing-library/jest-dom";
import React from "react";
import type { RenderResult } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";
import { ThemeProvider } from "react-jss";
import createTheme from "../../utils/createTheme";

describe("Button", () => {
  const clickFunction = jest.fn();
  const theme = createTheme();
  const setup = (styleType?: "contained" | "outlined"): RenderResult => {
    return render(
      <ThemeProvider theme={theme} >
        <Button ariaLabel="submit form" onClick={clickFunction} type="submit" styleType={styleType}>
          Submit
        </Button>
        )
      </ThemeProvider>
    );
  };

  test("renders the Button component with children", () => {
    setup();
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Submit");
  });

  test("passes in props correctly", () => {
    setup();
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-label", "submit form");
    expect(button).toHaveAttribute("type", "submit");
  });

  test("Runs onClick function prop when button is clicked", () => {
    setup();
    const button = screen.getByRole("button");
    button.click();
    expect(clickFunction).toHaveBeenCalled();
  });
  
  // we only need to check a single different style between the two styles
  test("Renders the button with the correct styles when nothing passed in", () => {
    setup();
    const button = screen.getByRole("button");
    expect(button).toHaveStyle(`background-color: ${theme.colors.primary}`);
  });

  test("Runs containedStyles when styleType is contained", () => {
    setup("contained");
    const button = screen.getByRole("button");
    expect(button).toHaveStyle(`background-color: ${theme.colors.primary}`);
  });

  test("Runs outlineStyles when styleType is outlined", () => {
    setup("outlined");
    const button = screen.getByRole("button");
    expect(button).toHaveStyle(`background-color: transparent`);
  }); 
}); 
