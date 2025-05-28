import { Title } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';

export const MenuLink = () => {
  return (
    <div className="flex items-center justify-between">
      <Title order={2}>settings</Title>
      <IconChevronRight />
    </div>
  );
};
