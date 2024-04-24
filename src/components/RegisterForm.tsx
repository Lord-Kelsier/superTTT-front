import React, { useContext, useState } from 'react';

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Link,
  Text,
} from '@chakra-ui/react';

import loginRegisterContext from '../shared/contexts/login-registerContext';
import { useFetchPost } from '../shared/services/useFetch';
import { PasswordInput, TextInput } from './Forms/InputHandlers';

/* eslint no-console: 0 */

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConf, setPasswordConf] = useState('');
  const setHasAnAcount = useContext(loginRegisterContext);
  const useHandleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // !! no dejar que se envie la request si faltan campos
    event.preventDefault();
    const registerURL = 'http://localhost:5318/register/';
    const response = await useFetchPost(registerURL, {
      username,
      password,
      password2: passwordConf,
      email,
    });
    if (response.statusCode === 201) {
      setHasAnAcount(true);
    } else {
      console.log(response.data);
    }
    // mostrar errores
  };
  return (
    <form onSubmit={useHandleSubmit}>
      <Text>Registro</Text>
      <FormLabel my="15px">Correo</FormLabel>
      <TextInput textState={email} textSetter={setEmail} inputType="email" />
      <FormLabel my="15px">Nombre de usuario</FormLabel>
      <TextInput
        textState={username}
        textSetter={setUsername}
        inputType="text"
      />
      <FormLabel my="15px">Contraseña</FormLabel>
      <PasswordInput passState={password} passSetter={setPassword} />
      <FormLabel my="15px">Confirmar contraseña</FormLabel>
      <PasswordInput passState={passwordConf} passSetter={setPasswordConf} />
      <Flex align="baseline" gap="10px">
        <Button my="15px" type="submit">
          Registrar
        </Button>
        <Text>
          Ya tienes una cuenta?{' '}
          {/* eslint-disable-next-line -- Solo para parecer a las
              páginas tipicas y no utilizar el router aun */}
          <Link onClick={() => setHasAnAcount(true)}>Ingresa aquí</Link>
        </Text>
      </Flex>
    </form>
  );
}

export default RegisterForm;
