import { useState } from 'react';
import { Box, Button, Group, TextInput, NativeSelect, Divider } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';

const EditInfo = ({ info, onSave, onCancel }) => {
  const [formData, setFormData] = useState(info);

  const handleChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  return (
    <Box style={{ display: 'flex', flexDirection: 'column', height: '88vh' }}>
      <Box style={{ flexGrow: 1, padding: '0px 30px' }}>
        <TextInput
          label="Company no:"
          value={'12325123'}
          onChange={(e) => handleChange('companyNumber', e.target.value)}
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
          label="Name:"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
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
        <NativeSelect
          label="Main Contact:"
          value={formData.contact}
          onChange={(e) => handleChange('contact', e.target.value)}
          data={['Karim Adeyemi', 'Olu Kayode']}
          rightSection={<IconChevronDown />}
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
          label="Email:"
          value={'Adeyemi@acme.com'}
          onChange={(e) => handleChange('email', e.target.value)}
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

export default EditInfo;
