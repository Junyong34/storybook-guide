import { Meta, Story } from '@storybook/react';
import React from 'react';
import Login from './Login';

const Template: Story = () => {
  return <Login />;
};

export const Default = Template.bind({});
Default.args = {};

export default {
  title: 'pages/Login',
  component: Login,
  parameters: {
    paramLink: {
      path: '/login/:id',
      route: '/login/1',
    },
  },
} as Meta;
