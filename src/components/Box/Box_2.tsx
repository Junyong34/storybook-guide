import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';

const Box_2 = (props: PropsWithChildren) => {
  return <Box p={1}>{props.children}</Box>;
};

export default Box_2;
