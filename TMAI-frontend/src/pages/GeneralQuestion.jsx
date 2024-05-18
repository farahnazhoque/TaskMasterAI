// GeneralQuestion.jsx
import React from 'react';
import { Input, Textarea, Text, Box } from '@chakra-ui/react';
import CardTemplateQuestions from './CardTemplateQuestions';

function GeneralQuestion() {
  const fields = [
    { label: 'Project Name', type: 'input', placeholder: 'What is the name of your project?' },
    { label: 'Project Type', type: 'input', placeholder: 'Please select what kind of project' },
    { label: 'Please briefly describe the project', type: 'textarea', placeholder: 'Enter Here...' },
  ];

  const renderedFields = fields.map((field, index) => (
    <Box key={index}>
      <Text color="white" mb="2">{field.label}</Text>
      {field.type === 'input' && <Input placeholder={field.placeholder} borderRadius="md" />}
      {field.type === 'textarea' && <Textarea placeholder={field.placeholder} borderRadius="md" />}
    </Box>
  ));

  return (
    <CardTemplateQuestions
      title="General Questions"
      fields={renderedFields}
      buttonText="Confirm"
    />
  );
}

export default GeneralQuestion;
