import { Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react';
import { useState } from 'react';

interface PasswordInputProps {
  passState: string;
  passSetter: React.Dispatch<React.SetStateAction<string>>;
}

interface TextInputProps {
  textState: string;
  textSetter: React.Dispatch<React.SetStateAction<string>>;
  inputType: string;
}

function PasswordInput({ passState, passSetter }: PasswordInputProps) {
  const [show, setShow] = useState(false);
  return (
    <InputGroup>
      <Input
        type={show ? 'text' : 'password'}
        pr="4.5rem"
        value={passState}
        placeholder="Introduce la contraseña"
        onChange={(e) => passSetter(e.target.value)}
        isInvalid={passState === ''}
      />
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
