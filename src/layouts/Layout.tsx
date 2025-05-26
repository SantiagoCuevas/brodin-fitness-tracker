import { ActionIcon, Button, Group } from '@mantine/core';
import type { FC } from 'react';
import { NavLink, Outlet } from 'react-router';
import {
  IconAdjustments,
  IconBarbell,
  IconChartLine,
  IconClipboardList,
  IconSettings,
} from '@tabler/icons-react';
import { NavIcon } from '../components/NavIcon';

export const Layout: FC = () => {
  return (
    <>
      <Outlet />
      <div className="absolute bottom-[20px] w-full">
        <Group justify="center">
          <NavIcon to="/" Icon={IconBarbell} label="Train" />
          <NavIcon to="/analytics" Icon={IconChartLine} label="Analytics" />
          <NavIcon to="/info" Icon={IconClipboardList} label="Info" />
          <NavIcon to="/settings" Icon={IconSettings} label="Settings" />
        </Group>
      </div>
    </>
  );
};
