import { Story, Meta } from '@storybook/react'
import Button from '@components/Button/Button'
import { ButtonProps } from '@components/Button/Props'
import AddIcon from '@mui/icons-material/Add'
import { BoxWrap } from '../StyleObj'

const Template: Story<ButtonProps> = (args: ButtonProps) => {
  return (
    <BoxWrap >
      <div className={'button-card'}>
        <Button {...args}>controls</Button>
      </div>
      <div className={'button-card'}>
        <Button {...args} size={'small'}>
          Small
        </Button>
      </div>
      <div className={'button-card'}>
        <Button {...args} size={'medium'}>
          Medium
        </Button>
      </div>
      <div className={'button-card'}>
        <Button {...args} size={'large'}>
          Large
        </Button>
      </div>
      <div className={'button-card'}>
        <Button {...args} size={'medium'} disabled>
          disabled
        </Button>
      </div>
      <div className={'button-card'}>
        <Button {...args} size={'medium'}>
          color
        </Button>
      </div>
      <div className={'button-card'}>
        <Button {...args} size={'medium'}>
          color
        </Button>
      </div>
      <div className={'button-card'}>
        <Button
          {...args}
          size={'medium'}
          startIcon={<AddIcon />}
        >
          icon
        </Button>
      </div>
      <div className={'button-card'}>
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

export const Outlined = Template.bind({})
Outlined.args = {
  variant: 'outlined',
}
