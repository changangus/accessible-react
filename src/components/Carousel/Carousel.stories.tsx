import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from 'react-jss';
import Carousel from './Carousel';
import createTheme from '../../utils/createTheme';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Accessible-React/Carousel',
  component: Carousel,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof Carousel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Carousel> = (args) =>  {
  const theme = createTheme({
    colors: {
      primary: '#FFF',
      secondary: '#000',
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Carousel {...args}>Carousel</Carousel>
      </div> 
    </ThemeProvider>
  )
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  carouselHeading: 'Carousel',
  carouselItems: [
    {
      title: 'Item 1',
      image: {
        src: 'https://unsplash.com/photos/DlkF4-dbCOU',
        alt: 'Item 1',
      },
      body: <p>Item 1 body</p>
    },
    {
      title: 'Item 2',
      image: {
        src: 'https://unsplash.com/photos/DlkF4-dbCOU',
        alt: 'Item 2',
      },
      body: <p>Item 2 body</p>
    },
    {
      title: 'Item 3',
      image: {
        src: 'https://unsplash.com/photos/DlkF4-dbCOU',
        alt: 'Item 3',
      },
      body: <p>Item 3 body</p>
    },
  ],
};

