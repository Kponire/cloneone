import { useState } from 'react';
import { Box, Button, Group, TextInput } from '@mantine/core';

const EditSubscriptions = ({ subscriptions, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: 'Acme',
    status: 'pending'
  });

  const handleChange = (index, field, value) => {
    const updatedSubscriptions = [...formData];
    updatedSubscriptions[index][field] = value;
    setFormData(updatedSubscriptions);
  };

  return (
    <Box style={{ display: 'flex', flexDirection: 'column', height: '88vh' }}>
      <Box style={{ flexGrow: 1, padding: '0px 30px' }}>
      <TextInput
        label={`Subscription ${1} Name`}
        value={formData.name}
        onChange={(e) => handleChange(index, 'name', e.target.value)}
        fullWidth
          pb='xs'
          styles={{
            label: {
              color: 'white'
            },
            input: {
              backgroundColor: '#0E3465',
              color: 'white'
            },
          }}
      />
      <TextInput
        label={`Subscription ${1} Status`}
        value={formData.status}
        onChange={(e) => handleChange(index, 'status', e.target.value)}
        fullWidth
        pb='xs'
        styles={{
          label: {
            color: 'white'
          },
          input: {
            backgroundColor: '#0E3465',
            color: 'white'
          },
        }}
        />
      </Box>
      <Group justify="flex-end" mt="md" style={{ borderTop: '1px solid #C8CCCF', padding: '10px 30px' }}> 
        <Button onClick={onCancel} style={{ padding: '0px 40px', backgroundColor: 'transparent'}}>Cancel</Button>
        <Button onClick={() => onSave(formData)} style={{ padding: '0px 40px', borderRadius: '0px' }} variant='lights'>Save</Button>
      </Group>
    </Box>
  );
};

export default EditSubscriptions;
