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

export const PhysiqueTracking = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [files, setFile] = useState<File[]>([]);

  return (
    <MainPage title="Physique Tracking">
      <Modal opened={opened} onClose={close} title={'Add Snapshot'} centered>
        <Accordion>
          <Accordion.Item key={'Details'} value={'Details'}>
            <Accordion.Control>{'Physique Details'}</Accordion.Control>
            <Accordion.Panel>
              <Divider size={2} my={'xs'} />
              <div>
                <Text>Notes</Text>
                <Textarea autosize minRows={4} maxRows={10} />
              </div>
              <div>
                <Text>Weight (kg)</Text>
                <NumberInput min={0} />
              </div>
              <div>
                <Text>Body Fat Percentage</Text>
                <NumberInput min={0} max={100} />
              </div>
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
              <div>
                <Text>Chest Circumference (cm)</Text>
                <NumberInput min={0} />
              </div>
              <div>
                <Text>Waist Circumference (cm)</Text>
                <NumberInput min={0} />
              </div>
              <div>
                <Text>Hip Circumference (cm)</Text>
                <NumberInput min={0} />
              </div>
              <div>
                <Text>Left Bicep Circumference (cm)</Text>
                <NumberInput min={0} />
              </div>
              <div>
                <Text>Right Bicep Circumference (cm)</Text>
                <NumberInput min={0} />
              </div>
              <div>
                <Text>Left Thigh Circumference (cm)</Text>
                <NumberInput min={0} />
              </div>
              <div>
                <Text>Right Thigh Circumference (cm)</Text>
                <NumberInput min={0} />
              </div>
              <div>
                <Text>Left Calf Circumference (cm)</Text>
                <NumberInput min={0} />
              </div>
              <div>
                <Text>Right Calf Circumference (cm)</Text>
                <NumberInput min={0} />
              </div>
              <div>
                <Text>Neck Circumference (cm)</Text>
                <NumberInput min={0} />
              </div>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Modal>
      <Button onClick={open}>Add Snapshot</Button>
      <Title order={2}>Snapshots</Title>
    </MainPage>
  );
};
