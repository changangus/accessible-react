import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Accordian from './Accordian';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Accessible-React/Accordian',
  component: Accordian,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof Accordian>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Accordian> = (args) => { 
  return (
    <React.Fragment>
      <Accordian {...args}>
        Accordian
      </Accordian>
    </React.Fragment>
  ) 
 };

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: 'Open Accordian',
};
