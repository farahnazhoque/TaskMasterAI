import React from 'react';
import { Box, VStack, Heading, Divider, Button } from '@chakra-ui/react';

function CardTemplateQuestions({ title, fields, buttonText, onButtonClick }) {
  return (
    <Box display="flex" width="600px" p="2" pt="0" boxShadow="xl" justifyContent="center" alignItems="center" height="70vh" bg="#367793" borderRadius="20px">
      <VStack spacing="4" align="stretch">
        <Heading fontFamily="Playfair Display" fontSize="50px" color="#FFF0BA" mt="0" mb="6">
          {title}
        </Heading>
        {fields}
        <Divider />
        <Button
          mt="4"
          width="50%"
          bg="#FFF0BA"
          color="black"
          borderRadius="20px"
          _hover={{ bg: "#E6D08A" }}
          alignSelf="center" // aligns the button to the center within the VStack
          height="55px"
          fontSize="20px"
          color="#367793"
          fontWeight={600}
          onClick={onButtonClick} // added onClick event
        >
          {buttonText}
        </Button>
      </VStack>
    </Box>
  );
}

export default CardTemplateQuestions;
