import { MantineProvider } from "@mantine/core";
import type { PropsWithChildren } from "react";

export const Providers = (props: PropsWithChildren) => {
  const { children } = props;

  return <MantineProvider>{children}</MantineProvider>;
};
