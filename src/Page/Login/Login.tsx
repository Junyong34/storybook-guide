import Button from '@src/components/Button';
import { Content, Main, Title } from './StyleObj';
import { TextField } from '@mui/material';
import Box_1 from '@src/components/Box/Box_1';
import { useParams } from 'react-router';

function Login() {
  const { id: stringId } = useParams();

  console.log(stringId);
  return (
    <Box_1>
      <Main>
        <Content>
          <Title>Nike 로그인</Title>
          <form
            onSubmit={() => {
              console.log('submit');
            }}
            style={{ width: '100%' }}
          >
            <TextField
              size={'medium'}
              name={'username'}
              label={'이메일'}
              fullWidth
              sx={{ marginTop: '11px' }}
            />
            <TextField
              size={'medium'}
              name={'password'}
              type={'password'}
              label={'비밀번호'}
              fullWidth
              sx={{ marginTop: '12px' }}
            />
            <Button
              type={'submit'}
              variant="contained"
              fullWidth
              sx={{ margin: '32px 0 40px' }}
              data-sb-kind={'pages/Home'}
            >
              로그인
            </Button>
          </form>
        </Content>
      </Main>
    </Box_1>
  );
}

export default Login;
