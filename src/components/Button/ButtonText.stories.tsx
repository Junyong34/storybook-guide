import { Story, Meta } from '@storybook/react'
import AddIcon from '@mui/icons-material/Add'
import { BoxWrap } from '../StyleObj'
import Button from './Button'
import { ButtonProps } from './Props'

const Template: Story<ButtonProps> = (args: ButtonProps) => {
  return (
    <BoxWrap >
      <div>
        <Button {...args}>controls</Button>
      </div>
      <div>
        <Button {...args} size={'small'}>
          Small
        </Button>
      </div>
      <div>
        <Button {...args} size={'medium'}>
          Medium
        </Button>
      </div>
      <div>
        <Button {...args} size={'large'}>
          Large
        </Button>
      </div>
      <div>
        <Button {...args} size={'medium'} disabled>
          disabled
        </Button>
      </div>
      <div>
        <Button {...args} size={'medium'}>
          color
        </Button>
      </div>
      <div>
        <Button {...args} size={'medium'}>
          color
        </Button>
      </div>
      <div>
        <Button
          {...args}
          size={'medium'}
          startIcon={<AddIcon />}
        >
          icon
        </Button>
      </div>
      <div>
        <Button
          {...args}
          size={'medium'}
          startIcon={<AddIcon />}
          href={'?path=/story/components-mui-button--outlined'}
          target="_blank"
        >
          href
        </Button>
      </div>
    </BoxWrap>
  )
}
export default {
  title: 'components/MUI/Button',
  component: Button,
} as Meta

export const Text = Template.bind({})
Text.args = {
  variant: 'text',
}
