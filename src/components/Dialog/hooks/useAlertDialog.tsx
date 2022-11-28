import { useCallback, useState } from 'react';

import Button from '@components/Button';
import Dialog from '../Dialog';

export type useAlertDialogProps = {
  type?: string;
  addTitle?: string;
  addContent?: string;
  onCancel?: () => void;
  size?: 'sm' | 'md' | 'lg' | 'xl';
};

const useAlertDialog = (props: useAlertDialogProps) => {
  const { type = 'BASE', addTitle = '', addContent = '', size = 'sm', onCancel } = props;
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const AlertOpen = useCallback((isOpen: boolean) => {
    setIsAlertOpen(isOpen);
  }, []);

  const MSG_KEY = {
    title: addTitle,
    content: addContent,
  };
  const title = MSG_KEY.title;
  const content = MSG_KEY.content;

  const AlertComp = () => {
    return (
      <Dialog
        key={`${type}`}
        size={size}
        open={isAlertOpen}
        onClose={() => {
          onCancel && onCancel();
          setIsAlertOpen(false);
        }}
        title={`${title}`}
        content={`${content}`}
        actions={
          <>
            <Button
              story-id={'dialog_close'}
              onClick={() => {
                onCancel && onCancel();
                setIsAlertOpen(false);
              }}
            >
              닫기
            </Button>
          </>
        }
      />
    );
  };
  return { AlertComp, AlertOpen };
};

export default useAlertDialog;
