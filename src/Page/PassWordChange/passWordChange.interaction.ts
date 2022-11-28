import { within } from '@testing-library/dom';
import { userEvent, waitFor } from '@storybook/testing-library';
import { ComponentStory } from '@storybook/react';
import { expect } from '@storybook/jest';
import PasswordChange, { PASSWORD_MSG } from './PasswordChange';

export function passWordChangeRunTest(story: ComponentStory<typeof PasswordChange>) {
  story.play = async ({ args, canvasElement }) => {
    // Starts querying the component from its root element
    const canvas = within(canvasElement);
    const before_pw_title = canvas.getByTestId('before_pw');
    const change_pw_title = canvas.getByTestId('change_pw');
    const change_pw2_title = canvas.getByTestId('change_pw2');
    // 타이틀 확인
    expect(before_pw_title.textContent).toBe('기존 비밀번호');
    expect(change_pw_title.textContent).toBe('변경하는 비밀번호');
    expect(change_pw2_title.textContent).toBe('비밀번호 재입력');

    // 비밀번호 입력
    await userEvent.type(canvas.getByTestId('ps_field'), '기존 비밀번호 입력2', {
      delay: 30,
    });
    await userEvent.type(canvas.getByTestId('cps_field'), '변경 비밀번호 입력', {
      delay: 30,
    });
    await userEvent.type(canvas.getByTestId('cps_field2'), '변경 비밀번호 입력', {
      delay: 30,
    });
    // 저장 버튼 실행
    const save_button = canvas.getByTestId('save_button');
    await userEvent.click(save_button);
    await expect(args.onClick).toHaveBeenCalled();

    // case1 기존 비밀번호 오입력 체크
    const dialogDom = document.querySelector("[role='presentation']") as HTMLElement;
    const dialogCanvas = within(dialogDom);

    const alert_msg = dialogCanvas.getByTestId('alert_msg');
    const alert_close = dialogCanvas.getByTestId('dialog_close');
    await expect(alert_msg.textContent).toBe(PASSWORD_MSG['PASSWORD_ERROR'].content);
    await userEvent.click(alert_close);

    // 필드 초기화
    await userEvent.clear(canvas.getByTestId('ps_field'));
    await userEvent.clear(canvas.getByTestId('cps_field'));
    await userEvent.clear(canvas.getByTestId('cps_field2'));

    // 변경 비밀번호 필드 입력
    await userEvent.type(canvas.getByTestId('ps_field'), '기존 비밀번호 입력', {
      delay: 30,
    });
    await userEvent.type(canvas.getByTestId('cps_field'), '변경 비밀번호 입력2', {
      delay: 30,
    });
    await userEvent.type(canvas.getByTestId('cps_field2'), '변경 비밀번호 입력', {
      delay: 30,
    });
    // 저장 버튼 실행
    await userEvent.click(save_button);
    // case2 변경하는 비밀번호 오입력 체크
    const dialogDom2 = document.querySelector("[role='presentation']") as HTMLElement;
    const dialogCanvas2 = within(dialogDom2);
    const alert_msg2 = dialogCanvas2.getByTestId('alert_msg');

    await expect(alert_msg2.textContent).toBe(PASSWORD_MSG['NEW_PASSWORD_CHECK'].content);

    await userEvent.click(alert_close);

    // 정상 처리
    await userEvent.clear(canvas.getByTestId('ps_field'));
    await userEvent.clear(canvas.getByTestId('cps_field'));
    await userEvent.clear(canvas.getByTestId('cps_field2'));

    await userEvent.type(canvas.getByTestId('ps_field'), '기존 비밀번호 입력', {
      delay: 30,
    });
    await userEvent.type(canvas.getByTestId('cps_field'), '변경 비밀번호 입력', {
      delay: 30,
    });
    await userEvent.type(canvas.getByTestId('cps_field2'), '변경 비밀번호 입력', {
      delay: 30,
    });
    // 저장 버튼 실행
    await userEvent.click(save_button);

    // 비밀번호 변경 정상 처리
    const dialogDom3 = document.querySelector("[role='presentation']") as HTMLElement;
    const dialogCanvas3 = within(dialogDom3);
    const alert_msg3 = dialogCanvas3.getByTestId('alert_msg');

    console.log(alert_msg3.textContent, PASSWORD_MSG['PASSWORD_SAVE'].content);
    await expect(alert_msg3.textContent).toBe(PASSWORD_MSG['PASSWORD_SAVE'].content);
    // await expect(
    //   dialogCanvas3.getByText(PASSWORD_MSG['PASSWORD_SAVE'].content)
    // ).toBeInTheDocument();
    await userEvent.click(alert_close);
  };

  return story;
}
