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

/* eslint no-console: 0 */

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConf, setPasswordConf] = useState('');
  const setHasAnAcount = useContext(loginRegisterContext);
  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (event: React.ChangeEvent<HTMLInputElement>) =>
      setter(event.target.value);

  const useHandleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
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
      <FormControl>
        <Text>Registro</Text>
        <FormLabel my="15px">Correo</FormLabel>
        <Input
          isInvalid={email === ''}
          type="email"
          value={email}
          onChange={handleInputChange(setEmail)}
        />
        <FormLabel my="15px">Nombre de usuario</FormLabel>
        <Input
          isInvalid={username === ''}
          type="text"
          value={username}
          onChange={handleInputChange(setUsername)}
        />
        <FormLabel my="15px">Contraseña</FormLabel>
        <Input
          type="password"
          value={password}
          onChange={handleInputChange(setPassword)}
          isInvalid={password === ''}
        />
        <FormLabel my="15px">Confirmar contraseña</FormLabel>
        <Input
          type="password"
          value={passwordConf}
          onChange={handleInputChange(setPasswordConf)}
          isInvalid={passwordConf === ''}
        />
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
      </FormControl>
    </form>
  );
}

export default RegisterForm;
