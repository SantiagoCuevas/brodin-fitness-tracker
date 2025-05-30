import {
  Modal,
  Stack,
  Autocomplete,
  Center,
  Loader,
  Image,
  Title,
} from '@mantine/core';
import { FC } from 'react';
import { useSnapshotsWithPics } from '../hooks/useSnapshotsWithPics';

interface ProgressPicModalProps {
  opened: boolean;
  close: () => void;
}

export const ProgressPicModal: FC<ProgressPicModalProps> = ({
  opened,
  close,
}) => {
  const { snapshots, isLoading } = useSnapshotsWithPics();

  return (
    <Modal opened={opened} onClose={close} title="Progress Pictures" fullScreen>
      {isLoading ? (
        <Center h="100%">
          <Loader />
        </Center>
      ) : (
        <Stack gap="md">
          <Autocomplete label="Search by date" />
          {snapshots?.length ? (
            snapshots.map((s) =>
              s.image_url.map((src, i) => (
                <ProgressPicItem
                  key={`${s.id}-${i}`}
                  src={src}
                  date={formatDateToUSLong(s.created_at)}
                />
              ))
            )
          ) : (
            <Center>No progress pictures available.</Center>
          )}
        </Stack>
      )}
    </Modal>
  );
};

interface ProgressPicItemProps {
  src: string;
  date: string;
}

const ProgressPicItem: FC<ProgressPicItemProps> = ({ src, date }) => (
  <div className="flex flex-col gap-2 max-w-[300px] mx-auto">
    <Image src={src} alt="Progress" radius="md" fit="contain" />
    <Title order={4} ta="center" fw={500}>
      {date}
    </Title>
  </div>
);

export function formatDateToUSLong(dateString: string): string {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    throw new Error('Invalid date string');
  }

  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
