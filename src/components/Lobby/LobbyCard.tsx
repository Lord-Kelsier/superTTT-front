import { LobbyProps } from '../../shared/types/LobbyTypes';
import { GameTypeToName, MaxPlayers } from '../../shared/Enums/Games';
import { Card, Flex, Text, Container, Box, HStack } from '@chakra-ui/react';
function LobbyCard({ lobbyInfo }: LobbyProps) {
  const isListedGame = lobbyInfo.gameType in Object.keys(GameTypeToName);
  const gameName = isListedGame
    ? GameTypeToName[lobbyInfo.gameType]
    : 'Game not found';
  const playersAmount = lobbyInfo.players.length;
  return (
    <Card
      flexGrow="1"
      minW="380px"
      fontSize="xl"
      fontWeight="bold"
      minH="70px"
      my="10px"
      p="2"
      bg="blue.800"
    >
      <HStack>
        <Text
          border="solid"
          borderWidth="0 3px 3px 0"
          px="3"
          borderColor="blackAlpha.900"
          borderRadius="0 0 5px 0"
        >
          {lobbyInfo.id}
        </Text>
        <Container>
          <Text w="260px" isTruncated>
            {lobbyInfo.title}
          </Text>
        </Container>
      </HStack>
      <Flex direction="column">
        <Text fontSize="md">{gameName}</Text>
        {isListedGame && (
          <Text fontSize="sm" fontWeight="light" fontStyle="italic">
            Jugadores: {playersAmount}/{MaxPlayers[lobbyInfo.gameType]}
          </Text>
        )}
      </Flex>
    </Card>
  );
}

export default LobbyCard;
