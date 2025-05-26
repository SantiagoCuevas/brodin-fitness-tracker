import "./index.css";
import "@mantine/core/styles.css";
import { useAuthSession } from "../hooks/useAuthSession";
import { Auth } from "@supabase/auth-ui-react";
import { supabaseClient } from "./supabaseClient";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Router } from "./Router";
import { Providers } from "./Providers";

function App() {
  const session = useAuthSession();

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
