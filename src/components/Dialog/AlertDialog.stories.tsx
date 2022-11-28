import { Button } from '@mui/material'

import { Meta, Story } from '@storybook/react'

import useAlertDialog, { useAlertDialogProps } from '@components/Dialog/hooks/useAlertDialog'

import { FlexWrap } from '../StyleObj'

const Template: Story<useAlertDialogProps> = (args: useAlertDialogProps) => {
  const { AlertOpen, AlertComp } = useAlertDialog({ ...args })
  return (
    <>
      <FlexWrap>
        <Button variant="outlined" onClick={() => AlertOpen(true)}>
          AlertOpen
        </Button>
        <AlertComp />
      </FlexWrap>
    </>
  )
}

export default {
  title: 'components/MUI/Dialog/Alert',
  component: Template,
} as Meta

export const Default = Template.bind({})
Default.args = {
  type: 'CHECK',
  addTitle: 'ID',
  addContent: 'ID를 ',
}
