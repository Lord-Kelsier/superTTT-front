import { Box, Container } from '@chakra-ui/react';
import React, { useState } from 'react';
import LoginForm from './components/LoginForm';

import ThemeToggleButton from './components/ThemeToggleButton';

function App(): JSX.Element {
  return (
    <Box alignContent="center">
      <Container background="blue.700" mt="35vh" borderRadius="20px" p="15px">
        <LoginForm />
      </Container>
      <ThemeToggleButton pos="fixed" bottom="2" right="2" />
    </Box>
  );
}

export default App;
