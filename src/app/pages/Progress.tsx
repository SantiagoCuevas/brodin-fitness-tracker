import { useDisclosure } from '@mantine/hooks';
import { MainPage } from '../../components/MainPage';
import { ProgressPicModal } from '../../features/progress-pics/components/ProgressPicModal';
import { Button } from '@mantine/core';

export const Progress = () => {
  const [opened, { open, close }] = useDisclosure();
  return (
    <MainPage title="Progress">
      <ProgressPicModal opened={opened} close={close} />
      <Button onClick={open}>View Progress Pics</Button>
    </MainPage>
  );
};
