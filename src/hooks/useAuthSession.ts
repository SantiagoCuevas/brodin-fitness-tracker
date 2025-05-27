import { useEffect, useState } from 'react';
import { supabaseClient } from '../app/supabaseClient';
import type { Session } from '@supabase/supabase-js';

export const useAuthSession = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const getSession = async () => {
      try {
        const res = await supabaseClient.auth.getSession();
        setSession(res.data.session);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
    });

    getSession();

    return subscription.unsubscribe;
  }, []);

  return {
    session,
    loading,
    error,
  };
};
