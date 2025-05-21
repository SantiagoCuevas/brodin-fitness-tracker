import { MantineProvider } from "@mantine/core";
import "./index.css";
import "@mantine/core/styles.css";
import { BasicInfo } from "./app/pages/BasicInfo";

function App() {
  return (
    <MantineProvider>
      <BasicInfo />
    </MantineProvider>
  );
}

export default App;
