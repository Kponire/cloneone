import { useState } from 'react';
import { Box, Button, Group, TextInput, NativeSelect, Divider } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import classes from './form.module.css';

const EditInfo = ({ info, onSave, onCancel }) => {
  const [formData, setFormData] = useState(info);

  const handleChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  return (
    <Box className={classes.container}>
      <Box className={classes.inputContainer}>
        <TextInput
          label="Company no:"
          value={'12325123'}
          onChange={(e) => handleChange('companyNumber', e.target.value)}
          fullWidth
          pb='xs'
          classNames={{
            label: classes.inputLabel,
            input: classes.inputElement
          }}
        />
        <TextInput
          label="Name:"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          fullWidth
          pb='xs'
          classNames={{
            label: classes.inputLabel,
            input: classes.inputElement
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
          classNames={{
            label: classes.inputLabel,
            input: classes.inputElement
          }}
        />
        <TextInput
          label="Email:"
          value={'Adeyemi@acme.com'}
          onChange={(e) => handleChange('email', e.target.value)}
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

export default EditInfo;
