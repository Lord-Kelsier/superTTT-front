import { LobbyProps, LobbyType } from '../../shared/types/LobbyTypes';
import { Card, Text, Box } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useFetch } from '../../shared/services/useFetch';
import { superTTTApiBaseUrl } from '../../shared/consts';

function Lobby({ title }: LobbyProps) {
  return (
    <Card
      w="100%"
      minW="150px"
      fontSize="xl"
      fontWeight="bold"
      minH="70px"
      my="10px"
      p="2"
      bg="blue.800"
    >
      <Text>{title}</Text>
    </Card>
  );
}

function LobbyContainer() {
  const [lobbyList, setLobbyList] = useState<LobbyType[]>([]);
  useEffect(() => {
    useFetch(
      `${superTTTApiBaseUrl}/api/v1/lobby/`,
      localStorage.getItem('accessToken')
    ).then(([lobbies, statusCode]) => {
      console.log(lobbies);
      setLobbyList(lobbies);
    });
  }, []);
  return (
    <Box maxH="800px" overflow="auto">
      {lobbyList.length !== 0 ? (
        lobbyList.map((lobby) => <Lobby key={lobby.id} title={lobby.title} />)
      ) : (
        <Text>No hay lobbies creados</Text>
      )}
    </Box>
  );
}

export default LobbyContainer;
