import { Modal, Stack, Autocomplete } from '@mantine/core';
import { FC } from 'react';

interface ProgressPicModalProps {
  opened: boolean;
  close: () => void;
}

export const ProgressPicModal: FC<ProgressPicModalProps> = (props) => {
  const { opened, close } = props;

  return (
    <Modal opened={opened} onClose={close} title="Progress Pictures" fullScreen>
      <Stack>
        <Autocomplete label="Search by date" placeholder="04/08/2024" />
      </Stack>
    </Modal>
  );
};
