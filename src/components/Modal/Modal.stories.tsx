import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Modal from './Modal';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Accessible-React/Modal',
  component: Modal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = (args) => { 
  return (
    <React.Fragment>
      <div style={{width: '250px', height: '100px'}} >
        <Modal {...args}>
          Modal
          <a href="">Link</a>
          <button>World</button>
        </Modal>
      </div>
      <div >
        <button>Hello</button>
      </div>
    </React.Fragment>
  ) 
 };

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: 'Open Modal',
};
