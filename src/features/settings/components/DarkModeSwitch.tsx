import { Switch, useMantineColorScheme } from '@mantine/core';

export const DarkModeSwitch = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  return (
    <Switch
      checked={colorScheme === 'dark'}
      label="Dark Mode"
      size="lg"
      onClick={() => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')}
    />
  );
};
