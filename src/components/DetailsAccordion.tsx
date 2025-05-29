import { Accordion, Divider, NumberInput, Text, Textarea } from '@mantine/core';

export const DetailsAccordion = () => {
  return (
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
  );
};
