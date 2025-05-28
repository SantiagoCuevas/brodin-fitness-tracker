import { Button } from '@mantine/core';
import { useCallback } from 'react';
import { supabaseClient } from '../supabaseClient';
import { useNavigate } from 'react-router';
import { MainPage } from '../../components/MainPage';
import { DarkModeSwitch } from '../../features/settings/components/DarkModeSwitch';
import { MenuLink } from '../../components/MenuLink';

export const Settings = () => {
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
      <MenuLink
        title="Account Info"
        onClick={() => {
          console.log('Onclick');
        }}
      />

      <Button size="sm" onClick={onSignout}>
        Log Out
      </Button>
    </MainPage>
  );
};
