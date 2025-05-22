import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import "@mantine/core/styles.css";
import { Home } from "./pages/Home";
import { Info } from "./pages/Info";
import { Settings } from "./pages/Settings";
import { Layout } from "./layouts/Layout";

function App() {
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
