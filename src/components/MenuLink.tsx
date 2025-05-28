import { Title } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import { FC } from 'react';

interface MenuLinkProps {
  title: string;
  onClick: () => void;
}

export const MenuLink: FC<MenuLinkProps> = (props) => {
  const { title, onClick } = props;

  return (
    <div
      className="flex items-center justify-between cursor-pointer "
      onClick={onClick}
    >
      <Title order={2}>{title}</Title>
      <IconChevronRight />
    </div>
  );
};
