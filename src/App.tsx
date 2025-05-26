import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import "@mantine/core/styles.css";
import { Home } from "./pages/Home";
import { Info } from "./pages/Info";
import { Settings } from "./pages/Settings";
import { Layout } from "./layouts/Layout";
import { useAuthSession } from "./hooks/useAuthSession";
import { Auth } from "@supabase/auth-ui-react";
import { supabaseClient } from "./supabaseClient";
import { ThemeSupa } from "@supabase/auth-ui-shared";

function App() {
  const session = useAuthSession();

  if (!session) {
    return (
      <Auth supabaseClient={supabaseClient} appearance={{ theme: ThemeSupa }} />
    );
  }

  return (
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<Info />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
