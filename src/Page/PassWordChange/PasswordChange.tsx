import { Content } from './StyleObj';
import { Button, Grid, Stack, TextField, Typography } from '@mui/material';
import Box_1 from '@src/components/Box/Box_1';
import Box_2 from '@src/components/Box/Box_2';
import useAlertDialog from '@components/Dialog/hooks/useAlertDialog';
import { FormEvent, useState } from 'react';

export const PASSWORD_MSG = {
  PASSWORD_ERROR: {
    title: '오류',
    content: '기존 비밀번호를 다시 확인 해주세요.',
  },
  NEW_PASSWORD_CHECK: {
    title: '확인',
    content: '변경하는 비밀번호가 불일치 합니다.',
  },
  PASSWORD_SAVE: {
    title: '성공',
    content: '비밀번호 변경이 되었습니다.',
  },
  TEMP: {
    title: '',
    content: '',
  },
};
type PasswordChangeProps = {
  onClick?: () => void;
};
function PasswordChange(props: PasswordChangeProps) {
  const { onClick } = props;
  const 테스트용_기존비번 = '기존 비밀번호 입력';
  const [alertMsg, setAlertMsg] = useState(PASSWORD_MSG.TEMP);
  const { AlertOpen, AlertComp } = useAlertDialog({
    addTitle: alertMsg.title,
    addContent: alertMsg.content,
  });

  const submitHandler = (data: FormEvent<HTMLFormElement>) => {
    onClick && onClick();
    let msgKey: keyof typeof PASSWORD_MSG = 'TEMP';

    const beforePs = (data.target as HTMLFormElement).querySelector(
      '#ps_field'
    ) as HTMLInputElement;
    const changePs = (data.target as HTMLFormElement).querySelector(
      '#cps_field'
    ) as HTMLInputElement;
    const changePs2 = (data.target as HTMLFormElement).querySelector(
      '#cps_field2'
    ) as HTMLInputElement;
    if (테스트용_기존비번 !== beforePs?.value) {
      msgKey = 'PASSWORD_ERROR';
    } else if (changePs?.value !== changePs2.value) {
      msgKey = 'NEW_PASSWORD_CHECK';
    } else {
      msgKey = 'PASSWORD_SAVE';
    }
    setAlertMsg(PASSWORD_MSG[msgKey]);
    AlertOpen(true);
  };
  return (
    <Box_1>
      <Content>
        <form
          id={'formChangePassword'}
          onSubmit={(data) => {
            event!.preventDefault();
            submitHandler(data);
          }}
          style={{ width: '100%' }}
        >
          <Grid container>
            <Grid item xs={12}>
              <Box_2>
                <Typography story-id={'before_pw'} py={1} variant={'subtitle2'}>
                  기존 비밀번호
                </Typography>
                <TextField
                  id={'ps_field'}
                  inputProps={{
                    'story-id': 'ps_field',
                  }}
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
                <Typography story-id={'change_pw'} py={1} variant={'subtitle2'}>
                  변경하는 비밀번호
                </Typography>
                <TextField
                  id={'cps_field'}
                  inputProps={{
                    'story-id': 'cps_field',
                  }}
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
                <Typography story-id={'change_pw2'} py={1} variant={'subtitle2'}>
                  비밀번호 재입력
                </Typography>
                <TextField
                  id={'cps_field2'}
                  inputProps={{
                    'story-id': 'cps_field2',
                  }}
                  size={'medium'}
                  name={'rePassWord'}
                  label={'비밀번호 재입력'}
                  type={'password'}
                  fullWidth
                  sx={{ marginTop: '4px' }}
                />
              </Box_2>
            </Grid>
            <Grid item xs={12} py={2}>
              <Stack direction={'row'} justifyContent={'flex-end'}>
                <Button
                  story-id={'save_button'}
                  onClick={() => {}}
                  type={'submit'}
                  size={'medium'}
                  color={'primary'}
                  variant={'outlined'}
                >
                  저장
                </Button>
              </Stack>
            </Grid>
          </Grid>
          <AlertComp />
        </form>
      </Content>
    </Box_1>
  );
}

export default PasswordChange;
