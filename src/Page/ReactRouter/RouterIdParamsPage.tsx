import { useParams } from 'react-router';
import { Typography } from '@mui/material';

function RouterIdParamsPage() {
  const { id: stringId } = useParams();
  return (
    <Typography variant={'body1'} color={'primary'}>
      Router Id 값: {stringId}
    </Typography>
  );
}

export default RouterIdParamsPage;
