import type StyleTheme from "../types/StyleTheme";
import type CustomStyleTheme from "../types/CustomStyleTheme";

const createTheme = (customTheme?: CustomStyleTheme): StyleTheme => {
  const defaultTheme = {
    colors: {
      primary: "red",
      secondary: "blue",
    },
    fonts: {
      headingOne: "Arial",
      headingTwo: "Helvetica",
      headingThree: "Times New Roman",
      body: "Verdana",
    },
    breakpoints: {
      mobile: "320px",
      tablet: "768px",
      desktop: "1024px",
    },
  }

  const theme: StyleTheme = {
    colors: {
      primary: customTheme?.colors?.primary || defaultTheme.colors.primary,
      secondary: customTheme?.colors?.secondary || defaultTheme.colors.secondary,
    },
    fonts: {
      headingOne: customTheme?.fonts?.headingOne || defaultTheme.fonts.headingOne,
      headingTwo: customTheme?.fonts?.headingTwo || defaultTheme.fonts.headingTwo,
      headingThree: customTheme?.fonts?.headingThree || defaultTheme.fonts.headingThree,
      body: customTheme?.fonts?.body || defaultTheme.fonts.body,
    },
    breakpoints: {
      mobile: customTheme?.breakpoints?.mobile || defaultTheme.breakpoints.mobile,
      tablet: customTheme?.breakpoints?.tablet || defaultTheme.breakpoints.tablet,
      desktop: customTheme?.breakpoints?.desktop || defaultTheme.breakpoints.desktop,
    },
  }

  return theme;
} 

export default createTheme;
