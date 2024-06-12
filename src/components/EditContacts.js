import { useState } from 'react';
import { Box, Button, Group, TextInput } from '@mantine/core';

const EditContacts = ({ contacts, onSave, onCancel }) => {
  const [formData, setFormData] = useState(contacts);

  const handleChange = (index, field, value) => {
    const updatedContacts = [...formData];
    updatedContacts[index][field] = value;
    setFormData(updatedContacts);
  };

  return (
    <Box>
      {formData.map((contact, index) => (
        <Box key={index}>
          <TextInput
            label={`Contact ${index + 1} Name`}
            value={contact.name}
            onChange={(e) => handleChange(index, 'name', e.target.value)}
          />
          <TextInput
            label={`Contact ${index + 1} Email`}
            value={contact.email}
            onChange={(e) => handleChange(index, 'email', e.target.value)}
          />
        </Box>
      ))}
      <Group justify="flex-end" mt="md">
        <Button onClick={onCancel}>Cancel</Button>
        <Button onClick={() => onSave(formData)}>Save</Button>
      </Group>
    </Box>
  );
};

export default EditContacts;
