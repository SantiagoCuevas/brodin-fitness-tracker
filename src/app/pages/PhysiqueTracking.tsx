import {
  Accordion,
  Button,
  Divider,
  FileButton,
  Group,
  Modal,
  NumberInput,
  Text,
  Textarea,
  Title,
} from '@mantine/core';
import { MainPage } from '../../components/MainPage';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { PhysiqueSnapshotForm } from '../../features/settings/types/PhysiqueSnapshotForm';
import { supabaseClient } from '../supabaseClient';
import { useBasicInfo } from '../../features/settings/hooks/useBasicInfo';
import { notifications } from '@mantine/notifications';

export const PhysiqueTracking = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [files, setFile] = useState<File[]>([]);
  const { handleSubmit, control } = useForm<PhysiqueSnapshotForm>();
  const { basicInfo } = useBasicInfo();

  const uploadImageGetUrls = async (files: File[], userId: string) => {
    const uploadedUrls: string[] = [];

    for (const file of files) {
      const filePath = `${userId}/${file.name}`;
      const { error } = await supabaseClient.storage
        .from('progress-pics')
        .upload(filePath, file);

      if (error) {
        console.error('Upload error:', error.message);
        throw error;
      }

      const { data: urlData } = supabaseClient.storage
        .from('progress-pics')
        .getPublicUrl(filePath);

      uploadedUrls.push(urlData.publicUrl);
    }

    return uploadedUrls;
  };

  const onSubmit = handleSubmit(async (data) => {
    if (!basicInfo?.user_id) {
      notifications.show({
        title: 'Error',
        message: 'User info is missing',
      });
      return;
    }

    try {
      const imageUrls = await uploadImageGetUrls(files, basicInfo.user_id);

      const { error } = await supabaseClient.from('physique_snapshots').insert([
        {
          user_id: basicInfo.user_id,
          image_url: imageUrls, // assuming this column is of type text[]
          note: data.notes,
          weight_lbs: data.weight,
          body_fat_percent: data.bodyFat,
          chest_circumference_cm: data.chest,
          waist_circumference_cm: data.waist,
          hip_circumference_cm: data.hip,
          bicep_left_circumference_cm: data.leftBicep,
          bicep_right_circumference_cm: data.rightBicep,
          thigh_left_circumference_cm: data.leftThigh,
          thigh_right_circumference_cm: data.rightThigh,
          calf_left_circumference_cm: data.leftCalf,
          calf_right_circumference_cm: data.rightCalf,
          neck_circumference_cm: data.neck,
        },
      ]);

      if (error) throw error;

      notifications.show({
        title: 'Snapshot successfully saved',
        message: 'Snapshot saved',
      });
      close();
    } catch (error) {
      console.error('Error:', error);
      notifications.show({
        title: 'ERROR',
        message: 'Please try again',
      });
    }
  });

  return (
    <MainPage title="Physique Tracking">
      <Modal opened={opened} onClose={close} title={'Add Snapshot'} centered>
        <form onSubmit={onSubmit}>
          <Accordion>
            <Accordion.Item key={'Details'} value={'Details'}>
              <Accordion.Control>{'Physique Details'}</Accordion.Control>
              <Accordion.Panel>
                <Divider size={2} my={'xs'} />

                <Text>Notes</Text>
                <Controller
                  name="notes"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Textarea {...field} autosize minRows={4} maxRows={10} />
                  )}
                />

                <Text>Weight (kg)</Text>
                <Controller
                  name="weight"
                  control={control}
                  defaultValue={0}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <NumberInput
                      min={0}
                      {...field}
                      onChange={(val) => field.onChange(val ?? 0)}
                    />
                  )}
                />

                <Text>Body Fat Percentage</Text>
                <Controller
                  name="bodyFat"
                  control={control}
                  defaultValue={0}
                  render={({ field }) => (
                    <NumberInput
                      min={0}
                      max={100}
                      {...field}
                      onChange={(val) => field.onChange(val ?? 0)}
                    />
                  )}
                />
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item key={'ProgressPic'} value={'ProgressPic'}>
              <Accordion.Control>{'Progress Picture(s)'}</Accordion.Control>
              <Accordion.Panel>
                <Divider size={2} my={'xs'} />
                <Group justify="center">
                  <FileButton onChange={setFile} accept="image/*" multiple>
                    {(props) => <Button {...props}>Upload Picture(s)</Button>}
                  </FileButton>
                </Group>
                {files.length > 0 && (
                  <Text size="sm" mt="sm">
                    Selected Photos:
                  </Text>
                )}
                <ul>
                  {files.map((file, index) => (
                    <li key={index}>{file.name}</li>
                  ))}
                </ul>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item key={'Measurements'} value={'Body Measurements'}>
              <Accordion.Control>{'Body Measurements'}</Accordion.Control>
              <Accordion.Panel>
                <Divider size={2} my={'xs'} />

                <Text>Chest Circumference (cm)</Text>
                <Controller
                  name="chest"
                  control={control}
                  defaultValue={0}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <NumberInput
                      min={0}
                      {...field}
                      onChange={(val) => field.onChange(val ?? 0)}
                    />
                  )}
                />
                <Text>Waist Circumference (cm)</Text>
                <Controller
                  name="waist"
                  control={control}
                  defaultValue={0}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <NumberInput
                      min={0}
                      {...field}
                      onChange={(val) => field.onChange(val ?? 0)}
                    />
                  )}
                />

                <Text>Hip Circumference (cm)</Text>
                <Controller
                  name="hip"
                  control={control}
                  defaultValue={0}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <NumberInput
                      min={0}
                      {...field}
                      onChange={(val) => field.onChange(val ?? 0)}
                    />
                  )}
                />

                <Text>Left Bicep Circumference (cm)</Text>
                <Controller
                  name="leftBicep"
                  control={control}
                  defaultValue={0}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <NumberInput
                      min={0}
                      {...field}
                      onChange={(val) => field.onChange(val ?? 0)}
                    />
                  )}
                />

                <Text>Right Bicep Circumference (cm)</Text>
                <Controller
                  name="rightBicep"
                  control={control}
                  defaultValue={0}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <NumberInput
                      min={0}
                      {...field}
                      onChange={(val) => field.onChange(val ?? 0)}
                    />
                  )}
                />
                <Text>Left Thigh Circumference (cm)</Text>
                <Controller
                  name="leftThigh"
                  control={control}
                  defaultValue={0}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <NumberInput
                      min={0}
                      {...field}
                      onChange={(val) => field.onChange(val ?? 0)}
                    />
                  )}
                />

                <Text>Right Thigh Circumference (cm)</Text>
                <Controller
                  name="rightThigh"
                  control={control}
                  defaultValue={0}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <NumberInput
                      min={0}
                      {...field}
                      onChange={(val) => field.onChange(val ?? 0)}
                    />
                  )}
                />

                <Text>Left Calf Circumference (cm)</Text>
                <Controller
                  name="leftCalf"
                  control={control}
                  defaultValue={0}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <NumberInput
                      min={0}
                      {...field}
                      onChange={(val) => field.onChange(val ?? 0)}
                    />
                  )}
                />

                <Text>Right Calf Circumference (cm)</Text>
                <Controller
                  name="rightCalf"
                  control={control}
                  defaultValue={0}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <NumberInput
                      min={0}
                      {...field}
                      onChange={(val) => field.onChange(val ?? 0)}
                    />
                  )}
                />

                <Text>Neck Circumference (cm)</Text>
                <Controller
                  name="neck"
                  control={control}
                  defaultValue={0}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <NumberInput
                      min={0}
                      {...field}
                      onChange={(val) => field.onChange(val ?? 0)}
                    />
                  )}
                />
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
          <Button onClick={close} type="submit">
            Add Snapshot
          </Button>
        </form>
      </Modal>
      <Button onClick={open}>Add Snapshot</Button>
      <Title order={2}>Snapshots</Title>
    </MainPage>
  );
};
