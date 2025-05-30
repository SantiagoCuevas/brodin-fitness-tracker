import {
  Modal,
  Stack,
  Autocomplete,
  Center,
  Loader,
  Image,
} from '@mantine/core';
import { FC } from 'react';
import { useSnapshotsWithPics } from '../hooks/useSnapshotsWithPics';

interface ProgressPicModalProps {
  opened: boolean;
  close: () => void;
}

export const ProgressPicModal: FC<ProgressPicModalProps> = (props) => {
  const { opened, close } = props;
  const { snapshots, isLoading } = useSnapshotsWithPics();

  return (
    <Modal opened={opened} onClose={close} title="Progress Pictures" fullScreen>
      {isLoading && (
        <Center>
          <Loader />
        </Center>
      )}
      {!isLoading && (
        <Stack gap="md">
          <Autocomplete label="Search by date" placeholder="04/08/2024" />
          {snapshots?.length
            ? snapshots.map((s) =>
                s.image_url.map((src) => <Image src={src} />)
              )
            : null}
        </Stack>
      )}
    </Modal>
  );
};
