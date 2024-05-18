import React from 'react';
import { Box, VStack, Heading, Divider, Button } from '@chakra-ui/react';

function CardTemplateQuestions({ title, fields, buttonText }) {
  return (
    <Box display="flex" width="600px" p="2" pt="0" boxShadow="xl" justifyContent="center" alignItems="center" height="70vh" bg="#367793" borderRadius="20px">
        <VStack spacing="4" align="stretch">
          <Heading fontFamily="Playfair Display" fontSize="50px" color="#FFF0BA" mt="0" mb="6">
            {title}
          </Heading>
          {fields}
          <Divider />
          <Button mt="4" width="full" bg="yellow.400" color="black" borderRadius="md" _hover={{ bg: "yellow.500" }}>
            {buttonText}
          </Button>
        </VStack>
    </Box>
  );
}

export default CardTemplateQuestions;
