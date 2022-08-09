import '@testing-library/jest-dom'
import React from "react";
import type { RenderResult } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  const clickFunction = jest.fn();
  const setup = (): RenderResult => {
    return render(
    <Button 
      ariaLabel="submit form"
      onClick={clickFunction}
      type="submit"
    >
      Submit
    </Button>)
  };

  beforeEach(() => setup());


  test("renders the Button component with children", () => {
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Submit');
  });

  test("passes in props correctly", () => {
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('aria-label', 'submit form');
    expect(button).toHaveAttribute('type', 'submit');
  });

  test('Runs onClick function prop when button is clicked', () => {
    const button = screen.getByRole('button')
    button.click();
    expect(clickFunction).toHaveBeenCalled();
  })
});