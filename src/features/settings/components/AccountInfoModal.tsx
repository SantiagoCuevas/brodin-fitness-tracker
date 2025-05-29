import { Text } from '@mantine/core';
import { IconEdit } from '@tabler/icons-react';
import { FC } from 'react';
import { Button } from '@mantine/core';

export const AccountInfoModal = () => {
  return (
    <div className="flex flex-col">
      <AccountInfoDisplay title="Name" value="Alexis Justin Cuevas" />
      <AccountInfoDisplay title="Display Name" value="Kinglexi" />
      <AccountInfoDisplay title="Date Of Birth" value="12/18/2003" />
      <AccountInfoDisplay title="Height" value="5'6'" />
      <Button variant="filled" size="sm" radius="xl" mt="25px">
        <IconEdit />
        Edit
      </Button>
    </div>
  );
};

interface AccountInfoDisplayProps {
  title: string;
  value: string;
}

const AccountInfoDisplay: FC<AccountInfoDisplayProps> = (props) => {
  const { title, value } = props;
  return (
    <div className="flex justify-between items-center">
      <Text size="md">{title}</Text>
      <Text size="md">{value}</Text>
    </div>
  );
};
