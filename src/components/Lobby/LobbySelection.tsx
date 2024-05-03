import { Box, Text, UnorderedList } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useFetch } from '../../shared/services/useFetch';
import { LobbyType } from '../../shared/types/LobbyTypes';

function LobbySelection() {
  const [lobbyList, setLobbyList] = useState();
  useEffect(() => {
    const lobbies = useFetch(
      'http://localhost:5318/api/v1/lobby/',
      localStorage.getItem('accessToken')
    );
    console.log(lobbies);
  }, []);
  return (
    <Box>
      <Text>Lista de Lobbies</Text>
    </Box>
  );
}

export default LobbySelection;
