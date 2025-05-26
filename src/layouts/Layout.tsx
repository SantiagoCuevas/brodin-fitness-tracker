import { Button, Group } from '@mantine/core';
import type { FC } from 'react';
import { NavLink, Outlet } from 'react-router';

export const Layout: FC = () => {
  return (
    <>
      <Outlet />
      <div className="absolute bottom-0 w-full p-2">
        <Group justify="center" grow>
          <Button component={NavLink} to="/" variant="outline">
            Home
          </Button>
          <Button component={NavLink} to="/info" variant="outline">
            Info
          </Button>
          <Button component={NavLink} to="/settings" variant="outline">
            Settings
          </Button>
        </Group>
      </div>
    </>
  );
};
