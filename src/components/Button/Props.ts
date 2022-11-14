import { ButtonProps as MuiButtonProps } from '@mui/material/Button'

export interface ButtonProps extends Omit<MuiButtonProps, 'color'> {
  target?: '_blank'
  component?: string
}

export type SplitButtonProps = {
  itemOption: Array<{ value: string; label: string }>
  clickHandler?: (data: { value: string; label: string }) => void
  disabledIndex?: number
  defaultIndex?: number
  buttonProps?: ButtonProps
}


import { ButtonGroupProps as MuiButtonGroupProps } from '@mui/material/ButtonGroup'

export type ButtonGroupProps = MuiButtonGroupProps
