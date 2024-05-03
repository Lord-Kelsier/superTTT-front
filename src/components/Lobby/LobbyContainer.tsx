import { LobbyType } from '../../shared/types/LobbyTypes';
import { Text, Flex } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useFetch } from '../../shared/services/useFetch';
import { superTTTApiBaseUrl } from '../../shared/consts';
import LobbyCard from './LobbyCard';

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
    <Flex
      justifyContent="space-evenly"
      gap="5px"
      maxH="800px"
      overflow="auto"
      wrap="wrap"
    >
      {lobbyList.length !== 0 ? (
        lobbyList.map((lobby) => <LobbyCard key={lobby.id} lobbyInfo={lobby} />)
      ) : (
        <Text>No hay lobbies creados</Text>
      )}
    </Flex>
  );
}

export default LobbyContainer;
