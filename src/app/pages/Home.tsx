import { useDisclosure } from '@mantine/hooks';
import { MainPage } from '../../components/MainPage';
import { ProgressPicModal } from '../../features/progress-pics/components/ProgressPicModal';
import { Button } from '@mantine/core';

export const Home = () => {
  const [opened, { open, close }] = useDisclosure();
  return (
    <MainPage title="Home">
      <ProgressPicModal opened={opened} close={close} />
      <Button onClick={open}>Progress Pics</Button>
    </MainPage>
  );
};
