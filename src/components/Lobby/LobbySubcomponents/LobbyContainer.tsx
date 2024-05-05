import { LobbyType } from '../../../shared/types/LobbyTypes';
import { Text, Flex } from '@chakra-ui/react';
import LobbyCard from './LobbyCard';
import { useNavigate, useLoaderData } from 'react-router-dom';

function LobbyContainer() {
  const lobbyList = useLoaderData() as LobbyType[];
  return (
    <Flex
      justifyContent="space-evenly"
      gap="5px"
      maxH="800px"
      overflow="auto"
      wrap="wrap"
      p="5px"
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
