import { Meta, Story } from '@storybook/react'
import React from 'react'
import PasswordChange from './PasswordChange'

const Template: Story = () => {
  return <PasswordChange />
}

export const Default = Template.bind({})
Default.args = {}

export default {
  title: 'pages/PasswordChange',
  component: PasswordChange,
} as Meta
