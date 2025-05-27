import { Title } from '@mantine/core';
import { FC, PropsWithChildren } from 'react';

interface MainPageProps {
  title: string;
}

export const MainPage: FC<MainPageProps & PropsWithChildren> = (props) => {
  const { title, children } = props;
  return (
    <div className="flex flex-col p-[16px] pb-[76px]">
      <Title order={1}>{title}</Title>
      {children}
    </div>
  );
};
