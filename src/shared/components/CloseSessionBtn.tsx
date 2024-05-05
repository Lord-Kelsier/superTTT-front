import { Button, ChakraProps } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function CloseSessionBtn(props: ChakraProps) {
  const navitage = useNavigate();
  const handleCloseSession = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    navitage('/login');
  };

  return (
    <Button onClick={handleCloseSession} {...props}>
      Cerrar Sesión
    </Button>
  );
}

export default CloseSessionBtn;
