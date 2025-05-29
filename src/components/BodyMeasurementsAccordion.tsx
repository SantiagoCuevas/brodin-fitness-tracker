import { Accordion, Divider, NumberInput, Text } from '@mantine/core';

export const BodyMeasurementsAccordion = () => {
  return (
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
  );
};
