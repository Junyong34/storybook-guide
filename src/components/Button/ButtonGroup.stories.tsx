import { Story, Meta } from '@storybook/react'
import ButtonGroup from '@components/Button/ButtonGroup'
import { ButtonGroupProps } from '@components/Button/Props'
import Button from '@src/components/Button/Button'
import { BoxWrap } from '../StyleObj'

const Template: Story<ButtonGroupProps> = (args: ButtonGroupProps) => {
  return (
      <BoxWrap>
        <div>
          <ButtonGroup {...args}>
            <Button>스토리북</Button>
            <Button>크로메틱</Button>
            <Button>Cypress</Button>
          </ButtonGroup>
        </div>
      </BoxWrap>
  )
}
export default {
  title: 'components/MUI/ButtonGroup',
  component: ButtonGroup,
} as Meta

export const Default = Template.bind({})
Default.args = {}
