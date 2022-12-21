import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';

const Box_1 = (props: PropsWithChildren) => {
  return (
    <Box
      p={2}
      sx={{
        border: '1px solid black',
      }}
    >
      {props.children}
    </Box>
  );
};

export default Box_1;
