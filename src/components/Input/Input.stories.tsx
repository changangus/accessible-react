import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from './Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Accessible-React/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args}>Input</Input>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  htmlForAndInputId: 'email',
  inputType: 'email',
  errorMessage: 'Invalid email input, please try again',
  errorId: 'email',
  placeholder: 'email@email.com',
  value: 'changangus2@gmail.com',
};