import {
  Accordion,
  Button,
  Divider,
  FileButton,
  Group,
  Text,
} from '@mantine/core';
import { useState } from 'react';

export const ProgressPicAccordion = () => {
  const [files, setFile] = useState<File[]>([]);

  return (
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
  );
};
