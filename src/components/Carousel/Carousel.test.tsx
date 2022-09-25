import React from "react";
import "@testing-library/jest-dom";
import Carousel from "./Carousel";
import { render, screen } from "@testing-library/react";
import createTheme from "../../utils/createTheme";
import { ThemeProvider } from "react-jss";

describe("Carousel", () => {
  const theme = createTheme();
  const setup = () => {
    const utils = render(
      <ThemeProvider theme={theme}>
        <Carousel
          carouselItems={[
            {
              title: "Test 1",
              image: {
                src: "https://via.placeholder.com/150",
                alt: "Test 1",
              },
              body: <></>,
            },
            {
              title: "Test 2",
              image: {
                src: "https://via.placeholder.com/150",
                alt: "Test 2",
              },
              body: <></>,
            },
          ]}
          carouselHeading="heading"
        />
      </ThemeProvider>
    );
    const carousel = utils.container.querySelector(".carousel");
    return {
      carousel,
      ...utils,
    };
  };

  it("should render", () => {
    const { carousel } = setup();
    const carouselHeading = screen.getByText("heading");
    expect(carouselHeading).toBeInTheDocument();
  });

  it("should change the active slide", () => {
    const { carousel } = setup();
    const nextButton = screen.getByText("Next");
    nextButton.click();
    const headerTwo = screen.getByRole("heading", { level: 3 });
    expect(headerTwo).toBeInTheDocument();
    expect(headerTwo).toHaveTextContent("Test 2");
  });
});
