import createTheme from './createTheme';

describe('createTheme', () => {
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
  it('returns the defaultTheme if no theme is passed in', () => {
    expect(createTheme()).toEqual(defaultTheme);
  });
  it('returns the defaultTheme if an empty object is passed in', () => {
    expect(createTheme({})).toEqual(defaultTheme);
  });
  it('returns custom theme if a custom theme is passed in', () => {
    const customTheme = {
      colors: {
        primary: "green",
        secondary: "yellow",
      },
      fonts: {
        headingOne: "Comic Sans",
        headingTwo: "Impact",
        headingThree: "Courier",
        body: "Georgia",
      },
      breakpoints: {
        mobile: "320px",
        tablet: "768px",
        desktop: "1024px",
      },
    }
    expect(createTheme(customTheme)).toEqual(customTheme);
  });
  it('returns custom theme if a custom theme is passed in with missing properties', () => {
    const customThemeInput = {
      colors: {
        primary: "green",
        secondary: "yellow",
      },
      fonts: {
        headingOne: "Comic Sans",
        headingTwo: "Impact",
        headingThree: "Courier",
        body: "Georgia",
      },
    }
    const customThemeOutput = {
      colors: {
        primary: "green",
        secondary: "yellow",
      },
      fonts: {
        headingOne: "Comic Sans",
        headingTwo: "Impact",
        headingThree: "Courier",
        body: "Georgia",
      },
      breakpoints: {
        mobile: "320px",
        tablet: "768px",
        desktop: "1024px",
      },
    };
    expect(createTheme(customThemeInput)).toEqual(customThemeOutput);
  });
});

