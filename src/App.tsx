import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import "@mantine/core/styles.css";
import { Home } from "./pages/Home";
import { Info } from "./pages/Info";
import { Settings } from "./pages/Settings";

function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
