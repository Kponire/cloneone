import { useState } from 'react';
import { Box, Button, Group, TextInput } from '@mantine/core';

const EditShippingAddress = ({ address, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    country: 'Nigeria',
    city: 'Lagos',
    street: 'Kingston lane 8',
    postcode: '100001',
    phone: '234-09-461-4000'
  });

  const handleChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  return (
    <Box style={{ display: 'flex', flexDirection: 'column', height: '88vh' }}>
      <Box style={{ flexGrow: 1, padding: '0px 30px' }}>
      <TextInput
        label="Country"
        value={formData.country}
        onChange={(e) => handleChange('country', e.target.value)}
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
        label="City"
        value={formData.city}
        onChange={(e) => handleChange('city', e.target.value)}
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
        label="Street"
        value={formData.street}
        onChange={(e) => handleChange('street', e.target.value)}
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
        label="Postcode"
        value={formData.postcode}
        onChange={(e) => handleChange('postcode', e.target.value)}
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
        label="Phone"
        value={formData.phone}
        onChange={(e) => handleChange('phone', e.target.value)}
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

export default EditShippingAddress;
