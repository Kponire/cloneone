import { useState } from 'react';
import { Box, Button, Group, TextInput } from '@mantine/core';
import classes from './form.module.css';

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
    <Box className={classes.container}>
      <Box className={classes.inputContainer}>
      <TextInput
        label={`Subscription ${1} Name`}
        value={formData.name}
        onChange={(e) => handleChange(index, 'name', e.target.value)}
        fullWidth
        pb='xs'
        classNames={{
          label: classes.inputLabel,
          input: classes.inputElement
        }}
      />
      <TextInput
        label={`Subscription ${1} Status`}
        value={formData.status}
        onChange={(e) => handleChange(index, 'status', e.target.value)}
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

export default EditSubscriptions;
