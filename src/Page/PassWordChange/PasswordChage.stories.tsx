import { ComponentMeta, ComponentStory, Meta, Story } from '@storybook/react';
import React from 'react';
import PasswordChange from './PasswordChange';
import { passWordChangeRunTest } from '@src/Page/PassWordChange/passWordChange.interaction';

const Template: ComponentStory<typeof PasswordChange> = (args) => {
  return <PasswordChange {...args} />;
};

export default {
  title: 'pages/PasswordChange',
  component: PasswordChange,
  argTypes: {
    onSubmit: { action: true },
    onClick: { action: true },
  },
} as ComponentMeta<typeof PasswordChange>;
export const Default = Template.bind({});
Default.args = {
  // onClick: () => {
  //   console.log(111);
  // },
};

passWordChangeRunTest(Default);
