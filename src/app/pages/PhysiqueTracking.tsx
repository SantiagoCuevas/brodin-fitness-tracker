import { Button, Modal, Title } from '@mantine/core';
import { MainPage } from '../../components/MainPage';
import { useDisclosure } from '@mantine/hooks';
import { DetailsAccordion } from '../../components/DetailsAccordion';
import { ProgressPicAccordion } from '../../components/ProgressPicAccordion';
import { BodyMeasurementsAccordion } from '../../components/BodyMeasurementsAccordion';

export const PhysiqueTracking = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <MainPage title="Physique Tracking">
      <Modal opened={opened} onClose={close} title={'Add Snapshot'} centered>
        <DetailsAccordion />
        <ProgressPicAccordion />
        <BodyMeasurementsAccordion />
      </Modal>
      <Button onClick={open}>Add Snapshot</Button>
      <Title order={2}>Snapshots</Title>
    </MainPage>
  );
};
