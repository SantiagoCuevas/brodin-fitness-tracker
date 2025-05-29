import { LoadingOverlay, Text } from '@mantine/core';
import { IconEdit } from '@tabler/icons-react';
import { FC, useState } from 'react';
import { Button } from '@mantine/core';
import { useBasicInfo } from '../hooks/useBasicInfo';

export const AccountInfoModal = () => {
  const { basicInfo, isLoading, error } = useBasicInfo();
  const [editMode, setEditMode] = useState(false);

  if (isLoading || !basicInfo) {
    return <LoadingOverlay />;
  }

  if (editMode) {
    return <AccountInfoEditer />;
  }
  return (
    <div className="flex flex-col">
      <AccountInfoDisplay title="Name" value={basicInfo.name} />
      <AccountInfoDisplay title="Display Name" value={basicInfo.display_name} />
      <AccountInfoDisplay title="Date Of Birth" value={basicInfo.dob} />
      <AccountInfoDisplay
        title="Height"
        value={basicInfo.height_feet + "'" + basicInfo.height_inches + '"'}
      />
      <Button
        variant="filled"
        size="sm"
        radius="xl"
        mt="25px"
        onClick={() => setEditMode(true)}
      >
        <IconEdit />
        Edit
      </Button>
    </div>
  );
};

interface AccountInfoDisplayProps {
  title: string;
  value?: string | null;
}

const AccountInfoDisplay: FC<AccountInfoDisplayProps> = (props) => {
  const { title, value } = props;
  return (
    <div className="flex justify-between items-center">
      <Text size="md">{title}</Text>
      <Text size="md">{value ? value : '-'}</Text>
    </div>
  );
};

const AccountInfoEditer = () => {
  return null;
};
