import { MantineProvider } from "@mantine/core";

import "./index.css";
import "@mantine/core/styles.css";
import { useAuthSession } from "../hooks/useAuthSession";
import { Auth } from "@supabase/auth-ui-react";
import { supabaseClient } from "./supabaseClient";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Router } from "./Router";

function App() {
  const session = useAuthSession();

  if (!session) {
    return (
      <Auth supabaseClient={supabaseClient} appearance={{ theme: ThemeSupa }} />
    );
  }

  return (
    <MantineProvider>
      <Router />
    </MantineProvider>
  );
}

export default App;
