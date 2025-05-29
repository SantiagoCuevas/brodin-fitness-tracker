import { Button, Modal } from '@mantine/core';
import { useCallback } from 'react';
import { supabaseClient } from '../supabaseClient';
import { useNavigate } from 'react-router';
import { MainPage } from '../../components/MainPage';
import { DarkModeSwitch } from '../../features/settings/components/DarkModeSwitch';
import { MenuLink } from '../../components/MenuLink';
import { useDisclosure } from '@mantine/hooks';
import { AccountInfoModal } from '../../features/settings/components/AccountInfoModal';

export const Settings = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const navigate = useNavigate();
  const onSignout = useCallback(async () => {
    try {
      await supabaseClient.auth.signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  }, [navigate]);

  return (
    <MainPage title="Settings">
      <DarkModeSwitch />
      <MenuLink title="Account Info" onClick={open} />
      <MenuLink title="Work Out" onClick={open} />

      <Button size="sm" onClick={onSignout}>
        Log Out
      </Button>

      <Modal fullScreen opened={opened} onClose={close} title="Account Info">
        <AccountInfoModal />
      </Modal>
    </MainPage>
  );
};
