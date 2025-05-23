import { Button, Group } from "@mantine/core";
import type { FC } from "react";
import { NavLink, Outlet } from "react-router";

export const Layout: FC = () => {
  return (
    <>
      <Outlet />
      <Group>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/info">Info</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </Group>
    </>
  );
};
