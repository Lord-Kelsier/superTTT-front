import { Box, Button, Icon } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaRegCircle } from 'react-icons/fa6';
import { RxCross1 } from 'react-icons/rx';

type CellButtonProps = {
  cellIndex: number;
  boardIndex: number;
};
type CellProps = {
  cellIndex: number;
  height: string;
  widthDist: string;
  boardIndex: number;
};

function CellButton({ cellIndex, boardIndex }: CellButtonProps) {
  const playerIcon = 'o';
  const [owner, setOwner] = useState('');
  let icon: JSX.Element | null = null;
  if (owner === 'x') {
    icon = <Icon w="40px" h="40px" color="blue.600" as={RxCross1} />;
  } else if (owner === 'o') {
    icon = <Icon w="40px" h="40px" color="blue.600" as={FaRegCircle} />;
  }
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (owner !== '') return;
    setOwner(playerIcon);
  };
  return (
    <Button
      w="40px"
      h="40px"
      _hover={{
        bg: 'blue.900',
      }}
      p="0"
      m="0"
      alignItems="flex-start"
      justifyContent="left"
      onClick={handleClick}
    >
      {icon}
    </Button>
  );
}
function Cell({ boardIndex, cellIndex, height, widthDist }: CellProps) {
  const borderColor = 'orange.900';
  return (
    <Box p="1" borderColor={borderColor} h={height} borderWidth={widthDist}>
      <CellButton boardIndex={boardIndex} cellIndex={cellIndex} />
    </Box>
  );
}

export default Cell;
