import { Group, Stack, Text, Title } from "@mantine/core";
import type { FC } from "react";

export const BasicInfo: FC = () => {
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
  return (
    <Group align="center" justify="space-between" maw={350} px={10} py={5}>
      <Title order={3}>{props.title}</Title>
      <Text>{props.value}</Text>
    </Group>
  );
};
