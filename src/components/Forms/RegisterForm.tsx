import React, { useContext, useState } from 'react';

import {
  Button,
  Flex,
  FormLabel,
  Link,
  Text,
  Collapse,
  UnorderedList,
  ListItem,
  Spinner,
} from '@chakra-ui/react';

import loginRegisterContext from '../../shared/contexts/login-registerContext';
import { useFetchPost } from '../../shared/services/useFetch';
import { PasswordInput, TextInput } from './InputHandlers';

/* eslint no-console: 0 */
interface errorResponse {
  username?: Array<string>;
  password?: Array<string>;
  password2?: Array<string>;
  email?: Array<string>;
}
function RegisterForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConf, setPasswordConf] = useState('');
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const [errorResponse, setErrorResponse] = useState<errorResponse>({});
  const setHasAnAcount = useContext(loginRegisterContext);
  const useHandleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // !! no dejar que se envie la request si faltan campos
    event.preventDefault();
    if (isSubmitLoading) return;
    const registerURL = 'http://localhost:5318/register/';
    setIsSubmitLoading(true);
    const [response, statusCode] = await useFetchPost(registerURL, {
      username,
      password,
      password2: passwordConf,
      email,
    });
    setIsSubmitLoading(false);
    if (statusCode === 201) {
      setHasAnAcount(true);
    } else if (statusCode === 400) {
      setErrorResponse(response);
    } else if ('username') {
      console.log(response);
    }
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
      <PasswordInput password={password} passwordSetter={setPassword} />
      <FormLabel my="15px">Confirmar contraseña</FormLabel>
      <PasswordInput password={passwordConf} passwordSetter={setPasswordConf} />
      <Flex align="baseline" gap="10px">
        <Button my="15px" type="submit">
          {isSubmitLoading ? <Spinner /> : 'Registrar'}
        </Button>
        <Text>
          Ya tienes una cuenta?{' '}
          {/* eslint-disable-next-line -- Solo para parecer a las
              páginas tipicas y no utilizar el router aun */}
          <Link onClick={() => setHasAnAcount(true)}>Ingresa aquí</Link>
        </Text>
      </Flex>
      <Collapse in={Object.keys(errorResponse).length !== 0}>
        <Text>Errores</Text>
        <UnorderedList color="red.300">
          {Object.entries(errorResponse).map(([field, errors], idx) => {
            return (
              <ListItem key={idx}>
                <Text>{field}:</Text>
                <Text>{errors.join(', ')}</Text>
              </ListItem>
            );
          })}
        </UnorderedList>
      </Collapse>
    </form>
  );
}

export default RegisterForm;
