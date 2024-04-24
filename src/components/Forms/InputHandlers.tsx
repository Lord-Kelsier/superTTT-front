import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';
import { useState } from 'react';
import isPasswordValid from '../../shared/services/isPasswordValid';

interface PasswordInputProps {
  password: string;
  passwordSetter: React.Dispatch<React.SetStateAction<string>>;
}

interface TextInputProps {
  textState: string;
  textSetter: React.Dispatch<React.SetStateAction<string>>;
  inputType: string;
}

function PasswordInput({ password, passwordSetter }: PasswordInputProps) {
  const [show, setShow] = useState(false);
  return (
    <InputGroup>
      <FormControl>
        <Input
          type={show ? 'text' : 'password'}
          pr="4.5rem"
          value={password}
          placeholder="Introduce la contraseña"
          onChange={(e) => passwordSetter(e.target.value)}
          isInvalid={!isPasswordValid(password)}
        />
        <FormHelperText>
          La contraseña debe tener almenos 8 caracteres y no pueden ser todos
          numericos
        </FormHelperText>
      </FormControl>
      <InputRightElement mr="20px">
        <Button h="1.75rem" size="sm" px="35px" onClick={() => setShow(!show)}>
          {show ? 'Ocultar' : 'Mostrar'}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

function TextInput({ textState, textSetter, inputType }: TextInputProps) {
  return (
    <Input
      isInvalid={textState === ''}
      type={inputType}
      value={textState}
      onChange={(e) => textSetter(e.target.value)}
    />
  );
}

export { PasswordInput, TextInput };
