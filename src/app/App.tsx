import './index.css';
import '@mantine/core/styles.css';
import { useAuthSession } from '../hooks/useAuthSession';
import { Auth } from '@supabase/auth-ui-react';
import { supabaseClient } from './supabaseClient';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { Router } from './Router';
import { Providers } from './Providers';
import { Center, Loader, Title } from '@mantine/core';

function App() {
  const { session, loading, error } = useAuthSession();

  if (loading) {
    return (
      <Providers>
        <Center h={'100vh'}>
          <Loader />
        </Center>
      </Providers>
    );
  }

  if (error) {
    return (
      <Providers>
        <Title>Something went wrong... Please try again later.</Title>
      </Providers>
    );
  }

  if (!session) {
    return (
      <Auth supabaseClient={supabaseClient} appearance={{ theme: ThemeSupa }} />
    );
  }

  return (
    <Providers>
      <Router />
    </Providers>
  );
}

export default App;
