import { Title } from '@mantine/core';
import { FC } from 'react';

interface MainPageProps {
  title: string;
}

const MainPage: FC<MainPageProps> = (props) => {
  const { title } = props;
  return (
    <div>
      <Title order={1}>{title}</Title>
    </div>
  );
};
