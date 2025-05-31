import { Card, Group } from '@mantine/core';
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
        <Card radius={33} withBorder>
          <Group justify="space-between">
            <NavIcon to="/" Icon={IconBarbell} label="Train" />
            <NavIcon to="/progress" Icon={IconChartLine} label="Progress" />
            <NavIcon
              to="/physique-tracking"
              Icon={IconClipboardList}
              label="Physique Tracking"
            />
            <NavIcon to="/settings" Icon={IconSettings} label="Settings" />
          </Group>
        </Card>
      </div>
    </>
  );
};
