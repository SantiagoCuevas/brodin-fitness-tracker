import { useEffect, useState } from "react";
import { supabaseClient } from "../supabaseClient";
import type { Session } from "@supabase/supabase-js";

export const useAuthSession = () => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const getSession = async () => {
      const res = await supabaseClient.auth.getSession();
      setSession(res.data.session);
    };

    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
    });

    getSession();

    return subscription.unsubscribe;
  }, []);

  return session;
};
