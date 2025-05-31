import { MantineProvider, Notification } from '@mantine/core';
import type { PropsWithChildren } from 'react';
import { Notifications } from '@mantine/notifications';

export const Providers = (props: PropsWithChildren) => {
  const { children } = props;
  return (
    <MantineProvider defaultColorScheme="auto">
      <Notifications />
      {children}
    </MantineProvider>
  );
};
