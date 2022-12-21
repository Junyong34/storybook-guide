import { ComponentMeta, ComponentStory, Meta, Story } from '@storybook/react';
import React from 'react';
import RouterIdParamsPage from '@src/Page/ReactRouter/RouterIdParamsPage';

const Template: ComponentStory<typeof RouterIdParamsPage> = () => {
  return <RouterIdParamsPage />;
};

export default {
  title: 'pages/RouterIdParamsPage',
  component: RouterIdParamsPage,
  argTypes: {},
  parameters: {
    paramLink: {
      path: '/test/page/:id',
      route: '/test/page/0012',
    },
  },
} as ComponentMeta<typeof RouterIdParamsPage>;
export const Default = Template.bind({});
Default.args = {};
