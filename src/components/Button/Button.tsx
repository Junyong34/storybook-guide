import { PropsWithChildren } from 'react'
import { Button as MuiButton } from '@mui/material'
import { ButtonProps } from '@components/Button/Props'

function Button({  ...props }: PropsWithChildren<ButtonProps>) {
  return <MuiButton  {...props} />
}

export default Button
