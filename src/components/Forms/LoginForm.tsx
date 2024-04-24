import React, { useContext, useState } from 'react';

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Link,
  Text,
} from '@chakra-ui/react';

import loginRegisterContext from '../../shared/contexts/login-registerContext';
import { useFetchPost } from '../../shared/services/useFetch';
import { PasswordInput, TextInput } from './InputHandlers';

/* eslint no-console: 0 */

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const setHasAnAcount = useContext(loginRegisterContext);
  const useHandleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // !! no dejar que se envie la request si faltan campos
    event.preventDefault();
    const loginURL = 'http://localhost:5318/login/';
    const response = await useFetchPost(loginURL, {
      username,
      password,
    });
    if (response.statusCode === 200) {
      localStorage.setItem('accessToken', response.access);
      localStorage.setItem('refreshToken', response.refresh);
    } else {
      console.log(response);
    }
    // lanzar alerta
  };
  return (
    <form onSubmit={useHandleSubmit}>
      <FormControl>
        <Text>Log In</Text>
        <FormLabel my="15px">Nombre de usuario</FormLabel>
        <TextInput
          textState={username}
          textSetter={setUsername}
          inputType="text"
        />
        <FormLabel my="15px">Contraseña</FormLabel>
        <PasswordInput passState={password} passSetter={setPassword} />
        <Flex align="baseline" gap="10px">
          <Button my="15px" type="submit">
            Ingresar
          </Button>
          <Text>
            Aun no tienes una cuenta?{' '}
            {/* eslint-disable-next-line -- Solo para parecer a las 
            páginas tipicas y no utilizar el router aun */}
            <Link onClick={() => setHasAnAcount(false)}>Registrate aquí</Link>
          </Text>
        </Flex>
      </FormControl>
    </form>
  );
}

export default LoginForm;
