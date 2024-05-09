import { Box, Text, Grid } from '@chakra-ui/react';
import SubBoard from './SubBoard';
import { useLoaderData } from 'react-router-dom';
import { SuperTTTLoaderData } from './types';
import gameContext from './gameContext';

function Board() {
  const data = useLoaderData() as SuperTTTLoaderData;

  const borderWidthDistribution = [
    '0 2px 2px 0',
    '0 2px 2px 2px',
    '0 0 2px 2px',
    '2px 2px 2px 0',
    '2px 2px 2px 2px',
    '2px 0 2px 2px',
    '2px 2px 0 0',
    '2px 2px 0 2px',
    '2px 0 0 2px',
  ];
  const subBoards = [];
  for (let i = 0; i < borderWidthDistribution.length; i++) {
    subBoards.push(
      <Box
        key={i}
        borderWidth={borderWidthDistribution[i]}
        borderColor="inherit"
      >
        <SubBoard boardIndex={i} borderWidthDist={borderWidthDistribution} />
      </Box>
    );
  }
  return (
    <Box>
      <gameContext.Provider value={data}>
        <Text>Tablero</Text>
        <Box p="10px" m="80px" w="620px" h="620px" bg="teal.400">
          <Grid templateColumns="1fr 1fr 1fr" borderColor="orange.900">
            {subBoards}
          </Grid>
        </Box>
      </gameContext.Provider>
    </Box>
  );
}

export default Board;
