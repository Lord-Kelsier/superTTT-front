import { Flex, Button } from '@chakra-ui/react';
import Reac, { useState } from 'react';
import { useFetch, useFetchPost } from '../../../shared/services/useFetch';
import { superTTTApiBaseUrl } from '../../../shared/consts';
import { useNavigate } from 'react-router-dom';

type ButtonsSectionProps = {
  isUserInside: boolean;
  isUserOwner: boolean;
  lobbyId: number;
};

type FetchButtonPorps = {
  text: string;
  endPoint: string;
  body: any;
  method: string;
};

function FetchButton({ text, endPoint, body, method }: FetchButtonPorps) {
  const [isLoading, setIsLoading] = useState(false);
  const url = `${superTTTApiBaseUrl}/${endPoint}`;
  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (isLoading) return;
    setIsLoading(true);
    const [data, statusCode] = await useFetchPost(
      url,
      body,
      localStorage.getItem('accessToken'),
      method
    );
    setIsLoading(false);
  };

  return (
    <Button bg="blue.900" onClick={handleClick}>
      {text}
    </Button>
  );
}
function LobbyDetailButtons({
  isUserInside,
  isUserOwner,
  lobbyId,
}: ButtonsSectionProps) {
  const navigate = useNavigate();
  const isOwnerBtns = [
    <FetchButton
      key={0}
      text="Iniciar Partida"
      endPoint="api/v1/lobby/start_game/"
      body={{ lobby_id: lobbyId }}
      method="PATCH"
    />,
    <FetchButton
      key={1}
      text="Eliminar Lobby"
      endPoint={`api/v1/lobby/${lobbyId}/`}
      body={{}}
      method="DELETE"
    />,
  ];
  const isInsideBtns = [
    <FetchButton
      key={0}
      text="Salir Lobby"
      endPoint="api/v1/lobby/leave_lobby/"
      body={{ lobby_id: lobbyId }}
      method="PATCH"
    />,
  ];
  const isOutsideBtns = [
    <FetchButton
      key={0}
      text="Entrar al lobby"
      endPoint="api/v1/lobby/enter_lobby/"
      body={{ lobby_id: lobbyId }}
      method="PATCH"
    />,
    <Button key={1} bg="blue.900" onClick={() => navigate('/lobby')}>
      Volver al lista de salas
    </Button>,
  ];
  return (
    <Flex mt="10px" gap="5px" flexWrap="wrap">
      {isUserOwner && isOwnerBtns}
      {isUserInside ? isInsideBtns : isOutsideBtns}
    </Flex>
  );
}

export default LobbyDetailButtons;
