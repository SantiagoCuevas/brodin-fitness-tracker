import { Button } from '@mantine/core';
import { useCallback } from 'react';
import { supabaseClient } from '../supabaseClient';
import { useNavigate } from 'react-router';
import { MainPage } from '../../components/MainPage';

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
      <Button size="sm" onClick={onSignout}>
        Log Out
      </Button>
    </MainPage>
  );
};
