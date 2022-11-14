import { PropsWithChildren } from 'react'
import { ButtonGroup as MuiButtonGroup } from '@mui/material'
import { ButtonGroupProps } from './Props'

function ButtonGroup(props: PropsWithChildren<ButtonGroupProps>) {
  return <MuiButtonGroup {...props}  />
}

export default ButtonGroup
