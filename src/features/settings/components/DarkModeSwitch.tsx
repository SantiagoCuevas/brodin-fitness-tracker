import { Switch, useMantineColorScheme } from '@mantine/core';

export const DarkModeSwitch = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const prefersDarkScheme =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark =
    (colorScheme === 'auto' && prefersDarkScheme) || colorScheme === 'dark';

  return (
    <Switch
      checked={isDark}
      label="Dark Mode"
      size="lg"
      onClick={() => setColorScheme(isDark ? 'light' : 'dark')}
    />
  );
};
