import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';

const Box_2 = (props: PropsWithChildren) => {
  return (
    <Box
      p={1}
      sx={{
        border: '1px solid blue',
        borderRadius: '4px',
      }}
    >
      {props.children}
    </Box>
  );
};

export default Box_2;
