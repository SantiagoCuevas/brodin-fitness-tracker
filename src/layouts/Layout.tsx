import { Group } from '@mantine/core';
import type { FC } from 'react';
import { Outlet } from 'react-router';
import {
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
      <div className=" fixed bottom-[20px] w-full px-[40px]">
        <Group justify="space-between">
          <NavIcon to="/" Icon={IconBarbell} label="Train" />
          <NavIcon to="/analytics" Icon={IconChartLine} label="Analytics" />
          <NavIcon to="/info" Icon={IconClipboardList} label="Info" />
          <NavIcon to="/settings" Icon={IconSettings} label="Settings" />
        </Group>
      </div>
    </>
  );
};
