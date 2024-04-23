import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Flex,
  Link,
} from '@chakra-ui/react';
import React, { useState, useContext } from 'react';
import { loginRegisterContext } from '../shared/contexts/login-registerContext';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setHasAnAcount } = useContext(loginRegisterContext);
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(event.target.value);
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const loginURL = 'http://localhost:5318/login/';
    const response = await fetch(loginURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const responseFormatted = await response.json();
    if (response.status === 200) {
      localStorage.setItem('accessToken', responseFormatted.access);
      localStorage.setItem('refreshToken', responseFormatted.refresh);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <Text>Log In</Text>
        <FormLabel my="15px">Nombre de usuario</FormLabel>
        <Input
          isInvalid={username === ''}
          type="text"
          value={username}
          onChange={handleUsernameChange}
        />
        <FormLabel my="15px">Contraseña</FormLabel>
        <Input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          isInvalid={password === ''}
        />
        <Flex align="baseline" gap="10px">
          <Button my="15px" type="submit">
            Ingresar
          </Button>
          <Text>
            Aun no tienes una cuenta?{' '}
            <Link onClick={(e) => setHasAnAcount(false)}>Registrate aquí</Link>
          </Text>
        </Flex>
      </FormControl>
    </form>
  );
}

export default LoginForm;
