import { ActionIcon } from '@mantine/core';
import { Icon, IconProps } from '@tabler/icons-react';
import { FC, ForwardRefExoticComponent } from 'react';
import { NavLink, useLocation } from 'react-router';

interface NavIconProps {
  to: string;
  Icon: ForwardRefExoticComponent<IconProps & React.RefAttributes<Icon>>;
  label: string;
}

export const NavIcon: FC<NavIconProps> = (props) => {
  const { to, Icon, label } = props;
  const location = useLocation();
  const path = location.pathname;
  const isActive = path === to;
  const variant = isActive ? 'filled' : 'default';

  return (
    <NavLink to={to}>
      <ActionIcon variant={variant} size="xl" radius="xl" aria-label={label}>
        <Icon style={{ width: '70%', height: '70%' }} stroke={1.5} />
      </ActionIcon>
    </NavLink>
  );
};
