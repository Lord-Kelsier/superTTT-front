import { Box, Grid } from '@chakra-ui/react';
import Cell from './Cell';

type SubBoardProps = {
  boardIndex: number;
  borderWidthDist: Array<string>;
};
function SubBoard({ boardIndex, borderWidthDist }: SubBoardProps) {
  const height = '50px';
  const Cells = [];
  for (let i = 0; i < 9; i++) {
    Cells.push(
      <Cell
        key={i}
        boardIndex={boardIndex}
        cellIndex={i}
        height={height}
        widthDist={borderWidthDist[i]}
      />
    );
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

export default SubBoard;
