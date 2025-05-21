import { Group, Loader, Stack, Text, Title } from "@mantine/core";
import type { FC } from "react";

interface BasicInfoData {
  id: string;
  createdAt: string;
  userId: string;
  name: string;
  displayName: string;
  dob: string;
  heightFeet: number;
  heightInches: number;
}

interface BasicInfoResult {
  data?: BasicInfoData;
  loading: boolean;
  error: any;
}

const useBasicInfo = (): BasicInfoResult => {
  return {
    loading: true,
    error: null,
  };
};

export const BasicInfo: FC = () => {
  const { loading } = useBasicInfo();

  if (loading) {
    return <Loader />;
  }

  return (
    <Stack>
      <InfoItem title="Name" value="Alexis" />
      <InfoItem title="Display Name" value="@lexi" />
      <InfoItem title="Age" value="21" />
      <InfoItem title="Height" value={`5'7"`} />
    </Stack>
  );
};

interface InfoItemProps {
  title: string;
  value: string;
}

const InfoItem: FC<InfoItemProps> = (props) => {
  const { title, value } = props;

  return (
    <Group align="center" justify="space-between" maw={350} px={10} py={5}>
      <Title order={3}>{title}</Title>
      <Text>{value}</Text>
    </Group>
  );
};
