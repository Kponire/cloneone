import { useState } from 'react';
import { Box, Button, Group, TextInput } from '@mantine/core';
import classes from './form.module.css';

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
    <Box className={classes.container}>
      <Box className={classes.inputContainer}>
      <TextInput
        label="Country"
        value={formData.country}
        onChange={(e) => handleChange('country', e.target.value)}
        fullWidth
        pb='xs'
        classNames={{
          label: classes.inputLabel,
          input: classes.inputElement
        }}
      />
      <TextInput
        label="City"
        value={formData.city}
        onChange={(e) => handleChange('city', e.target.value)}
        fullWidth
        pb='xs'
        classNames={{
          label: classes.inputLabel,
          input: classes.inputElement
        }}
      />
      <TextInput
        label="Street"
        value={formData.street}
        onChange={(e) => handleChange('street', e.target.value)}
        fullWidth
        pb='xs'
        classNames={{
          label: classes.inputLabel,
          input: classes.inputElement
        }}
      />
      <TextInput
        label="Postcode"
        value={formData.postcode}
        onChange={(e) => handleChange('postcode', e.target.value)}
        fullWidth
        pb='xs'
        classNames={{
          label: classes.inputLabel,
          input: classes.inputElement
        }}
      />
      <TextInput
        label="Phone"
        value={formData.phone}
        onChange={(e) => handleChange('phone', e.target.value)}
        fullWidth
        pb='xs'
        classNames={{
          label: classes.inputLabel,
          input: classes.inputElement
        }}
      />
      </Box>
      <Group className={classes.actionsContainer}> 
        <Button onClick={onCancel} className={classes.cancelButton}>Cancel</Button>
        <Button onClick={() => onSave(formData)} className={classes.saveButton} variant='lights'>Save</Button>
      </Group>
    </Box>
  );
};

export default EditShippingAddress;
