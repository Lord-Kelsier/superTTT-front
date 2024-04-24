import { useState } from 'react';

import { Box, Container } from '@chakra-ui/react';

import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
// import ThemeToggleButton from './components/ThemeToggleButton';
import loginRegisterContext from './shared/contexts/login-registerContext';

function App(): JSX.Element {
  const [hasAnAcount, setHasAnAcount] = useState(true);
  return (
    <Box alignContent="center">
      <Container background="blue.700" mt="35vh" borderRadius="20px" p="15px">
        <loginRegisterContext.Provider value={setHasAnAcount}>
          {hasAnAcount ? <LoginForm /> : <RegisterForm />}
        </loginRegisterContext.Provider>
      </Container>
      {/* <ThemeToggleButton pos="fixed" bottom="2" right="2" /> */}
    </Box>
  );
}

export default App;
