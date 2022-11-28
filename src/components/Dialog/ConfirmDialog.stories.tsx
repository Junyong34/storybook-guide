import { Button } from '@mui/material'

import { Meta, Story } from '@storybook/react'

import useConfirmDialog, { useConfirmDialogProps } from '@components/Dialog/hooks/useConfirmDialog'

import { FlexWrap } from '../StyleObj'

const Template: Story<useConfirmDialogProps> = (args: useConfirmDialogProps) => {
  const { confirmOpen, ConfirmComp } = useConfirmDialog({ ...args })
  return (
    <>
      <FlexWrap>
        <Button variant="outlined" onClick={() => confirmOpen(true)}>
          confirmOpen
        </Button>
        <ConfirmComp />
      </FlexWrap>
    </>
  )
}

export default {
  title: 'components/MUI/Dialog/Confirm',
  component: Template,
} as Meta

export const Default = Template.bind({})
Default.args = {
  type: 'delete',
  addTitle: '정보',
  addContent: '정보들을',
  onConfirm: () => {
    console.log('확인')
  },
}
