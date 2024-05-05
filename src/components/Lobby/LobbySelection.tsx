import { Box, Text, Center, Grid, GridItem } from '@chakra-ui/react';
import LobbyContainer from './LobbySubcomponents/LobbyContainer';
import CloseSessionBtn from '../../shared/components/CloseSessionBtn';
import SidePanel from './LobbySubcomponents/SidePanel';

function LobbySelection() {
  return (
    <Box>
      <Grid bg="blue.800" templateColumns={'25% 1fr'} mb="1">
        <CloseSessionBtn m="auto" />
        <Center h="70px" mb="1">
          <Text fontSize="2rem">Lista de Lobbies</Text>
        </Center>
      </Grid>
      <Grid
        templateAreas={`"panel lobbies"`}
        templateColumns={'25% 1fr'}
        gap="1"
      >
        <GridItem
          borderRadius="0 0 0 10px"
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
