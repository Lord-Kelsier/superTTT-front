import { Box, Text, Grid } from '@chakra-ui/react';
type CellProp = {
  index: number;
  height: string;
};
import { useLoaderData } from 'react-router-dom';
function Cell({ index, height }: CellProp) {
  const borderColor = 'orange.900';
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
  return (
    <Box
      borderColor={borderColor}
      h={height}
      borderWidth={borderWidthDistribution[index]}
    ></Box>
  );
}
function SubBoard() {
  const height = '50px';
  const Cells = [];
  for (let i = 0; i < 9; i++) {
    Cells.push(<Cell key={i} index={i} height={height} />);
  }
  return (
    <Box p="10px" w="190px" h="185x">
      <Grid
        transition="transform 0.2s"
        bg="teal.200"
        p="10px"
        borderRadius="30px"
        borderWidth="1px"
        templateColumns={`${height} ${height} ${height}`}
        borderColor="orange.900"
        _hover={{
          transform: 'scale(1.5);',
        }}
      >
        {Cells}
      </Grid>
    </Box>
  );
}
function Board() {
  const data = useLoaderData();
  return (
    <Box>
      <Text>Tablero</Text>
      <Box p="10px" m="80px" w="620px" h="620px" bg="teal.400">
        <Grid templateColumns="1fr 1fr 1fr" borderColor="orange.900">
          <Box borderWidth="0 2px 2px 0" borderColor="inherit">
            <SubBoard />
          </Box>
          <Box borderWidth="0 2px 2px 2px" borderColor="inherit">
            <SubBoard />
          </Box>
          <Box h="200px" borderWidth="0 0 2px 2px" borderColor="inherit">
            <SubBoard />
          </Box>
          <Box borderWidth="2px 2px 2px 0" borderColor="inherit">
            <SubBoard />
          </Box>
          <Box borderWidth="2px 2px 2px 2px" borderColor="inherit">
            <SubBoard />
          </Box>
          <Box h="200px" borderWidth="2px 0 2px 2px" borderColor="inherit">
            <SubBoard />
          </Box>
          <Box borderWidth="2px 2px 0 0" borderColor="inherit">
            {' '}
            <SubBoard />
          </Box>
          <Box borderWidth="2px 2px 0 2px" borderColor="inherit">
            <SubBoard />
          </Box>
          <Box h="200px" borderWidth="2px 0 0 2px" borderColor="inherit">
            <SubBoard />
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}

export default Board;
