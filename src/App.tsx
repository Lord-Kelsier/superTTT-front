import { Box, Container } from '@chakra-ui/react';
import { loginRegisterContext as hasAnAcount } from './shared/contexts/login-registerContext';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import { loginRegisterContext } from './shared/contexts/login-registerContext';
import ThemeToggleButton from './components/ThemeToggleButton';
import { useState } from 'react';

function App(): JSX.Element {
  const [hasAnAcount, setHasAnAcount] = useState(true);
  return (
    <Box alignContent="center">
      <Container background="blue.700" mt="35vh" borderRadius="20px" p="15px">
        <loginRegisterContext.Provider value={{ hasAnAcount, setHasAnAcount }}>
          {hasAnAcount ? <LoginForm /> : <RegisterForm />}
        </loginRegisterContext.Provider>
      </Container>
      {/* <ThemeToggleButton pos="fixed" bottom="2" right="2" /> */}
    </Box>
  );
}

export default App;
