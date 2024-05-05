import { LobbyProps } from '../../../shared/types/LobbyTypes';
import { GameTypeToName, MaxPlayers } from '../../../shared/Enums/Games';
import {
  Card,
  Flex,
  Text,
  Container,
  LinkBox,
  LinkOverlay,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
function LobbyCard({ lobbyInfo }: LobbyProps) {
  const isListedGame = lobbyInfo.gameType in Object.keys(GameTypeToName);
  const gameName = isListedGame
    ? GameTypeToName[lobbyInfo.gameType]
    : 'Game not found';
  const playersAmount = lobbyInfo.players.length;
  return (
    <LinkBox as="article" flexGrow="1">
      <Card
        minW="380px"
        fontSize="xl"
        fontWeight="bold"
        minH="70px"
        my="10px"
        p="5px"
        bg="blue.800"
        transition="transform 0.1s"
        _hover={{
          transform: 'translate(0, -10px)',
        }}
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
          <LinkOverlay as={Link} to={`/lobby/${lobbyInfo.id}`}>
            <Text fontSize="md">{gameName}</Text>
          </LinkOverlay>
          {isListedGame && (
            <Text fontSize="sm" fontWeight="light" fontStyle="italic">
              Jugadores: {playersAmount}/{MaxPlayers[lobbyInfo.gameType]}
            </Text>
          )}
        </Flex>
      </Card>
    </LinkBox>
  );
}

export default LobbyCard;
