import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Flex,
  Link,
} from '@chakra-ui/react';
import React, { useState, useContext, AnchorHTMLAttributes } from 'react';
import { loginRegisterContext } from '../shared/contexts/login-registerContext';
import { useFetchPost } from '../shared/services/useFetch';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConf, setPasswordConf] = useState('');
  const { setHasAnAcount } = useContext(loginRegisterContext);
  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<any>>) =>
    (event: React.ChangeEvent<HTMLInputElement>) =>
      setter(event.target.value);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const registerURL = 'http://localhost:5318/register/';
    const response = await useFetchPost(registerURL, {
      username: username,
      password: password,
      password2: passwordConf,
      email: email,
    });
    if (response.statusCode === 201) {
      setHasAnAcount(true);
    } else {
      console.log(response.data);
    }
    // mostrar errores
  };
  return (
    <form onSubmit={handleSubmit}>
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
            <Link onClick={(e) => setHasAnAcount(true)}>Ingresa aquí</Link>
          </Text>
        </Flex>
      </FormControl>
    </form>
  );
}

export default RegisterForm;
