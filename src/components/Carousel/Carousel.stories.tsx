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
      primary: '#ff0000',
      secondary: '#00ff00',
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <div style={{
        width: '200px',
       height: '100px',
      }}>
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
    },
    {
      title: 'Item 2',
    },
  ],
};

