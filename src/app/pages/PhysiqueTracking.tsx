import { Button, Modal, Title } from '@mantine/core';
import { MainPage } from '../../components/MainPage';
import { useDisclosure } from '@mantine/hooks';

export const PhysiqueTracking = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <MainPage title="Physique Tracking">
      <Modal
        opened={opened}
        onClose={close}
        title={'Add Snapshot'}
        centered
      ></Modal>
      <Button onClick={open}>Add Snapshot</Button>
      <Title order={2}>Snapshots</Title>
    </MainPage>
  );
};
