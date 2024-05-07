import { Text, Box, Flex, Card, Button } from '@chakra-ui/react';
import { useLoaderData } from 'react-router-dom';
import { LobbyLoaderData } from '../../shared/types/LobbyTypes';
import { GameTypeToName } from '../../shared/Enums/Games';
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
  console.log(loaderData.isUserInside);
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
        <Flex mt="10px" gap="5px" flexWrap="wrap">
          <Button bg="blue.900">Iniciar Partida</Button>
          <Button bg="blue.900">Eliminar Lobby</Button>
          <Button bg="blue.900">Salir Lobby</Button>
          <Button bg="blue.900">Volver al lista de salas</Button>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Lobby;
