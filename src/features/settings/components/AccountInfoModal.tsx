import {
  Center,
  Loader,
  LoadingOverlay,
  NumberInput,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { IconEdit } from '@tabler/icons-react';
import { FC, useState } from 'react';
import { Button } from '@mantine/core';
import { useBasicInfo } from '../hooks/useBasicInfo';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { BasicInfoUpdate } from '../types/BasicInfo';
import { useUpdateBasicInfo } from '../hooks/useUpdateBasicInfo';
import DatePicker from 'react-datepicker';
import '@mantine/notifications/styles.css';
import { notifications } from '@mantine/notifications';

export const AccountInfoModal = () => {
  const { basicInfo, isLoading } = useBasicInfo();
  const [editMode, setEditMode] = useState(false);

  if (isLoading || !basicInfo) {
    return <LoadingOverlay />;
  }

  if (editMode) {
    return (
      <AccountInfoEditor
        close={() => setEditMode(false)}
        defaultValues={{
          name: basicInfo.name || undefined,
          display_name: basicInfo.display_name
            ? '@' + basicInfo.display_name
            : undefined,
          dob: basicInfo.dob || undefined,
          height_feet: basicInfo.height_feet || undefined,
          height_inches: basicInfo.height_inches || undefined,
        }}
      />
    );
  }
  return (
    <div className="flex flex-col">
      <AccountInfoDisplay title="Name" value={basicInfo.name} />
      <AccountInfoDisplay title="Display Name" value={basicInfo.display_name} />
      <AccountInfoDisplay
        title="Date Of Birth"
        value={
          basicInfo.dob
            ? new Date(basicInfo.dob).toLocaleDateString()
            : undefined
        }
      />
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

interface AccountInfoEditorProps {
  defaultValues: BasicInfoUpdate;
  close: () => void;
}

const AccountInfoEditor: FC<AccountInfoEditorProps> = (props) => {
  const { defaultValues, close } = props;
  const { register, handleSubmit, control } = useForm<BasicInfoUpdate>({
    defaultValues,
  });
  const { updateBasicInfo } = useUpdateBasicInfo();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const onSubmit: SubmitHandler<BasicInfoUpdate> = async (data) => {
    try {
      setLoading(true);
      await updateBasicInfo(data);
      notifications.show({
        title: 'Account Info Updated',
        message: 'Update successful.',
      });
      close();
    } catch (err) {
      setError(err);
      notifications.show({
        title: 'Account Info Error',
        message: 'Something went wrong. Please try again later.',
        color: 'red',
      });
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Center>
        <Loader />
      </Center>
    );
  }

  if (error) {
    return <Title>Something went wrong, please try again later.</Title>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        <TextInput label="Name" placeholder="John Doe" {...register('name')} />
        <TextInput
          label="Display Name"
          placeholder="John Doe"
          {...register('display_name')}
        />

        <Controller
          name="height_feet"
          control={control}
          render={({ field }) => (
            <NumberInput
              {...field}
              label="Height (ft)"
              onChange={(value) => field.onChange(value)}
            />
          )}
        />

        <Controller
          name="height_inches"
          control={control}
          render={({ field }) => (
            <NumberInput
              {...field}
              label="Height (in)"
              onChange={(value) => field.onChange(value)}
            />
          )}
        />

        <Controller
          name="dob"
          control={control}
          render={({ field }) => (
            <Stack>
              <Text size="sm">Date Of Birth</Text>
              <DatePicker
                selected={field.value ? new Date(field.value) : new Date()}
                onChange={(value) => field.onChange(value)}
              />
            </Stack>
          )}
        />

        <Button type="submit">Submit</Button>
      </Stack>
    </form>
  );
};
