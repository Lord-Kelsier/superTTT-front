import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Flex,
  FormLabel,
  Link,
  Text,
  Collapse,
  Spinner,
} from '@chakra-ui/react';

import loginRegisterContext from '../../shared/contexts/login-registerContext';
import { useFetchPost } from '../../shared/services/useFetch';
import { PasswordInput, TextInput } from './InputHandlers';
import { superTTTApiBaseUrl } from '../../shared/consts';

/* eslint no-console: 0 */

function LoginForm() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState('');
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const setHasAnAcount = useContext(loginRegisterContext);
  const useHandleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // !! no dejar que se envie la request si faltan campos
    event.preventDefault();
    if (isSubmitLoading) return;
    const loginURL = `${superTTTApiBaseUrl}/login/`;
    setIsSubmitLoading(true);
    const [response, statusCode] = await useFetchPost(loginURL, {
      username,
      password,
    });
    setIsSubmitLoading(false);
    if (statusCode === 200) {
      localStorage.setItem('accessToken', response.access);
      localStorage.setItem('refreshToken', response.refresh);
      navigate('/lobby');
    } else if ('detail' in response) {
      setErrorText(response.detail);
    } else {
      console.log(response);
    }
  };
  return (
    <form onSubmit={useHandleSubmit}>
      <Text>Log In</Text>
      <FormLabel my="15px">Nombre de usuario</FormLabel>
      <TextInput
        textState={username}
        textSetter={setUsername}
        inputType="text"
      />
      <FormLabel my="15px">Contraseña</FormLabel>
      <PasswordInput password={password} passwordSetter={setPassword} />
      <Flex align="baseline" gap="10px">
        <Button my="15px" type="submit">
          {isSubmitLoading ? <Spinner /> : 'Ingresar'}
        </Button>
        <Text>
          Aun no tienes una cuenta?{' '}
          {/* eslint-disable-next-line -- Solo para parecer a las 
          páginas tipicas y no utilizar el router aun */}
          <Link onClick={() => setHasAnAcount(false)}>Registrate aquí</Link>
        </Text>
      </Flex>
      <Collapse in={errorText !== ''}>
        <Text>Errores:</Text>
        <Text color="red.200">{errorText}</Text>
      </Collapse>
    </form>
  );
}

export default LoginForm;
