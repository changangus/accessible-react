import '@testing-library/jest-dom'
import React from "react";
import type { RenderResult } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import Accordian from './Accordian';

describe('Accordian', () => {
  const setup = (): RenderResult => {
    return render(
    <Accordian title='Open Accordian'>
      <h3>Accordian Content</h3>
    </Accordian>)
  };
  
  beforeEach(() => setup());

  test('Accordian is not open by default', () => {
    const accordianContent = document.querySelector('h3');
    expect(accordianContent).not.toBeVisible(); 
  });
  
  test('Clicking Open Accordian button displays the Accordian', () => {
    const accordianButton = screen.getByRole('button');
    accordianButton.click();
    const accordianContent = document.querySelector('h3');
    expect(accordianContent).toBeVisible();
  });

  test('Clicking Close button closes the Accordian', () => {
    const accordianButton = screen.getByRole('button');
    // this click opens
    accordianButton.click();
    // this click closes
    accordianButton.click();
    const accordianContent = document.querySelector('h3');
    expect(accordianContent).not.toBeVisible(); 
  });
});