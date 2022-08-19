import '@testing-library/jest-dom'
import React from "react";
import type { RenderResult } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import Modal from './Modal';

describe('Modal', () => {
  const setup = (): RenderResult => {
    return render(
    <Modal 
      title="Open Modal"
    >
      <h1>Modal Content</h1>
    </Modal>)
  };

  beforeEach(() => setup());

  test('Modal is not open by default', () => {
    const modalContent = document.querySelector('h1');
    expect(modalContent).not.toBeInTheDocument(); 
  });

  test('Clicking Open Modal button displays the Modal', () => {
    const openModalButton = screen.getByRole('button');
    openModalButton.click();
    const modalContent = document.querySelector('h1');
    expect(modalContent).toBeInTheDocument();
  })
  
  test('Clicking Close button closes the Modal', () => {
    const openModalButton = screen.getByRole('button');
    openModalButton.click();
    const closeButton = screen.getByText('Close');
    closeButton.click();
    const modalContent = document.querySelector('h1');
    expect(modalContent).not.toBeInTheDocument(); 
  })
})