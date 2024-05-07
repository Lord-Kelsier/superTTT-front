import { Text, Box, Flex, Card } from '@chakra-ui/react';
import { useLoaderData } from 'react-router-dom';
import { LobbyLoaderData } from '../../shared/types/LobbyTypes';
import { GameTypeToName } from '../../shared/Enums/Games';
import LobbyDetailButtons from './LobbySubcomponents/LobbyDetailButtons';

type PlayerCardProp = {
  username: string;
};

function PlayerCard({ username }: PlayerCardProp) {
  return (
    <Card my="1" bg="blue.700" p="5px">
      <Text minW="150px" isTruncated>
        {username}
      </Text>
    </Card>
  );
}

function Lobby() {
  const loaderData = useLoaderData() as LobbyLoaderData;
  const lobbyData = loaderData.lobbyData;
  return (
    <Flex mt="50px" align="center" direction="column">
      <Box w="50%" bg="blue.600" p="20px" borderRadius="10px">
        <Flex
          mb="10px"
          borderWidth="0 0 3px 0"
          fontWeight="bold"
          fontSize="2xl"
        >
          <Text pr="5px" mr="5px" borderWidth="0 3px 0 0">
            Id de sala: {lobbyData.id}
          </Text>
          <Text>{lobbyData.title}</Text>
        </Flex>
        <Text pb="10px" fontSize="xl" fontWeight="bold">
          Juego: {GameTypeToName[lobbyData.gameType]}
        </Text>
        <Flex flexWrap="wrap">
          <Text mr="30px" my="5px">
            Jugadores:
          </Text>
          <Box minH="6rem" bg="blue.900" p="10px" borderRadius="10px">
            {lobbyData.players.map((player, index) => (
              <PlayerCard key={index} username={player.username} />
            ))}
          </Box>
        </Flex>
        <Text my="10px" fontSize="large">
          {lobbyData.started ? 'Partida iniciada' : 'Esperando Jugadores'}
        </Text>
        <Flex alignItems="baseline" gap="5px" flexWrap="wrap">
          <Text>Dueño de la sala: </Text>
          <PlayerCard username={lobbyData.owner} />
        </Flex>
        <LobbyDetailButtons
          isUserInside={loaderData.isUserInside}
          isUserOwner={loaderData.isUserOwner}
          lobbyId={lobbyData.id}
        />
      </Box>
    </Flex>
  );
}

export default Lobby;
