import React, { useState } from 'react';
import { Input, Stack, Box, Textarea, FormControl, FormLabel, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import CardTemplateQuestions from './CardTemplateQuestions';
import '../components/GeneralQuestion.css';
import { useNavigate } from 'react-router-dom';

function GeneralQuestion() {
  const [projectType, setProjectType] = useState('Please select what kind of project');
  const navigate = useNavigate();

  const fields = [
    { label: 'Project Name', type: 'input', placeholder: 'What is the name of your project?' },
    { label: 'Project Type', type: 'menu', placeholder: projectType },
    { label: 'Please briefly describe the project', type: 'textarea', placeholder: 'Enter Here...' },
  ];

  const handleMenuItemClick = (value) => {
    setProjectType(value);
  };

  const handleConfirmClick = () => {
    if (projectType === 'Software Project') navigate('/software-project-details');
    else if (projectType === 'Event Planning') navigate('/event-planning-details');
    else if (projectType === 'Marketing Campaign') navigate('/marketing-campaign-details');
  };

  const renderedFields = fields.map((field, index) => (
    <FormControl className='body' key={index} mb={5}>
      <FormLabel className='label'>{field.label}</FormLabel>
      {field.type === 'input' ? (
        <Input className='input' placeholder={field.placeholder} size={index === fields.length - 1 ? 'lg' : 'md'} />
      ) : field.type === 'textarea' ? (
        <Textarea className='text-area' placeholder={field.placeholder} size='lg' />
      ) : (
        <Menu>
          <MenuButton className='menu' as={Button} rightIcon={<ChevronDownIcon />}>
            {projectType}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => handleMenuItemClick('Software Project')}>Software Project</MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('Event Planning')}>Event Planning</MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('Marketing Campaign')}>Marketing Campaign</MenuItem>
          </MenuList>
        </Menu>
      )}
    </FormControl>
  ));

  return (
    <CardTemplateQuestions
      title="General Questions"
      fields={<Stack spacing={6}>{renderedFields}</Stack>}
      buttonText="Confirm"
      onButtonClick={handleConfirmClick}
    />
  );
}

export default GeneralQuestion;
