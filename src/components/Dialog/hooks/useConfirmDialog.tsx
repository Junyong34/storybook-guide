import { useCallback, useState } from 'react';

import Button from '@components/Button';
import Dialog from '../Dialog';

type confirmKey = 'delete' | 'save' | 'update' | 'create' | 'temp';
export type useConfirmDialogProps = {
  type?: confirmKey;
  dialogKey?: any;
  addTitle?: string;
  addContent?: string;
  onConfirm?: () => void;
  confirmText?: string;
  cancelText?: string;
  onCancel?: () => void;
  size?: 'sm' | 'md' | 'lg' | 'xl';
};

const useConfirmDialog = (props: useConfirmDialogProps) => {
  const {
    type = 'temp',
    dialogKey = 'BASE',
    addTitle = '',
    addContent = '',
    confirmText = '확인',
    cancelText = '닫기',
    size = 'sm',
    onConfirm,
    onCancel,
  } = props;
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const confirmOpen = useCallback((isOpen: boolean) => {
    setIsConfirmOpen(isOpen);
  }, []);

  const ckey = type.toUpperCase() as Uppercase<confirmKey>;
  const MSG_KEY = {
    title: addTitle,
    content: addContent,
  };
  const title = MSG_KEY.title;
  const content = MSG_KEY.content;

  const ConfirmComp = () => {
    return (
      <Dialog
        key={`${type}_${dialogKey}`}
        size={size}
        open={isConfirmOpen}
        onClose={() => {
          onCancel && onCancel();
          setIsConfirmOpen(false);
        }}
        title={`${addTitle} ${title}`}
        content={`${addContent} ${content}`}
        actions={
          <>
            <Button
              onClick={() => {
                onCancel && onCancel();
                setIsConfirmOpen(false);
              }}
            >
              {cancelText}
            </Button>
            <Button
              data-cy={'dialogSaveButton'}
              onClick={() => {
                onConfirm && onConfirm();
                setIsConfirmOpen(false);
              }}
            >
              {confirmText}
            </Button>
          </>
        }
      />
    );
  };
  return { ConfirmComp, confirmOpen };
};

export default useConfirmDialog;
