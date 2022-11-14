import { Content } from './StyleObj';
import { Grid, TextField, Typography } from '@mui/material';
import Box_1 from '@src/components/Box/Box_1';
import Box_2 from '@src/components/Box/Box_2';

function PasswordChange() {
  return (
    <Box_1>
      <Content>
        <form
          onSubmit={() => {
            console.log('submit');
          }}
          style={{ width: '100%' }}
        >
          <Grid container>
            <Grid item xs={12}>
              <Box_2>
                <Typography py={1} variant={'subtitle2'}>
                  기존 비밀번호
                </Typography>
                <TextField
                  size={'medium'}
                  name={'beforePassWord'}
                  label={'기존 비밀번호'}
                  type={'password'}
                  fullWidth
                  sx={{ marginTop: '4px' }}
                />
              </Box_2>
            </Grid>
            <Grid item xs={12}>
              <Box_2>
                <Typography py={1} variant={'subtitle2'}>
                  변경하는 비밀번호
                </Typography>
                <TextField
                  size={'medium'}
                  name={'changePassWord'}
                  label={'변경하는 비밀번호'}
                  type={'password'}
                  fullWidth
                  sx={{ marginTop: '4px' }}
                />
              </Box_2>
            </Grid>
            <Grid item xs={12}>
              <Box_2>
                <Typography py={1} variant={'subtitle2'}>
                  비밀번호 재입력
                </Typography>
                <TextField
                  size={'medium'}
                  name={'rePassWord'}
                  label={'비밀번호 재입력'}
                  type={'password'}
                  fullWidth
                  sx={{ marginTop: '4px' }}
                />
              </Box_2>
            </Grid>
          </Grid>
        </form>
      </Content>
    </Box_1>
  );
}

export default PasswordChange;
