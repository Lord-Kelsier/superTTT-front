import {
  Box,
  Text,
  Center,
  Grid,
  GridItem,
  Button,
  HStack,
} from '@chakra-ui/react';
import LobbyContainer from './LobbyContainer';

function SidePanel() {
  return (
    <HStack justifyContent="center">
      <Button w="80%"> + Crear Lobby</Button>
    </HStack>
  );
}
function LobbySelection() {
  return (
    <Box>
      <Center bg="blue.800">
        <Text>Lista de Lobbies</Text>
      </Center>
      <Grid
        templateAreas={`"panel lobbies"`}
        templateColumns={'25% 1fr'}
        gap="1"
      >
        <GridItem
          borderRadius="0 0 5px 5px"
          p="2"
          pt="5"
          bg="blue.800"
          area="panel"
        >
          <SidePanel />
        </GridItem>
        <GridItem p="2" bg="blue.700" area="lobbies">
          <LobbyContainer />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default LobbySelection;
